<template>
  <ul class="board l-wrap">
    <li class="board__item"
      v-for="(item, index) in listItems"
      v-bind:key="index">
      <span class="board__head">{{ item.points || 0 }}</span>
      <div class="board__body">
        <p class="board__title">
          <template v-if="item.domain">
            <a class="link" :href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link class="link" :to="`askItem/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <div class="board__desc">
          {{ item.time_ago }}
          <template v-if="item.user">
            by <router-link class="link" :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </template>
          <template v-else>
            <a class="link" :href="item.url" target="_blank">{{ item.domain }}</a>
          </template>
        </div>
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
@import './src/assets/scss/_variable.scss';

  .board {
    &__item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 1rem 0 1.2rem;
      border: 1px solid $main-light;
      border-left-width: 10px;
      border-radius: 0 5px 5px 0;

      & + & {
        margin-top: 1rem;
      }
    }

    &__head {
      width: 10%;
      max-width: 70px;
      color: $main;
      font-size: 1.4rem;
      font-weight: bold;
      text-align: center;
    }

    &__body {
      max-width: 90%;
    }

    &__title {
      font-weight: bold;
    }

    &__desc {
      color: $gray-light;
      font-size: 1.4rem;
    }
  }
</style>
