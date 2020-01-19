<template>
  <div class="home">
    <v-container fluid>

      <!--Recommendations-->
      <RecommendationList />
      <h2 class="headline">Showing Results For <b>{{lastSearchedItem}}</b></h2>
      <!--Search Results-->
      <v-row dense>
        <v-col v-for="(i,index) in items" :key="index" :cols="searchModeAuthor ? 4 : 12">
          <SearchCard v-if="searchModeAuthor" :name="i.name" :email="i.email" :interests="i.interests" :imURL="i.url" />
          <ArticleCard v-if="searchModeTitle" :title="i.title" :author="i.author" :citedBy="i.citedby" :abstract="i.abstract" :source="i.source" :url="i.url_scholar" :fileURL="i.EPrint" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import SearchCard from '@/components/Showcase/SearchCard'
import ArticleCard from '@/components/Showcase/ArticleCard'
import RecommendationList from '@/components/RecommendationList'

export default {
  name: 'home',
  components: {
    SearchCard,
    RecommendationList,
    ArticleCard
  },
  
  computed: {
    items(){
      return this.$store.getters['getSearchResults']
    },

    searchModeAuthor(){
      let mode = this.$store.getters['getSearchMode']
      return (mode == 'author') ? true : false 
    },

    searchModeTitle(){
      let mode = this.$store.getters['getSearchMode']
      return mode == 'title' ? true : false 
    },

    searchModeInterests(){
      let mode = this.$store.getters['getSearchMode']
      return mode == 'interests' ? true : false 
    },

    lastSearchedItem(){
      return this.$store.getters['getLastSearchedItem']
    },

    recommendedItems(){
      return this.$store.getters['getRecommendedItems']
    }
  }
}
</script>
