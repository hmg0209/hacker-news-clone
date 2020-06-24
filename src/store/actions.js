import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskItem,
} from '../api/index';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS',
        response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASKS(context) {
    fetchAskList()
      .then((response) => {
        context.commit('SET_ASKS', response.data);
      })
    .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        context.commit('SET_JOBS', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
};
