<template>
    <v-parallax :src="bgImage" id="showcase" height="400">
        <v-container fluid>
            
            <v-row >   
                <v-col cols="8">
                    <v-btn-toggle v-model="filterMode">
                        <v-btn>
                        By Title
                        </v-btn>

                        <v-btn active-class>
                        By Author
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="10">
                    <!-- <v-text-field solo placeholder="Search by Title or Author...">
                    
                    </v-text-field> -->
                    <v-autocomplete
                        v-model="model"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="white"
                        hide-no-data
                        item-text="Description"
                        item-value="API"
                        placeholder="Search By Title or Author..."
                        prepend-icon="mdi-database-search"
                        solo
                    >
                        <template v-slot:no-data>
                            <v-list>
                                <v-list-item>
                                    0 Results
                                </v-list-item>
                            </v-list>
                        </template>
                        
                    </v-autocomplete>
                </v-col>
                <v-col cols="2">
                    <v-btn class="primary" @click="searchBtn" block>Search</v-btn>
                </v-col>
            </v-row>
<!-- 
            <v-divider></v-divider>
            <p class="text-center primary--text font-weight-bold">OR</p> -->
            <!--FILE INPUT-->
            <!-- <v-row>
                <v-col cols="10">
                    <v-file-input placeholder="Upload Custom PDF" chips></v-file-input>
                </v-col>
                <v-col>
                    <v-btn class="primary" block>Upload</v-btn>
                </v-col>
            </v-row> -->

        </v-container>      
    </v-parallax>  
</template>
<script>
/* eslint-disable */
import SearchCard from './SearchCard'
import {store} from 'vuex'

export default {
    components: {
        SearchCard
    },
    data(){
        return {
            bgImage: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

            filterMode: 1,

            //SEARCH
            descriptionLimit: 50,
            entries: [],
            isLoading: false,
            model: null,
            search: null,
            searchResults: [],

            //API
            apiURL: 'http://192.168.43.73:8000/author?data='
        }
    },
    computed: {
        items () {
            return this.searchResults.map(i => {
                return i.name
            })
        },
    },
    watch: {
        search(v){
            this.isLoading = true
            fetch(this.apiURL+v)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    this.searchResults = res
                })
                .finally(() => {
                    v = ""
                    this.isLoading = false
            })
        }
    },
    methods: {
        searchBtn(){
            let payload = {'key':this.search,'filt':this.filterMode}
            this.$store.dispatch('searchAction',payload)
            console.log("Filter",this.filterMode)
        }
    }
}
</script>
<style scoped>
</style>