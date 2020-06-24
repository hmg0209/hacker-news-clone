<template>
<PageList/>
  <!-- <ul>
    <li v-for="(ask, index) in fetchedAsk" v-bind:key="index">
      <router-link v-bind:to="`/askItem/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <span>by {{ ask.user }}</span>
      <span>{{ ask.time_ago }}</span>
    </li>
  </ul> -->
</template>

<script>
import PageList from '../components/PageList.vue';
// import { mapGetters } from 'vuex';

export default {
  components: {
    PageList,
  },
  // computed: {
  //   ...mapGetters(['fetchedAsk']),
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASKS');
  // },
};
</script>

<style></style>
