<template>
  <div class="app">
    <div class="wrapper">
      <PageHeader />
      <PageHeaderM />
      <NavMenu />

      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PageHeader from '@/modules/core/components/PageHeader';
import PageHeaderM from '@/modules/core/components/PageHeaderM';
import NavMenu from '@/modules/core/components/NavMenu';

export default defineComponent({
  name: 'App',

  components: {
    PageHeader,
    PageHeaderM,
    NavMenu
  }
});
</script>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  background: url("assets/app-back.jpeg") center center fixed;
  background-size: cover;

  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;
    background-color: $grey-50;
  }

  .content {
    flex: 1;
    padding: 10px;
  }

  .page-header-m {
    display: none;
  }

  @media screen and (max-width: $--xs) {
    .page-header {
      display: none;
    }
    .page-header-m {
      display: flex;
    }
  }
}
</style>
