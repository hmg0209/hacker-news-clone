<template>
  <div id="app">
    <Header />
    <main class="main">
      <transition name="page">
          <router-view/>
      </transition>
    </main>
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
@import './node_modules/reset-css/sass/_reset.scss';
@import './src/assets/scss/_variable.scss';

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.6;
}

body {
  color: $gray;
}

a {
  color: inherit;
  text-decoration: none;
}

.l-wrap {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.main {
  padding: 4rem 0;
}

.link {
  position: relative;

  &::before {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 1px;
    transform: scaleX(0);
    background-color: $main;
    transition: 0.5s;
    content: '';
  }
  &:hover {
    color: $main;

    &::before {
      transform: scaleX(1);
    }
  }
}

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
