import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pageList: [],
    user: [],
    askItem: [],
  },
  getters,
  mutations,
  actions,
});

export default store;
