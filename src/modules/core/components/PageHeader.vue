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
      email: agk.pivnich@gmail.com
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheLogo from "@/modules/core/components/TheLogo";

export default defineComponent({
  name: 'PageHeader',

  components: {
    TheLogo
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
