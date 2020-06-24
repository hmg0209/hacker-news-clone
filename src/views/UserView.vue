<template>
  <div>
    <p>name: {{ fetchedUserInfo.id }}</p>
    <p>karma: {{ fetchedUserInfo.karma }}</p>
    <p>created: {{ fetchedUserInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedUserInfo']),
  },
  created() {
    const userName = this.$route.params.user;

    this.$store.dispatch('FETCH_USER', userName);
  }
};
</script>

<style></style>
