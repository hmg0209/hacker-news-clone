<template>
  <ul class="board l-wrap">
    <li class="board__item"
      v-for="(item, index) in listItems"
      v-bind:key="index">
      <span class="board__head">{{ item.points || 0 }}</span>
      <div class="board__body">
        <p class="board__title">
          <template v-if="item.domain">
            <a class="link link--bold" :href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link class="link link--bold" :to="`askItem/${item.id}`">
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

export default {
  computed: {
    listItems() {
      console.log('list: ', this.$store.state.list);
      return this.$store.state.list;
    },
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
      font-size: 1.4rem;
    }
  }
</style>
