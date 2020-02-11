import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import header_cpnt from './components/header.js'
import footer_cpnt from './components/footer.js'
import category_cpnt from './components/category.js'
import subcategory_cpnt from './components/subcategory.js'
import search from './components/search.js'
import login_cmpt from './components/login.js'
import register_cmpt from './components/register.js'

const vueIndex = (() => {

    let vm = new Vue({
        data: {
            selected_category: null,
            user: null,
            selected_attraction: null,
            selected_keyword: null,
            home_images: {
                hero: {
                    img_url: "",
                    alt: ""
                },
                category_images: [
                    {
                        img_url: "",
                        alt: ""
                    },
                    {
                        img_url: "",
                        alt: ""
                    },
                    {
                        img_url: "",
                        alt: ""
                    }
                ]
            }
        },
        
        methods: {

            getAttractions() {

                if (selected_category !== null && user === null) {
                    var results = search.getByCategory(selected_category);
                } else if (user !== null && selected_category === null) {
                    var results = search.getByUser(user);
                } else if (user !== null && selected_category !== null) {
                    var results = search.mergeCategories(user, search.geByCategory(selected_category));
                } else {
                    var results = null;
                }
                
            },

            getCategories() {
                var category_names = "Family Fun, Luxury Getaway, Wilderness Exploration, History &amp; Culture, Business";
                var results = search.getCategories(category_names);
                return results;
            }
        },

        components: {

            header_cpnt,
            footer_cpnt,
            category_cpnt,
            subcategory_cpnt,
            login_cmpt,
            register_cmpt

        }

    }).$mount("#main");

})();