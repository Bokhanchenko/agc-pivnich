<template>
  <div class="the-text-editor">
    <QuillEditor
      class="editor-container"
      :options="{ placeholder: ''}"
      v-model="text"
      @change="$emit('input', $event.html)"
    />
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { defineComponent } from "vue";
import { quillEditor } from 'vue3-quill';

export default defineComponent({
  name: 'TheTextEditor',

  components: {
    QuillEditor: quillEditor
  },

  props: {
    value: { type: String, default: '' }
  },

  data () {
    return {
      text: this.value || ''
    };
  }
});
</script>

<style scoped lang=scss>
.the-text-editor {
  background-color: $white;

  .editor-container {
    height: 600px;
    margin-bottom: 80px;
  }
}
</style>
