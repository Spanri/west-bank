<template>
  <header class="header">
    <div class="header-inner">
      <Hamburger 
        class="header__hamburger" 
        @openMenu="openMenu"
        :open="open"
      />
      <transition name="fade">
        <div 
          class="header__menu" 
          v-if="open"
          :class="{'open': open}"
        >
          <HeaderNav 
            class="header__bottom-nav" 
            @goToPage="goToPage"
          />
          <HeaderAuth 
            class="header__bottom-auth" 
            @goToPage="goToPage"
          />
        </div>
      </transition>
      <div v-if="open" class="header__menu-helper" />
      <transition name="slide-fade">
        <router-link 
          to="/home" class="header__logo" 
          v-if="!open"
        >
          <Logo
            class="transfers3__logo"
            :color1="logoColor1" :color2="logoColor2"
            size="58"
            @mouseenter.native="logoColor1 = 'white'; logoColor2 = 'white';" 
            @mouseleave.native="logoColor1 = '#6DB0FF'; logoColor2 = '#766BF8';"
          />
        </router-link>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Hamburger: () => import("@/icons/Hamburger.vue"),
    HeaderNav: () => import("@/components/Header/HeaderNav.vue"),
    HeaderAuth: () => import("@/components/Header/HeaderAuth.vue"),
  },
  data() {
    return {
      open: false,
      logoColor1: "#6DB0FF",
      logoColor2: "#766BF8",
    };
  },
  methods: {
    openMenu(value) {
      this.open = value;
    },
    goToPage() {
      console.log('aaa');
      this.open = false;
    },
  },
};
</script>

<style scoped lang="scss">
/* для меню */
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* для логотипа */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.header {
  &-inner {
    height: 80px;
    width: 100%;

    color: white;

    display: flex;
    justify-content: space-between;
    // align-items: center;

    box-sizing: border-box;
    z-index: 5;
  }

  &__hamburger {
    align-self: center;

    margin: 15px 0 0 21px;
  }

  &__logo {
    align-self: center;

    margin: 28px 21px 28px 0;
    user-select: none;
  }

  &__menu {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    background: $color-header;
    margin-left: -60px;
    margin-top: 24px;
    height: 426px;
    width: 100vw;

    &-helper {
      width: 50px;
    }
  }

  &__bottom {
    &-auth {
      align-self: center;
    }
    
    &-nav {
      padding-left: 30px;

      .nav__item {
        text-align: center;
        align-self: center;
      }
    }
  }
}
</style>
