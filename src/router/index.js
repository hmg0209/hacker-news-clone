import Vue from 'vue';
import VueRouter from 'vue-router';
// import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import AskItemView from '../views/AskItemView.vue';
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: createListView('newsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('askView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('jobsView'),
  },
  {
    path: '/user/:user',
    name: 'user',
    component: UserView,
  },
  {
    path: '/askItem/:id',
    name: 'askItem',
    component: AskItemView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
