<template>
  <div id="app">
    <Header />
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.page {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }
}
</style>
