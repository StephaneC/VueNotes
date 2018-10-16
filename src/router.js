import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Connected from './views/Connected.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/connected',
      name: 'connected',
      component: Connected,
    },
  ],
});
