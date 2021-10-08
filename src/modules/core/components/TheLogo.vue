<template>
  <div class="the-logo">
    <router-link :to="{ name: 'home' }">
      <img
        class="logo"
        src="@/assets/сoat_of_arms_of_ukraine.svg"
        alt="Ukrainian Gerb">
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheLogo',
});
</script>

<style scoped lang=scss>
.the-logo {
  height: 60px;
  width: fit-content;
  padding: 10px;

  .logo {
    display: block;
    height: 100%;
    width: fit-content;
  }
}
</style>
