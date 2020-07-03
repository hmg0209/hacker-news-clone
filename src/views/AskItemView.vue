<template>
  <div class="l-wrap">
    <!-- User Info seciton -->
    <section>
      <UserProfile :info="fetchedAskItem">
        <router-link slot="username" class="link" :to="`/user/${fetchedAskItem.user}`">
          {{fetchedAskItem.user}}
        </router-link>
        <p slot="time">Posted: {{fetchedAskItem.time_ago}}</p>
      </UserProfile>
    </section>
    <!-- Comment seciton -->
    <section>
      <h2>{{fetchedAskItem.title}}</h2>
    </section>
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
    ...mapGetters(['fetchedAskItem']),
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_ITEM', askId);
  },
};
</script>

<style></style>
