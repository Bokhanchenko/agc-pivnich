<template>
  <div class="docs-page">
    <el-collapse accordion v-model="activeNames">
      <el-collapse-item title="Графік зміни тарифів" name="1">
        <img
          src="@/assets/files/price.jpg"
          alt="Графік зміни тарифів"
        >
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { ElCollapse, ElCollapseItem } from 'element-plus';

export default {
  name: 'DocsPage',

  components: {
    ElCollapse,
    ElCollapseItem
  },

  data() {
    return {
      activeNames: ''
    };
  },
};
</script>

<style scoped lang="scss">
.docs-page {
  img {
    display: block;
    max-width: 100%;
  }
}
</style>
