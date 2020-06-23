<template>
  <ul>
    <li v-for="(ask, index) in fetchedAsk" v-bind:key="index">
      <a v-bind:href="ask.url" target="_blank">
        {{ ask.title }}
      </a>
      <span>by {{ ask.user }}</span>
      <span>{{ ask.time_ago }}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style></style>
