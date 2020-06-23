<template>
  <ul>
    <li v-for="(job, index) in fetchedJobs" v-bind:key="index">
      <a v-bind:href="job.url" target="_blank">
        {{ job.title }}
      </a>
      <span>{{ job.time_ago }}</span>
       <span>{{ job.domain }}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedJobs']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
