<template>
  <header class="header" style="z-index: 100">
    <div class="header-inner">
      <Hamburger 
        class="header__hamburger" 
        @openMenu="openMenu"
        :open="open"
      />
      <transition name="fade">
        <div 
          class="header__menu" 
          v-show="open"
          :class="{'open': open}"
        >
          <HeaderNav 
            class="header__bottom-nav" 
            @goToPage="goToPage"
          />
        </div>
      </transition>
      <transition name="slide-fade-auth">
        <router-link 
          to="/download-app" class="header__auth-link"
          @mouseenter.native="logoAuth = '#C66166'"
          @mouseleave.native="logoAuth = 'white'"
          v-show="!open"
        >
          <AuthLogo class="header__auth-logo" :color="logoAuth" />
          <span class="header__auth-text header__auth-text_big">
            Войти<br>в личный кабинет
          </span>
          <span class="header__auth-text header__auth-text_little">
            Войти<br>в личный<br>кабинет
          </span>
        </router-link>
      </transition>
      <transition name="slide-fade-logo">
        <router-link 
          to="/home" v-show="!open"
          class="header__logo-link"
        >
        <!-- @mouseenter.native="logoColor = 'rgb(255, 180, 180)';" 
          @mouseleave.native="logoColor = 'white';" -->
          <LogoText
            class="header__logo-text" :color="logoColor"
          />
          <img 
            src="@/assets/logo.png" alt="Логотип"
            class="header__logo-svg"
            style="height: 56px; width: auto;"
          >
        </router-link>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    LogoText: () => import("@/icons/LogoText.vue"),
    Logo: () => import("@/icons/Logo.vue"),
    Hamburger: () => import("@/icons/Hamburger.vue"),
    HeaderNav: () => import("@/components/Header/HeaderNav.vue"),
    AuthLogo: () => import("@/icons/AuthLogo.vue"),
  },
  data() {
    return {
      open: false,
      logoColor: "white",
      logoAuth: "white",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
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

/* для аутентификации */
.slide-fade-auth-enter-active, .slide-fade-auth-leave-active {
  // transform: translateX(-0px);
  transition: all 1s ease;
}

.slide-fade-auth-enter, .slide-fade-auth-leave-to {
  transform: translateX(150px);
  opacity: 0;
}

/* для логотипа */
.slide-fade-logo-enter-active, .slide-fade-logo-leave-active {
  transition: all .8s ease;
}

.slide-fade-logo-enter, .slide-fade-logo-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.header {

  &-inner {
    height: 80px;
    width: 100%;

    color: $color-light;

    display: flex;
    justify-content: space-between;

    position: sticky;
    top: 0px;

    box-sizing: border-box;
    overflow: hidden;
  }

  &__hamburger {
    align-self: center;
    margin: 15px 0 0 21px;
    z-index: 112;
  }

  &__logo-link {
    align-self: center;
    margin: 28px 21px 28px 0;
    user-select: none;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &__menu {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: flex-start;

    position: fixed;
    top: 0;
    left: 0;

    background: $color-header;
    margin: 50px 0 0;
    z-index: 11;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.45);
    border-radius: 9px;

    height: 375px;
    width: 100vw;

    &-helper {
      width: 50px;
    }

  }

  &__auth {

    &-link {
      display: flex;
      flex-direction: row;
      align-items: center;

      text-align: left;
      text-decoration: none;

      &:hover {

        .header__auth-text {
          color: $color-accent;
        }
        
      }

    }

    &-logo {
      margin-right: 15px;
      overflow: hidden;
    }

    &-text {
      color: $color-light;
      font: 14px/16px Play, sans-serif;

      &_big {
        display: block;
      }

      &_little {
        display: none;
      }

      &:hover {
        color: $color-accent;
      }

    }

  }

  &__bottom {

    &-auth {
      align-self: center;
    }
    
    &-nav {

      /deep/.nav__item {

        &:last-child {
          margin-bottom: 39px;
        }

      }

    }

  }
  
}

@media (-ms-high-contrast: none), 
  (-ms-high-contrast: active) {

  .header {

    &__menu {
      top: 0px;
      left: 0;
    }

  }

}

@media (max-width: 400px) {

  .header__auth {

    &-text {

      &_big {
        display: none;
      }

      &_little {
        display: block;
      }

    }

  }
  
}

</style>
