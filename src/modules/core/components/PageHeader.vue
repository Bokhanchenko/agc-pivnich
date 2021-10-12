<template>
  <div class="page-header">
    <div class="left">
      <TheLogo />
    </div>

    <div class="middle">
      <div class="title">
        <h1>ПІВНІЧ</h1>
      </div>
      <div class="description">
        Гаражний кооператив
      </div>
    </div>

    <div class="right">
      email:
      <el-link href="mailto:agk.pivnich@gmail.com">
        agk.pivnich@gmail.com
      </el-link>
      <br>

      телефон:
      <el-link href="tel:%2B380673399595">
        +38 (067) 339-95-95
      </el-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheLogo from "@/modules/core/components/TheLogo";
import { ElLink } from 'element-plus';

export default defineComponent({
  name: 'PageHeader',

  components: {
    TheLogo,
    ElLink
  },
});
</script>

<style scoped lang=scss>
.page-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: center / cover no-repeat url("../../../assets/prapor.jpg");

  .left {
    min-width: fit-content;
  }
  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 200px;

    .title {
      font-size: 1.5rem;
    }
  }

  .left, .middle, .right {
    flex: 1;
    padding: 10px;
  }

  .right {
    text-align: right;
  }

  h1 {
    font-family: serif;
  }
}
</style>
