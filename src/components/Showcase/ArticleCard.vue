<template>
    <v-card tile width="100%">
        <v-card-title class="primary white--text" :style="{'overflow-y':'hidden','height':'120px'}">
            
            <h4 :style="{'width':'100%'}" class="d-block">
                {{title}}
            </h4>
            <a class="white--text caption">
                By {{author}}
            </a>
        </v-card-title>
        
        <v-card-text :style="{'overflow-y':'auto'}">
            <v-row>
                <v-col cols="12">
                    <p>{{abstract}}</p>
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-card-text>

        <v-card-actions>
            <div>
                <b>Cited By:</b> {{citedBy}}
            </div>
            <v-spacer></v-spacer>
            <a target="_blank" class="mx-2" :href="fileURL">Download PDF</a>
            <v-btn tile class="primary" @click="setArticle">Read More</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['title', 'author', 'abstract', 'citedBy','source','url','fileURL'],

    methods: {
        searchInterests(key){
            this.$store.dispatch('searchAction',key)
        },
        setArticle(){
            this.$store.dispatch('currArticleAction', this.article)
            this.$router.push(this.routeLink)
        }
    },

    data(){
        return{
            routeLink: "/article/" + this.title,

            article: {
                title: this.title,
                author: this.author,
                abstract: this.abstract,
                citedBy: this.citedBy,
                source: this.source,
                url: this.url,
                fileURL: this.fileURL
            },

            //image
            pdfIcon: require('../../assets/pdf.png'),
        }
    }
}
</script>