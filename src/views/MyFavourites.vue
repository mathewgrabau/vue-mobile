<template>
    <div>
    <NewsList :newsArticles="newsArticles"></NewsList>
  </div>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';
import newsService from "../services/newsService";
import NewsList from "../components/NewsList.vue";
import { ArticleType, NewsArticle } from '../types';

@Component({
    components: {
        NewsList,
    }
})
export default class TopStories extends Vue {
    public newsArticles: NewsArticle[] = [];

    mounted() {
      // TODO how to filter the right settings here?
        newsService.getArticlesByType(ArticleType.TopStory)
            .then((newsArticles: NewsArticle[]) => {
                this.newsArticles = newsArticles;
            });
    }
}
</script>