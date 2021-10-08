<template>
  <div class="news-item">
    <div class="mb-1">
      <h3>{{ value.title }}</h3>
    </div>

    <div class="mb-2">
      <div>{{value.date.toLocaleString()}}</div>
      <div>{{value.reporter}}</div>
    </div>

    <div v-html="value.content" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NewsItem',

  props: {
    value: { type: Object, required: true }
  },
});
</script>

<style scoped lang=scss>
.news-item {
  ::v-deep img {
    max-width: 100%;
    height: auto;
    display: block;
  }
}
</style>
