import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import About from './views/About.vue';
import Profile from './views/Profile.vue';
import store from './store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next('/login');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
