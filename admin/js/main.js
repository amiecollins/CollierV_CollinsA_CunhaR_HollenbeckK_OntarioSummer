import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import header_cpnt from './components/header.js'
import footer_cpnt from './components/footer.js'
import category_cpnt from './components/category.js'
import subcategory_cpnt from './components/subcategory.js'
import search from './components/search.js'

const vueIndex = (() => {

    let vm = new Vue({
        data: {
            selected_category: null,
            user: null,
            data: null
        },
        
        methods: {

            getData() {

                if (selected_category !== null && user === null) {
                    var results = search.getByCategory(selected_category);
                } else if (user !== null && selected_category === null) {
                    var results = search.getByUser(user);
                } else if (user !== null && selected_category !== null) {
                    var results = search.mergeCategories(user, search.geByCategory(selected_category));
                } else {
                    return null;
                }

            }
        },

        components: {

            header_cpnt,
            footer_cpnt,
            category_cpnt,
            subcategory_cpnt
        }

    }).$mount("#main");

})();