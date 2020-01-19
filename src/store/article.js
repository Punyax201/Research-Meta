/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //API URLs
        keywordsURL: "http://172.23.0.31:8000/keywords?data=",

        //DATA
        keywords: {}
    },

    mutations: {
        setKeywords(state,payload){
            state.keywords = payload
        }
    },

    getters: {
        getKeywords(state){
            return state.keywords
        }
    },

    actions: {
        keywordsAction: (context, key) => {
            axios.get(context.keywordsURL + key).then(res => {
                context.commit('setKeywords', res)
                console.log("key",res)
            })
        }
    }
})