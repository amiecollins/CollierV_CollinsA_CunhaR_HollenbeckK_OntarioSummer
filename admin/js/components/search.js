import get from './get.js'

var categories = get("tbl_categories");
var attractions = get("tbl_attractions");
var keywords_master = get("tbl_keywords");

function queryBreaker(query){    
    // take out all characters that might mess with system, set to lower case (data checked will be set to lowercase as well)
    query = query.replace(/[^a-zA-Z0-9]/g, "");
    query = query.toLowerCase();
    query = query.split(" ");
    return query;
}

function getKeywords(string) {
    keywords = queryBreaker(string);
    var results = [];
    for (var i = 0; i < keywords.length; i++) {
        for (var x = 0; x < keywords_master.length; x++) {
            if (keywords[i] === keywords_master[x].name) {
                results.push(keywords_master[x]);
            }
        }
    }
}


function checkRelevance(keyword, query) {
    var score = 0;
    if (keyword.id === undefined || keyword.id < 0 || keyword.title === undefined) {
        return null;
    } else {
        for (var y = 0; y < query.length; y++) {
            // check relevance for each term in query
            console.log("checking " + keyword.title + " with" + query[y]);
            var data = keyword.toString().toLowerCase();
            if (data.includes(query[y])) {
                score++;
            }
        }
        return score;
    }
}

function addRelevanceColumn(data) {
    for (var r = 0; r < data.length; r++) {
        data[r].relevance = 0;
    }

    return data;
}

function getByUser(user) {

    var results = [ ];
    if (user !== null) {
        var keywords = getKeywords(user.keywords);
        for (var i = 0; i < keywords.length; i++) {
            results.push(getKeywordData(keywords[i]));
        }
    }
    return results;
}

function searchByString(total, query) {

    query = queryBreaker(query);

    subcategories = addRelevanceColumn(getKeywords(user.keywords));

    var column_names = [ "name", "description", "aka" ];

    for (var i = 0; i < subcategories.length; i++) {
        for (var x = 0; x < column_names.length; x++) { // repeat while there is still data phases left
            for (var x = 0; x < subcategories.length; x++) {
                // get relevance for this subcategory
                var relevanceScore = checkRelevance(subcategories[x], query);
                if (relevanceScore === null){
                    console.log(subcategories[x].title + " is removed")
                    subcategories = subcategories.splice(x);
                } else {
                    subcategories[x].relevance += relevanceScore;
                }
            }
    }

        // sort by relevance
        data = sortResults(data, "relevance");
    }
    /// idea for later -- spellchecker/omdb suggestions for data that have max relevance < 0.1
    return data.slice(0, total-1);
}



// finish writing getCategory and make a page!



function getCategory(category_name) {
    if (category_name !== null) {
        for (var i = 0; i < categories.length; i++) {
            if (category_name === categories[i].name) {
                return categories[i];
            }
        }
        return null;
    } else {
        return null;
    }
}

function getByCategory(cat) {
    var results = [ ];
    var category = getCategory(cat);
    if (category !== null) {
        var keywords = getKeywords(category.keywords);
        for (var i = 0; i < keywords.length; i++) {
            results.push(getKeywordData(keywords[i]));
        }
    }
    return results;
}

function getKeywordData(keyword) {
    if (keyword !== null) {

        var results = [ ];

        for (var i = 0; i < attractions.length; i++) {
            var keywords = getKeywords(attractions[i].keywords);
            for (var x = 0; x < keywords.length; i++) {
                if (keywords[x] === keyword) {
                    results.push(attractions[i]);
                } else {
                    // check other keywords that match attraction
                    doublecheck = queryBreaker(keywords[x].aka);
                    for (var z = 0; z < doublecheck.length; z++) {
                        if (keyword === doublecheck[z]) {
                            results.push(attractions[i]);
                        }
                    }
                }
            }
        }

        return results;
    } else {

        return null;
    }
}

function sortResults(unsorted, key) {

    var sorted = unsorted.sort(function (a,b) {
        return b[key] - a[key];
    });

    return sorted;

}

function mergeCategories(userdata, categorydata) {

    var results = addRelevanceColumn(categorydata);
    if (userdata.email !== null && categorydata !== null) {
        var user_keywords = queryBreaker(userdata.keywords);
        for (var i = 0; i < user_keywords.length; i++) {
            results[i].relevance = checkRelevance(results[i], user_keywords);
        }
        return results = sortResults(results, "relevance");
    } else {
        return null;
    }

}
