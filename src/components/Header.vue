<template>
  <header class="header">
    <nav class="gnb l-wrap">
      <router-link class="gnb__link" to="/news">News</router-link>
      <router-link class="gnb__link" to="/ask">Ask</router-link>
      <router-link class="gnb__link" to="/jobs">Jobs</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './src/assets/scss/_variable.scss';

.header {
  background-color: $main;
}

.gnb {
  &__link {
    position: relative;
    display: inline-block;
    color: $white;
    padding: 1rem;

    & + & {
      margin-left: 1rem;
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
    }

    &.router-link-active {
      &::before {
        background-color: $white;
        content: '';
      }
    }
  }
}

</style>
