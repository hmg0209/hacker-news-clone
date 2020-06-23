import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
  },
  mutations,
  actions,
});

export default store;
