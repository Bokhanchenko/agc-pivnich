<template>
  <div class="news-form">
    <el-form
      ref="form"
      :model="formData"
      size="medium"
      label-position="top"
      label-width="200px"
      @submit.prevent="submit"
    >
      <el-form-item prop="title" :label="$t('news.newsTitle')">
        <el-input v-model="formData.title" />
      </el-form-item>

      <el-form-item prop="date" :label="$t('news.date')">
        <el-date-picker
          v-model="formData.date"
          format="DD.MM.YYYY"
        />
      </el-form-item>

      <el-form-item prop="content" :label="$t('news.content')">
        <el-input type="textarea" :rows="10" v-model="formData.content" />
      </el-form-item>

      <el-form-item>
        <el-button @click="cancel">{{ $t('buttons.cancel') }}</el-button>
        <el-button native-type="submit" type="primary">
          {{ $t('buttons.submit') }}
        </el-button>
      </el-form-item>
    </el-form>

    <pre class="mt-4">{{formData}}</pre>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { $t } from '@/modules/core';
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElDatePicker
} from 'element-plus';

export default defineComponent({
  name: 'NewsForm',

  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDatePicker
  },

  setup () {
    const form = ref(null);
    const disabled = ref(false);
    const isLoading = ref(false);

    const formData = reactive({
      title: '',
      date: new Date().toISOString(),
      reporter: 'Правління',
      content: ''
    });

    const submit = () => {
      console.info('submit', formData);
    };

    return {
      $t,
      form,
      formData,
      disabled,
      isLoading,
      submit,
      cancel: () => this.$router.push({ name: 'news' })
    };
  },

});
</script>
<style lang=scss>
@import "../../../styles/theme-chalk/src/form";
@import "../../../styles/theme-chalk/src/form-item";
@import "../../../styles/theme-chalk/src/input";
@import "../../../styles/theme-chalk/src/button";
@import "../../../styles/theme-chalk/src/date-picker";
</style>

<style scoped lang=scss>
.news-form {

}
</style>
