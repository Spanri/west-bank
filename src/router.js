import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import News from "./views/News.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Profile from "./views/Profile.vue";
import BankAccountOrCard from "./views/BankAccountOrCard.vue";
import Excerpt from "./views/Excerpt.vue";
import Transfers from "./views/Transfers.vue";
import ForPrivateClients from "./views/ForPrivateClients.vue";
import store from "./store";

Vue.use(Router);

// как определять это?
const ifAuthenticatedAndValidId = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/signup");
};

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: '/home',
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, главная',
      },
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        title: 'Вест Банк, новости',
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Вест Банк, вход',
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Вест Банк, регистрация',
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, профиль',
      },
    },
    {
      path: "/bank-account/:id",
      name: "bank-account",
      component: BankAccountOrCard,
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
      },
    },
    {
      path: "/card/:id",
      name: "card",
      component: BankAccountOrCard,
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
      },
    },
    {
      path: "/excerpt/:id",
      name: "excerpt",
      component: Excerpt,
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, выписка',
      },
    },
    {
      path: "/transfers",
      name: "transfers-links",
      component: Transfers,
      meta: {
        title: 'Вест Банк, переводы',
      },
    },
    {
      path: "/transfers/:type",
      name: "transfers",
      component: Transfers,
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, переводы',
      },
    },
    {
      path: "/for-private-clients",
      name: "for-private-clients",
      component: ForPrivateClients,
      meta: {
        title: 'Вест Банк, для приватных клиентов',
      },
    },
  ],
});
