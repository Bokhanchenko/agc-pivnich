<template>
  <div class="page-header-m">
    <TheLogo />

    <div class="text-right">
      <div>
        <h1>ПІВНІЧ</h1>
      </div>
      <div class="description">
        Гаражний кооператив
      </div>

      <div class="contacts">
        <div>
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
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheLogo from "@/modules/core/components/TheLogo";
import { ElLink } from 'element-plus';

export default defineComponent({
  name: 'PageHeaderM',

  components: {
    TheLogo,
    ElLink
  }
});
</script>

<style scoped lang=scss>
.page-header-m {
  display: flex;
  justify-content: space-between;
  background: center / cover no-repeat url("../../../assets/prapor.jpg");
  padding-right: 10px;

  .the-logo {
    height: 60px!important;
  }

  .contacts {
    font-size: 12px;
  }
  h1 {
    font-family: serif;
  }
}
</style>
