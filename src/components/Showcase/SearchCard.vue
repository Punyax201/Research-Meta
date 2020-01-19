<template>
    <v-card tile height="300" width="100%">
        <v-card-title class="primary white--text">
            <h4 :style="{'width':'100%'}" class="d-block">
                {{name}}
            </h4>
            <a class="white--text caption" :href="'mailto:'+email">
                Email: {{email}}
            </a>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="8">
                    <v-chip @click="searchInterests(i)" class="ma-1" v-for="i in interests" :key="i">
                    {{i}}
                    </v-chip>
                </v-col>
                <v-col cols="4">
                    <v-avatar size="100">
                        <v-img :src="imURL"></v-img>
                    </v-avatar>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn tile class="primary">Read More</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['name', 'imURL', 'interests', 'email'],

    methods: {
        searchInterests(key){
            this.$store.dispatch('searchAction',key)
        }
    }
}
</script>