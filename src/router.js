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

/* Для страниц, где доступ только авторизованным. */
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    if (store.getters.getCurrentWidth < 748) {
      next('/download-app');
      return;
    } 
    next();
    return;
  }
  next("/signup");
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
        // если экран < 748, идти на /download-app
        redirectToDownloadApp: true,
        // отображать ли NavIfAuth
        navIfAuth: true,
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
        redirectToDownloadApp: true,
        navIfAuth: true,
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
        redirectToDownloadApp: true,
        navIfAuth: true,
      },
    },
    {
      path: "/card/:id",
      name: "card",
      component: () => import("@/views/BankAccountOrCard.vue"),
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
        redirectToDownloadApp: true,
        navIfAuth: true,
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
        redirectToDownloadApp: true,
        navIfAuth: true,
      },
    },
    /* навигация в шапке */
    {
      path: "/news",
      name: "news",
      component: () => import("@/views/News.vue"),
      meta: {
        title: 'Вест Банк, новости',
        redirectToDownloadApp: false,
        navIfAuth: false,
      },
    },
    {
      path: "/for-private-clients",
      name: "for-private-clients",
      component: () => import("@/views/ForPrivateClients.vue"),
      meta: {
        title: 'Вест Банк, для приватных клиентов',
        redirectToDownloadApp: false,
        navIfAuth: false,
      },
    },
    {
      path: "/for-business",
      name: "for-business",
      component: () => import("@/views/ForBusiness.vue"),
      meta: {
        title: 'Вест Банк, бизнесу',
        redirectToDownloadApp: false,
        navIfAuth: false,
      },
    },
    {
      path: "/for-financial-institutions",
      name: "for-financial-institutions",
      component: () => import("@/views/ForFinancialInstitutions.vue"),
      meta: {
        title: 'Вест Банк, финансовым институтам',
        redirectToDownloadApp: false,
        navIfAuth: false,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: 'Вест Банк, о банке',
        redirectToDownloadApp: false,
        navIfAuth: false,
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
        redirectToDownloadApp: true,
        navIfAuth: false,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignUp.vue"),
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Вест Банк, регистрация',
        redirectToDownloadApp: true,
        navIfAuth: false,
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
        redirectToDownloadApp: true,
        navIfAuth: true,
      },
    },
    /* при клике на кнопку в NavIfAuth */
    {
      path: "/transfers",
      component: () => import("@/views/Transfers.vue"),
      meta: {
        title: 'Вест Банк, переводы',
        redirectToDownloadApp: true,
        navIfAuth: true,
      },
      children: [
        {
          path: "",
          name: "transfers1",
          component: () => 
            import("@/components/Transfers/Transfers1.vue"),
          meta: {
            title: 'Вест Банк, переводы',
            redirectToDownloadApp: true,
            navIfAuth: true,
          },
        },
        {
          path: "without-opening-an-account",
          name: "transfers2-without-opening-an-account",
          component: () => 
            import("@/components/Transfers/Transfers2WithoutOpeningAnAccount.vue"),
          meta: {
            title: 'Вест Банк, перевод без открытия счета',
            redirectToDownloadApp: true,
            navIfAuth: true,
          },
        },
        {
          path: "to-card",
          name: "transfers2-to-card",
          component: () => 
            import("@/components/Transfers/Transfers2ToCard.vue"),
          meta: {
            title: 'Вест Банк, перевод на карту',
            redirectToDownloadApp: true,
            navIfAuth: true,
          },
        },
        {
          path: "to-e-wallet",
          name: "transfers2-to-e-wallet",
          component: () => 
            import("@/components/Transfers/Transfers2ToEWallet.vue"),
          meta: {
            title: 'Вест Банк, перевод на электронный кошелек',
            redirectToDownloadApp: true,
            navIfAuth: true,
          },
        },
        {
          path: "success",
          name: "transfers3",
          component: () => 
            import("@/components/Transfers/Transfers3.vue"),
          meta: {
            title: 'Вест Банк, перевод совершен',
            redirectToDownloadApp: true,
            navIfAuth: true,
          },
        },
      ],
    },
    /* если мобильная версия */
    {
      path: "/download-app",
      name: "download-app",
      component: () => import("@/views/DownloadApp.vue"),
      meta: {
        title: 'Вест Банк, скачать приложение',
        redirectToDownloadApp: false,
        navIfAuth: false,
      },
    },
    /* страница не найдена */
    {
      path: "*",
      redirect: '/not-found',
      name: "all",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: 'Вест Банк, страница не найдена',
        redirectToDownloadApp: false,
        navIfAuth: false,
      },
    },
    {
      path: "/not-found",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: 'Вест Банк, страница не найдена',
        redirectToDownloadApp: false,
        navIfAuth: true,
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
