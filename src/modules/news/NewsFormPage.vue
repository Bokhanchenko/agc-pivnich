<template>
  <div class="news-form-page">

    <div class="mt-2">
      <pre>{{formData}}</pre>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { $t } from '@/modules/core';

export default defineComponent({
  name: 'NewsFormPage',

  components: {

  },

  setup () {
    const form = ref(null);
    const disabled = ref(false);
    const isLoading = ref(false);


    const formData = reactive({
      title: '',
      date: '',
      author: '',
      content: ''
    });

    const submit = () => {
      console.info('submit');
    };

    return {
      $t,
      form,
      formData,
      disabled,
      isLoading,
      submit
    };
  },

});
</script>

<style scoped lang=scss>
.news-form-page {
}
</style>
