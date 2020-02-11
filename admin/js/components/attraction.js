import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

export default {
    data: function () {
        return {
            show: false
        }
    },

    props: [ "attraction" ],

    methods: {
        showAttraction() {
            show = true;
        },

        hideAttraction() {
            show = false;
        }
    },

    template: `

    <img class="attraction-image" :src="attraction.img_url" :alt="'photo for ' + attraction.name">
    <div class="attraction-content">
        <div class="attraction-name">{{ attraction.name }}</div>
        <div class="attraction-data">{{ attraction.city }} ON</div> | <div class="attraction-spend">{{ attraction.price }}</div>
        <div class="attraction-description">{{ attraction.description }}</div>
        <div class="attraction-button" v-on:click="showAttraction">See More</div>
    </div>
    <template class="see-full-attraction" v-if="show">
        <img class="exit-button" :src="exit_button.img_url" :alt="exit_button.alt" v-on:click="hideAttraction">
        <img class="attraction-image" :src="attraction.img_url" :alt="'photo for ' + attraction.name">
        <div class="attraction-content">
            <div class="attraction-name">{{ attraction.name }}</div>
            <div class="attraction-address">{{ attraction.address }}, {{ attraction.city }} Ontario, ({{ attraction.postal_code }})</div>
            <div class="attraction-spend">Expect to Spend: {{ attraction.price }}</div>
            <div class="attraction-description">{{ attraction.description }}</div>
            <a :href="attraction.link" class="attraction-link">Visit Website</a>
        </div>
    </template>
    
    `
}