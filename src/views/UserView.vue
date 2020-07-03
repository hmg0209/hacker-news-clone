<template>
  <div class="l-wrap">
    <UserProfile :info="fetchedUserInfo">
      <p slot="username">{{fetchedUserInfo.id}}</p>
      <p slot="time">
        Joined:  {{fetchedUserInfo.created}},
      </p>
      <p slot="karma">
        Karma: {{fetchedUserInfo.karma}}
      </p>
    </UserProfile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedUserInfo']),
  },
  created() {
    const userName = this.$route.params.user;
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style></style>
