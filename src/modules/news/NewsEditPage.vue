<template>
  <div class="news-edit-page">
    <div class="mb-2">
      <h2>{{ $t(`routes.news-${id ? 'edit' : 'create'}`) }}</h2>
    </div>

    <NewsForm />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute,  } from "vue-router";
import NewsForm from './components/NewsForm';

export default defineComponent({
  name: 'NewsEditPage',

  components: {
    NewsForm
  },

  setup () {
    const route = useRoute();
    const id = route.params.id;
    const numId = Number(id);

    return {
      id: !numId || id === 'new' ? null : numId
    };
  }
});
</script>

<style scoped lang=scss>
.news-edit-page {
}
</style>
