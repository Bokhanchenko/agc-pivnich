<template>
  <div class="nav-menu">
    <router-link
      v-for="item in menu"
      :key="item"
      :to="{ name: item }"
    >
      <button
        :class="['nav-menu__item', { 'is-active': isActive(item) }]"
      >
        {{ $t(`routes.${item}`) }}
      </button>
    </router-link>

    <template v-if="isDev">
      <router-link
        v-for="item in devMenu"
        :key="item"
        :to="{ name: item }"
      >
        <button
          :class="['nav-menu__item', { 'is-active': isActive(item) }]"
        >
          {{ $t(`routes.${item}`) }}
        </button>
      </router-link>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { $t } from '@/modules/core';


export default defineComponent({
  name: 'NavMenu',

  setup() {
    return {
      menu: ['home', 'payment', 'contacts'],
      devMenu: ['news-create', 'docs'],
      isActive (name) {
        return name === this.$route.name;
      }
    };
  },

  methods: {
    $t
  }
});
</script>

<style scoped lang=scss>
.nav-menu {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid $grey-300;
  border-bottom: 1px solid $grey-300;
}
</style>
