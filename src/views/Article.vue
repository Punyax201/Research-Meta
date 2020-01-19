<template>
  <div class="about">
    <v-container fluid>

      <!--WORD STATS-->
      <v-slide-y-transition>
        <!-- <div class="recomm" v-if="recommendedItems.length > 0" v-show="true">
          <h3 class="headline">Also See: </h3>
          <v-chip v-for="i in recommendedItems" @click="searchInterests(i)" :key="i" href="" class="ma-2">{{i}}</v-chip>  
        </div> -->
      </v-slide-y-transition>

      <!--CARD-->
      <v-card tile>
        <v-card-text>
          <div class="d-flex justify-around">
            <v-img max-width="150" :src="pdfIcon"></v-img>

            <v-list>
              <v-list-item>
                <h1 class="title primary--text">{{article.title}}</h1>
              </v-list-item>

              <v-list-item>
                <h2 class="subtitle-1">By {{article.author}}</h2>
              </v-list-item>

              <v-list-item>
                <p class="body-2">{{article.abstract}}</p>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
/* eslint-disable */
export default {

  data(){
    return{
      pdfIcon: require('../assets/pdf.png'),

      article: {}
    }
  },
  created(){
      //this.article = this.$store.article.getters['getCurrArticle']
      this.$store.article.dispatch('keywordsAction')
  },
  mounted(){
    this.impWords = ['a']
  }
}
</script>
