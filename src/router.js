import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

// для страниц с id, захардкожено
const ifAuthenticatedAndValidId = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/auth");
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: '/news',
      meta: {
        title: 'Вест Банк, главная',
        /** 
         * 1) для доступа нужна авторизация (используется в 
         * router.beforeEach и App.vue (script, methods, setCurrentWidth))
         * 2) отображать ли NavIfAuth, используется в App.vue (template)
         * 3) для доступа авторизации быть не должно (login и тд)
         * (router.beforeEach)
        */
        type: 0b110,
      },
    },
    // домашняя страница / Онлайн-банк
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: 'Вест Банк, главная',
        type: 0b110,
      },
    },
    // история, при клике на кнопку на главной
    {
      path: "/history",
      name: "history",
      component: () => import("@/views/History.vue"),
      meta: {
        title: 'Вест Банк, история',
        type: 0b110,
      },
    },
    // счет, при клике на блок на главной
    {
      path: "/bank-account/:id",
      name: "bank-account",
      component: () => import("@/views/BankAccountOrCard.vue"),
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
        type: 0b110,
      },
    },
    // карта, при клике на блок на главной
    {
      path: "/card/:id",
      name: "card",
      component: () => import("@/views/BankAccountOrCard.vue"),
      beforeEnter: ifAuthenticatedAndValidId,
      meta: {
        title: 'Вест Банк, счет/карта',
        type: 0b110,
      },
    },
    // выписка, при клике на кнопку в карте/счете
    {
      path: "/excerpt/:id",
      name: "excerpt",
      component: () => import("@/views/Excerpt.vue"),
      meta: {
        title: 'Вест Банк, выписка',
        type: 0b110,
      },
    },
    // навигация в шапке
    {
      path: "/news",
      name: "news",
      component: () => import("@/views/News.vue"),
      meta: {
        title: 'Вест Банк, новости',
        type: 0b010,
      },
    },
    {
      path: "/for-private-clients",
      name: "for-private-clients",
      component: () => import("@/views/ForPrivateClients.vue"),
      meta: {
        title: 'Вест Банк, для приватных клиентов',
        type: 0b000,
      },
    },
    {
      path: "/for-business",
      name: "for-business",
      component: () => import("@/views/ForBusiness.vue"),
      meta: {
        title: 'Вест Банк, бизнесу',
        type: 0b000,
      },
    },
    {
      path: "/for-financial-institutions",
      name: "for-financial-institutions",
      component: () => import("@/views/ForFinancialInstitutions.vue"),
      meta: {
        title: 'Вест Банк, финансовым институтам',
        type: 0b000,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: 'Вест Банк, о банке',
        type: 0b000,
      },
    },
    // вход, регистрация
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/Auth.vue"),
      meta: {
        title: 'Вест Банк, аутентификация',
        type: 0b101,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
        title: 'Вест Банк, вход',
        type: 0b101,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignUp.vue"),
      meta: {
        title: 'Вест Банк, регистрация',
        type: 0b101,
      },
    },
    // профиль
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue"),
      meta: {
        title: 'Вест Банк, профиль',
        type: 0b110,
      },
    },
    // переводы, при клике на кнопку в NavIfAuth
    {
      path: "/transfers",
      component: () => import("@/views/Transfers.vue"),
      meta: {
        title: 'Вест Банк, переводы',
        type: 0b110,
      },
      children: [
        {
          path: "",
          name: "transfers1",
          component: () => 
            import("@/components/Transfers/Transfers1.vue"),
          meta: {
            title: 'Вест Банк, переводы',
            type: 0b110,
          },
        },
        {
          path: "without-opening-an-account",
          name: "transfers2-without-opening-an-account",
          component: () => 
            import("@/components/Transfers/Transfers2WithoutOpeningAnAccount.vue"),
          meta: {
            title: 'Вест Банк, перевод без открытия счета',
            type: 0b110,
          },
        },
        {
          path: "to-card",
          name: "transfers2-to-card",
          component: () => 
            import("@/components/Transfers/Transfers2ToCard.vue"),
          meta: {
            title: 'Вест Банк, перевод на карту',
            type: 0b110,
          },
        },
        {
          path: "to-e-wallet",
          name: "transfers2-to-e-wallet",
          component: () => 
            import("@/components/Transfers/Transfers2ToEWallet.vue"),
          meta: {
            title: 'Вест Банк, перевод на электронный кошелек',
            type: 0b110,
          },
        },
        {
          path: "success",
          name: "transfers3",
          component: () => 
            import("@/components/Transfers/Transfers3.vue"),
          meta: {
            title: 'Вест Банк, перевод совершен',
            type: 0b110,
          },
        },
      ],
    },
    // если мобильная версия
    {
      path: "/download-app",
      name: "download-app",
      component: () => import("@/views/DownloadApp.vue"),
      meta: {
        title: 'Вест Банк, скачать приложение',
        type: 0b000,
      },
    },
    // страница не найдена
    {
      path: "*",
      redirect: '/not-found',
      name: "all",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: 'Вест Банк, страница не найдена',
        type: 0b000,
      },
    },
    {
      path: "/not-found",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: 'Вест Банк, страница не найдена',
        type: 0b010,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isNotAuth = to.matched.some(auth => auth.meta.type & 0b100);
  const isAuth = to.matched.some(auth => auth.meta.type & 0b001);
  const isLoggedIn = store.getters.isLoggedIn;
  const isCurrentWidthSmall = store.getters.getCurrentWidth < 748;

  // если авторизации быть не должно
  if(isNotAuth) {
    if (!isLoggedIn) {
      next();
      return;
    }
    next("/");
  // иначе, если нужна авторизация
  } else if(isAuth) {
    if (isCurrentWidthSmall) {
      next('/download-app');
      return;
    } 
    if (isLoggedIn) {
      next();
      return;
    }
    next("/auth");
  }
  // всё равно на авторизацию
  next();
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Вест Банк';
  });
});

export default router;
