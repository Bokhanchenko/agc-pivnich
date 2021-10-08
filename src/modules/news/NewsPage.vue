<template>
  <div class="news-page">
    <div class="mb-2">
      <h2>{{ $t('routes.news') }}</h2>
    </div>

    <div class="content">
      <NewsItem
        class="mb-4"
        v-for="item in news"
        :key="item.id"
        :value="item"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { news } from "@/db";
import NewsItem from './components/NewsItem';

export default defineComponent({
  name: 'NewsPage',

  components: {
    NewsItem
  },

  setup () {
    return {
      news
    };
  }
});
</script>

<style scoped lang="scss">
.news-page {

}
</style>
