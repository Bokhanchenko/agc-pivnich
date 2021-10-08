<template>
  <div class="page-footer">
    <div />
    <div>
      email: agk.pivnich@gmail.com
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'PageFooter',
});
</script>

<style scoped lang=scss>
.page-footer {
  display: flex;
  justify-content: space-between;
  padding: 4px;
  border-top: 1px solid $grey-300;
  border-left: 1px solid $grey-300;
  border-right: 1px solid $grey-300;
}
</style>
