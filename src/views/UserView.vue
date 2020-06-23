<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
    <p>about: {{ userInfo.about }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.user;

    this.$store.dispatch('FETCH_USER', userName);
  }
};
</script>

<style></style>
