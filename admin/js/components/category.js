import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

export default {
    data: function () {
        return {
            show = false;
        }
    },

    props: [ "category_data" ],

    methods: {
        showAttractions() {
            show = true;
        },

        hideAttractions() {
            show = false;
        }
    },

    template: `
    
    <section v-bind:class="{ category_data.class }">
    <h3 class="hidden">{{ category.name }}</h3>

        <img :src="category_data.img_url" :alt="category_data.name" class="category-image">
        <div class="category-content">
            <div class="category-title">{{ category_data.title }}</div>
            <div class="category-link">See Attractions</div>
        </div>

    </section>
    
    `
}