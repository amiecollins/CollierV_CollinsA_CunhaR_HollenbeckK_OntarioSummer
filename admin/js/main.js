import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import header_cpnt from './components/header.js'
import footer_cpnt from './components/footer.js'
import category_cpnt from './components/category.js'
import search from './components/search.js'

var keywords = [
    "events",
    "theatre",
    "hotels",
    "campsites",
    "recreation",
    "nightlife",
    "experiences",
    "campsites",
    "natural wonders",
    "sightseeing",
    "outdoor activities",
    "art",
    "history",
    "shopping",
    "campsites",
    "food",
    "culture",
    "cannabis",
    "amusement parks",
    "spas",
    "resorts"
];

var default_categories = [
    {
        name: "family fun",
        keywords: [
            "amusement parks",
            "hotels",
            "resorts",
            "events",
            "recreation",
            "campsites",
            "sightseeing",
            "natural wonders",
            "culture",
            "art",
            "history",
            "experiences"
        ],
        img_url: "/images/family.jpg"
    },
    {
        name: "luxury getaway",
        keywords: [
            "hotels",
            "spas",
            "resorts",
            "shopping",
            "nightlife",
            "events",
            "food",
            "theatre",
            "art",
            "history",
            "experiences",
            "culture",
            "cannabis"
        ],
        img_url: "/images/luxury.jpg"
    },
    {
        name: "wilderness travel",
        keywords: [
            "campsites",
            "natural wonders",
            "outdoor activities",
            "culture",
            "cannabis",
            "recreation",
            "sightseeing",
            "events"
        ],
        img_url: "/images/wilderness.jpg"
    },
    {
        name: "history & culture",
        keywords: [
            "history",
            "culture",
            "art",
            "food",
            "sightseeing",
            "natural wonders",
            "experiences",
            "theatre",
            "nightlife",
            "hotels",
            "campsites",
            "cannabis",
            "outdoor activities",
            "recreation"
        ],
        img_url: "/images/history.jpg"
    },
    {
        name: "business",
        keywords: [
            "hotels",
            "resorts",
            "nightlife",
            "food",
            "shopping",
            "spas",
            "sightseeing",
            "experiences",
            "events",
            "theatre"
        ],
        img_url: "/images/history.jpg"
    }
];

const vueIndex = (() => {

    let vm = new Vue({
        data: {
            categories: default_cat,
            selected_cat: null,
            user: null
        },
        

        methods: {
            getComponents(query) {
                // check for query
                if (query !== "" && query !== null) {
                    // check for current page, send available media appropriate for that page
                    function addMediaType(collection, type) {
            
                        for (var a = 0; a < collection.length; a++) {
                            collection[a].media_type = type;
                        }
                        
                        return collection;
                    }
                    if (user != null) {
                        var results = search.getResultbyUser(10, categories, user, query);
                    } else {
                        var results = search.getResultbyCat(cat, categories, user, query);
                    }
                    return results;
                } else {
                    // if query is blank, clear past results
                    return null;
                }
            }

        },

        components: {

        }

    }).$mount("#main");

})();