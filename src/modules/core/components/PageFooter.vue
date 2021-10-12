<template>
  <div class="page-footer fl-wrap">
    <div class="mr-2">
      email:
      <el-link href="mailto:agk.pivnich@gmail.com">
        agk.pivnich@gmail.com
      </el-link>
    </div>
    <div>
      телефон:
      <el-link href="tel:%2B380673399595">
        +38 (067) 339-95-95
      </el-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ElLink } from 'element-plus';

export default defineComponent({
  name: 'PageFooter',

  components: {
    ElLink
  }
});
</script>

<style scoped lang=scss>
.page-footer {
  display: flex;
  padding: 4px;
  border-top: 1px solid $grey-300;
  border-left: 1px solid $grey-300;
  border-right: 1px solid $grey-300;
}
</style>
