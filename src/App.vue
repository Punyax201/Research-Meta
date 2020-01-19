<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1 class="display-1">Research Meta</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Search />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Search from '@/components/Showcase/Search.vue'
export default {
  name: 'App',

  components: {
    Search
  },

  data: () => ({
    //
  }),
};
</script>
