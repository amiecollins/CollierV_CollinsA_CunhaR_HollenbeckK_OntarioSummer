import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import attraction_cpnt from './attraction.js'

export default {
    data: function () {
        return {
            show: false,
            exit_button: {
                img_url: "",
                alt: "click here to exit",
            }
        }
    },

    props: [ "keyword", "category_class" ],

    methods: {
        showAttractions() {
            show = true;
        },

        hideAttractions() {
            show = false;
        }
    },

    component: {
        attraction_cpnt
    },

    template: `

    <div class="keyword-title">{{ keyword.name }}</div>
    <img class="keyword-image" v-bind:class="keyword.class" :src="keyword.img_url" :alt="'photo for ' + keyword.name">
    <div class="keyword-description">{{ keyword.description }}</div>
    <div class="keyword-button" v-on:click="showAttractions">See Options</div>
    <template class="see-attractions" v-if="keyword !== null && show">
        <div v-for="attraction in keyword.attractions">
            <attraction_cpnt v-bind:attraction="attraction"></attraction_cpnt>
        </div>
    </template>

    `
}