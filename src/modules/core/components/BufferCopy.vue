<template>
  <div class="buffer-copy" @click="copy">
    <el-icon><document-copy /></el-icon>
  </div>
</template>

<script>
import {
  ElIcon,
} from 'element-plus';

import { DocumentCopy } from '@element-plus/icons';

export default {
  name: 'BufferCopy',

  components: {
    ElIcon,
    DocumentCopy
  },

  props: {
    value: { type: String, required: true }
  },

  methods: {
    copy () {
      if (!window) {
        return null;
      }

      if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData('Text', this.value);
      } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const textarea = document.createElement('textarea');

        textarea.textContent = this.value;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.select();

        try {
          return document.execCommand('copy');
        } catch (ex) {
          console.warn('Copy to clipboard failed.', ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.buffer-copy {
  cursor: pointer;

  .icon-img {
    width: 14px;
    height: 14px;
  }
}
</style>
