<template>
  <ul>
    <li v-for="(news, index) in fetchedNews" v-bind:key="index">
      <a v-bind:href="news.url" target="_blank">
        {{ news.title }}
      </a>
      <span>{{ news.time_ago }}</span>
      <span>
        <router-link v-bind:to="`/user/${news.user}`">by {{ news.user }}</router-link>
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedNews']),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
