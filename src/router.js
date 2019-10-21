import Vue from "vue";
import Router from "vue-router";
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

/* для страниц, где доступ только не авторизованным
  (вход, регистрация) */
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/");
};

/* для ifAuthenticated */
let width = 0;
window.removeEventListener('resize', () => {
  width = window.innerWidth;
});

/* Для страниц, где доступ только авторизованным.
  Если размер экрана маленький, то функции, 
  доступные авторизованным пользователям, 
  недоступны. Вместо этого неренаправление
  на страницу скачивания приложения */
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    if (width < 500) {
      next("/download-app");
      return;
    }
    next();
    return;
  }
  next("/login");
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: '/news',
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue"),
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, главная',
      },
    },
    /* история, при клике на кнопку на главной */
    {
      path: "/history",
      name: "history",
      component: () => import("@/views/History.vue"),
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, история',
      },
    },
    /* карта/счет, при клике на блок на главной */
    {
      path: "/bank-account/:id",
      name: "bank-account",
      component: () => import("@/views/BankAccountOrCard.vue"),
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
      },
    },
    {
      path: "/card/:id",
      name: "card",
      component: () => import("@/views/BankAccountOrCard.vue"),
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
      },
    },
    /* выписка, при клике на кнопку в карте/счете */
    {
      path: "/excerpt/:id",
      name: "excerpt",
      component: () => import("@/views/Excerpt.vue"),
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, выписка',
      },
    },
    /* навигация в шапке */
    {
      path: "/news",
      name: "news",
      component: () => import("@/views/News.vue"),
      meta: {
        title: 'Вест Банк, новости',
      },
    },
    {
      path: "/for-private-clients",
      name: "for-private-clients",
      component: () => import("@/views/ForPrivateClients.vue"),
      meta: {
        title: 'Вест Банк, для приватных клиентов',
      },
    },
    /* вход, регистрация */
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Вест Банк, вход',
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignUp.vue"),
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Вест Банк, регистрация',
      },
    },
    /* профиль */
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue"),
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Вест Банк, профиль',
      },
    },
    /* при клике на кнопку в NavIfAuth */
    {
      path: "/transfers",
      name: "transfers",
      component: () => import("@/views/Transfers.vue"),
      meta: {
        title: 'Вест Банк, переводы',
      },
      children: [
        {
          path: "without-opening-an-account-in-rubles",
          name: "transfers1",
          component: () => import("@/views/Transfers.vue"),
          meta: {
            title: 'Вест Банк, перевод без открытия счета',
          },
        },
        {
          path: "to-card",
          name: "transfers2",
          component: () => import("@/views/Transfers.vue"),
          meta: {
            title: 'Вест Банк, перевод на карту',
          },
        },
        {
          path: "to-e-wallet",
          name: "transfers3",
          component: () => import("@/views/Transfers.vue"),
          meta: {
            title: 'Вест Банк, перевод на электронный кошелек',
          },
        },
      ],
    },
    /* если мобильная версия */
    {
      path: "/download-app",
      name: "download-app",
      component: () => import("@/views/DownloadApp.vue"),
      // beforeRouteEnter(to, from, next) {
      //   next(vm => {
      //     vm.prevRoute = from;
      //   });
      // },
      meta: {
        title: 'Вест Банк, скачайте приложение',
      },
    },
  ],
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Вест Банк';
  });
});

export default router;
