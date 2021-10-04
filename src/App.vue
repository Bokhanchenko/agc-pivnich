<template>
  <div class="app">
    <div class="mb-2 text-center">
      <img class="logo" src="@/assets/gerb-uk.svg" alt="Ukranian Gerb">
    </div>

    <div class="text-center pg-2 mb-2">
      <h1>Гаражний коператив "ПІВНІЧ"</h1>
    </div>

    <div class="text-center">
      Сай знаходиться в розробці
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped lang="scss">
.app {
  min-height: 100vh;

  .logo {
    width: 200px;
    height: auto;
  }
}
</style>
