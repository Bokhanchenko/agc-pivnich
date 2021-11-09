<template>
  <div class="news-item">
    <div class="mb-1">
      <h3>{{ value.title }}</h3>
    </div>

    <div class="flex a-middle mb-2">
      <div class="mr-2 date">
        {{ $t('news.date') }}: {{getParsedDate(value.date)}}
      </div>
      <div>
        {{ $t('news.reporter') }}: {{value.reporter}}
      </div>
    </div>

    <div class="pg-0-2" v-html="value.content" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getParsedDate } from "@/plugins/halpers";

export default defineComponent({
  name: 'NewsItem',

  props: {
    value: { type: Object, required: true }
  },

  methods: {
    getParsedDate
  }
});
</script>

<style scoped lang=scss>
@import "@/styles/theme-chalk/src/button.scss";

.news-item {
  ::v-deep img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .date {
    padding: 4px;
    background-color: $grey-300;
  }
}
</style>
