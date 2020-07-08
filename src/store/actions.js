import {
  fetchList,
  fetchUserInfo,
  fetchAskItem,
} from '../api/index';

export default {
  FETCH_USER(context, name) {
    fetchUserInfo(name)
      .then((response) => {
        context.commit('SET_USER', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK_ITEM(context, id) {
    fetchAskItem(id)
      .then((response) => {
        context.commit('SET_ASK_ITEM', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data);
      })
      .catch((error) => console.log(error));
  },
};
