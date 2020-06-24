<template>
  <ul class="board">
    <li class="board__item"
      v-for="(item, index) in listItems"
      v-bind:key="index">
      <span class="board__head">{{ item.points || 0 }}</span>

      <div class="borad__body">
        <p>
          <template v-if="item.domain">
            <a :href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`askItem/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <small>
          {{ item.time_ago }}
          <template v-if="item.user">
            by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </template>
          <template v-else>
            <a :href="item.url">{{ item.domain }}</a>
          </template>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters({ ListItems: this.getterName }),
    listItems() {
      const { name } = this.$route;
      let fetchedLsit;

      switch (name) {
        case 'news':
          fetchedLsit = 'fetchedNews';
          break;
        case 'ask':
          fetchedLsit = 'fetchedAsk';
          break;
        case 'jobs':
          fetchedLsit = 'fetchedJobs';
          break;
        default:
          break;
      }

      return this.$store.getters[fetchedLsit];
    },
  },
  created() {
    const { name } = this.$route;
    let actionName;

    switch (name) {
      case 'news':
        actionName = 'FETCH_NEWS';
        break;
      case 'ask':
        actionName = 'FETCH_ASKS';
        break;
      case 'jobs':
        actionName = 'FETCH_JOBS';
        break;
      default:
        break;
    }

    this.$store.dispatch(actionName);
  },
};
</script>

<style lang="scss" scoped>
  .board {
    &__item {}
  }
</style>
