<template>
  <div>
    <!-- Question seciton -->
    <section>
      <div>
        <span>user</span>
        <router-link :to="`/user/${fetchedaskItem.user}`">{{ fetchedaskItem.user }}</router-link>
        <span>{{ fetchedaskItem.time_ago }}</span>
      </div>
      <h2>{{ fetchedaskItem.title }}</h2>
      <div v-html="fetchedaskItem.content"></div>
    </section>

    <!-- Comment seciton -->
    <section>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedaskItem']),
  },
  created() {
    const askId = this.$route.params.id;

    this.$store.dispatch('FETCH_ASK_ITEM', askId);
    console.log('aaa');
  },
};
</script>

<style></style>
