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
        email: agk.pivnich@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheLogo from "@/modules/core/components/TheLogo";

export default defineComponent({
  name: 'PageHeaderM',

  components: {
    TheLogo
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
