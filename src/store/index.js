/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //SEARCH
    searchURL: 'http://172.23.0.31:8000/',
    recommURL: 'http://172.23.0.31:8000/recommendation?data=',
    keywordsURL: "http://172.23.0.31:8000/keywords?data=",

    searchMode: 'author',
    searchResults: [
      {
        id: "",
        name: "Punya",
        email: "asas"
      }
    ],
    lastSearchedItem: '',

    //RECOMMENDATION
    recommendedItems: [],

    //ARTICLE
    currArticle: {},

    //KEYWORDS
    keywords: {}
  },
  mutations: {
    updateSearchResults: (state,payload) => {
      state.searchResults = payload
    },

    setSearchMode: (state,payload) => {
      state.searchMode = payload
    },

    setLastSearchedItem: (state, payload) => {
      state.lastSearchedItem = payload
    },

    setRecommendedItems: (state,payload) => {
      setTimeout(function(){
        state.recommendedItems = payload
      },3000)    
    },

    setCurrArticle: (state,payload) => {
      state.currArticle = payload
    },

    setKeywords(state,payload){
      state.keywords = payload
    }
  },
  actions: {

    //SEARCH

    async searchAction(context,{key,filt}){

      let filter = context.state.searchMode
      let urlWithFilter = ""
      console.log("-->",filt)

      if(filt == 0){
        context.commit('setSearchMode','title')
        urlWithFilter = this.state.searchURL + "title?data="
      }
      else if(filt == 1){
        context.commit('setSearchMode','author')
        urlWithFilter = this.state.searchURL + "author?data="
      }
      else if(filt == 'interests'){
        context.commit('setSearchMode','interests')
        urlWithFilter = this.state.searchURL + "interests?data="
      }

      fetch(urlWithFilter + key)
          .then(res => res.json())
          .then(res => {
              console.log("filter",filter)
              console.log(res)
              context.commit('updateSearchResults', res)
              context.commit('setLastSearchedItem', key)
              
           })
           .finally(() => {
              context.dispatch('recommAction', key)
              console.log("finished...")
           })
    },

    //GET RECOMMENDATIONS
    async recommAction(context, key){
      fetch(this.state.recommURL + key)
          .then(res => res.json())
          .then(res => {
              console.log("RECC",res)
              context.commit('setRecommendedItems', res.data)
           })
    },

    //GET CURR ARTICLE
    currArticleAction(context,payload){
      context.commit('setCurrArticle',payload)
    },

    //KEYWORDS ACTION
    async keywordsAction(context, key){
      axios.get(this.state.keywordsURL + key).then(res => {
          context.commit('setKeywords', res)
          console.log("key",res)
      }).catch(err => {
        console.log("key url", this.state.keywords)
        console.log("key",err)
      })
    }
  },
  getters:{
    getSearchResults(state){
      return state.searchResults
    },

    getSearchMode(state){
      return state.searchMode
    },

    getLastSearchedItem(state){
      return state.lastSearchedItem;
    },

    getRecommendedItems(state){
      return state.recommendedItems
    },

    getCurrArticle(state){
      return state.currArticle  
    },

    //KEYWORDS
    getKeywords(state){
      return state.keywords
    }
  }
})
