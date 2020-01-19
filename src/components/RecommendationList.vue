<template>
      <v-slide-y-transition>
        <div class="recomm" v-if="recommendedItems.length > 0" v-show="true">
          <h3 class="headline">Also See: </h3>
          <v-chip v-for="i in recommendedItems" @click="searchInterests(i)" :key="i" href="" class="ma-2">{{i}}</v-chip>  
        </div>
      </v-slide-y-transition>
</template>
<script>
export default {
    computed: {
        recommendedItems(){
            return this.$store.getters['getRecommendedItems']
        }
    },
    mounted(){
        let key = this.$store.getters['getLastSearchedItem']
        this.$store.dispatch('recommAction',key)
    },
    methods: {
        searchInterests(key){
            this.$store.dispatch('searchAction',key)
        }
    }
}
</script>
