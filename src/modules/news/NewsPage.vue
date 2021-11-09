<template>
  <div class="news-page">
    <div class="mb-2">
      <h2>{{ $t('routes.news') }}</h2>
    </div>

    <div class="content">
      <NewsItem
        class="mb-4 cv"
        v-for="item in lastNews"
        :key="item.id"
        :value="item"
      />

      <el-collapse accordion v-model="activeNews">
        <el-collapse-item
          v-for="item in otherNews"
          :key="item.id"
          :name="item.id"
        >
          <template #title>
            {{ getParsedDate(item.date) }} {{ item.title }}
          </template>

          <template #default>
            <NewsItem :value="item" />
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { news } from "@/db";
import NewsItem from './components/NewsItem';
import { ElCollapse, ElCollapseItem } from 'element-plus';
import { getParsedDate } from "@/plugins/halpers";

export default defineComponent({
  name: 'NewsPage',

  components: {
    NewsItem,
    ElCollapse,
    ElCollapseItem
  },

  setup () {
    const lastNews = news.slice(0, 1);
    const otherNews = news.slice(1);
    const activeNews = reactive();


    return {
      news,
      lastNews,
      otherNews,
      activeNews,
      getParsedDate
    };
  }
});
</script>

<style scoped lang="scss">
.news-page {

}
</style>
