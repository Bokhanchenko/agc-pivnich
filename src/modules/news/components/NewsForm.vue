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
<!--        <el-input type="textarea" :rows="10" v-model="formData.content" />-->
        <TheTextEditor
          :value="formData.content"
          @input="setTT"
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="cancel">{{ $t('buttons.cancel') }}</el-button>
        <el-button native-type="submit" type="primary">
          {{ $t('buttons.submit') }}
        </el-button>
        <div class="flex">
          <div class="mr-2">Копіювати контент</div>
          <BufferCopy :value="formData.content" />
        </div>
      </el-form-item>
    </el-form>

    <pre class="mb-4">{{formDataInfo}}</pre>
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

import TheTextEditor from '@/modules/core/components/TheTextEditor';
import BufferCopy from '@/modules/core/components/BufferCopy';

export default defineComponent({
  name: 'NewsForm',

  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDatePicker,
    TheTextEditor,
    BufferCopy
  },

  setup () {
    const form = ref(null);
    const disabled = ref(false);
    const isLoading = ref(false);
    const formDataInfo = reactive({
      title: '',
      date: new Date().toISOString(),
      reporter: 'Правління',
    });

    const formData = reactive({
      title: '',
      date: new Date().toISOString(),
      reporter: 'Правління',
      content: ''
    });

    const submit = () => {
      formDataInfo.title = formData.title;
      formDataInfo.date = formData.date;
      formDataInfo.reporter = formData.reporter;
    };

    return {
      $t,
      form,
      formData,
      formDataInfo,
      disabled,
      isLoading,
      submit,
      cancel: () => this.$router.push({ name: 'news' }),
      setTT: (event) => {
        if(typeof event === 'string') {
          formData.content = event;
        }
      }
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
  pre {
    max-width: 100%;
  }
}
</style>
