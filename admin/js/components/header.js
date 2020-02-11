import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import search from './components/search.js'

export default {
    data: function () {
        return {
            search_query = "",
            search_results = null
        }
    },

    props: [ "user" ],

    methods: {

    search(query) {
        return search.searchByString(5, query);
    },

    logout(){

    },

    openLogin() {

    }

    },

    template: `
    
    <section class="top-bar">
        <template v-if="user !== null">
            <img :src="user.img_url" :alt="'user photo for ' + user.name" class="user-image"> 
            <span class="greeting">Hey there, {{ user.firstname }}</span>
        </template><template v-else>
            <span class="greeting">How's it goin', eh?</span>
        </template>

        <form><input type="text" class="search-bar" v-model="search_query" v-on:keyup="search(search_query)"></form>
        <template v-if="search_query !== "" && search_results !== null" class="search-results">
        <div class="search_title">Search Results for <span class="accent">{{ search_query }}</span></div>
            <div v-for="result in search_results">

                <img :src="result.img_url" :alt="result.name + 'photo'" class="user-image">
                <div>
                    <div class="result_title">{{ result.name }}</div>
                    <div class="result_location">located in: {{ result.city }}, ON</div>
                </div>

            </div>

        </template><template v-else="search_query !== "" && search_results === null" class="search-results">
            <div class="search_title">No Search Results Found for <span class="accent">{{ search_query }}</span></div>
        </template>
        
        <template v-if="user !== null">
            <div class="logout" v-on:click="logout">LOGOUT</div>
        </template><template v-else>
            <div class="logout" v-on:click="openLogin">LOGIN / REGISTER</div>
        </template>
    </section>
    
    `
}