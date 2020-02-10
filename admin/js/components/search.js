import get from './get.js'

var categories = get("tbl_categories");

function queryBreaker(query){    
    // take out all characters that might mess with system, set to lower case (data checked will be set to lowercase as well)
    query = query.replace(/[^a-zA-Z0-9]/g, "");
    query = query.toLowerCase();
    query = query.split(" ");
    return query;
}

function getResultbyUser(total, data, user, query) {

    query = queryBreaker(query);

    for (var v = 0; v < data.length; v++) {
        data[v].relevance = 0;
    }

    for (var dataPhase = 0; dataPhase < 4; dataPhase++) { // repeat while there is still data phases left
        for (var x = 0; x < data.length; x++) {
            // get relevance for this data
            var relevanceScore = checkRelevance(data[x], dataType[dataPhase], query);
            if (relevanceScore === null){
                console.log(data[x].title + " is removed")
                data = data.splice(x);
            } else {
                data[x].relevance += relevanceScore;
            }
        }
        // sort by relevance
        data = sortResults(data, "relevance");
    }
    /// idea for later -- spellchecker/omdb suggestions for data that have max relevance < 0.1
    return data.slice(0, total-1);
}

function getResultbyCat(cat, data, query) {
    var keywords = cat.keywords;
    for (var i = 0; i < keywords.length; i++) {
        
    }
}

function getKeywordData(key) {
    
}

function sortResults(unsorted, key) {
    var sorted = unsorted.sort(function (a,b) {
        return b[key] - a[key];
    });

    return sorted;
}


function checkRelevance(mediaData, dataType, searchQuery) {
    var score = 0;
    if (mediaData.id === undefined || mediaData.id < 0 || mediaData.title === undefined) {
        return null;
    } else {
        for (var y = 0; y < searchQuery.length; y++) {
        // if checking short_descriptions, make sure it's not a song (if it is, switch data with other relevant info so it's still considered)
            if (dataType === "short_description" && mediaData.media_type === "song") {
                var data = mediaData.artist + mediaData.album;
                data = data.toString().toLowerCase();
            } else {
                // check relevance for each term in query
                console.log("checking " + mediaData.title + ", specifically " + dataType + ". Media type is " + mediaData.media_type);
                var data = mediaData[dataType].toString().toLowerCase();
            }
            if (data.includes(searchQuery[y])) {
                score++;
            }
        }
        // find average score based on length of query
        score = score / searchQuery.length;
        return score;
    }
}
