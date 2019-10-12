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
  next("/login");
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
      name: "home",
      component: Home,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: ifAuthenticated,
    },
    {
      path: "/bank-account/:id",
      name: "bank-account",
      component: BankAccountOrCard,
      beforeEnter: ifAuthenticatedAndValidId,
    },
    {
      path: "/card/:id",
      name: "card",
      component: BankAccountOrCard,
      beforeEnter: ifAuthenticatedAndValidId,
    },
    {
      path: "/excerpt/:id",
      name: "excerpt",
      component: Excerpt,
      beforeEnter: ifAuthenticated,
    },
    {
      path: "/transfers",
      name: "transfers-links",
      component: Transfers,
    },
    {
      path: "/transfers/:type",
      name: "transfers",
      component: Transfers,
      beforeEnter: ifAuthenticated,
    },
    {
      path: "/for-private-clients",
      name: "for-private-clients",
      component: ForPrivateClients,
    },
  ],
});
