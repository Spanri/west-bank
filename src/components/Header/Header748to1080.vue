<template>
  <header class="header">
    <div class="header-inner">
      <router-link 
        to="/home" class="header__logo"
        @mouseenter.native="logoColor = 'rgb(255, 180, 180)'"
        @mouseleave.native="logoColor = 'white'"
      >
        <LogoText class="header__logo-text" :color="logoColor" />
        <Logo 
          class="header__logo-svg" 
          :color="logoColor" size="86"
        />
      </router-link>
      <div class="header__content">
        <div class="header__top">
          <p class="header__text">+7 (495) 215 57 74</p>
          <HeaderAuth class="header__auth" />
        </div>
        <HeaderNav class="header__nav" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    LogoText: () => import("@/icons/LogoText.vue"),
    Logo: () => import("@/icons/Logo.vue"),
    HeaderNav: () => import("@/components/Header/HeaderNav.vue"),
    HeaderAuth: () => import("@/components/Header/HeaderAuth.vue"),
  },
  data() {
    return {
      logoColor: "white",
    };
  },
};
</script>

<style scoped lang="scss">
.header {

  &-inner {
    height: 118px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    color: $color-light;

    box-sizing: border-box;
  }

  &__nav {
    margin-top: 1px;
    

    /deep/ .nav__item {
      font: 14px/16px Play;
      align-items: flex-start;
      vertical-align: top;
    }

  }

  &__auth.auth {
    height: 57px;
  }

  &__logo {
    user-select: none;
    padding: 0 20px 0 27px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  }

  &__content {
    width: 100%;
    max-width: 1227px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    font: 24px/28px Play;
  }

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    text-align: left;
    font: 19px/22px Play;
    letter-spacing: .015em;

    padding: 15px 0 0;
    margin: 0;
  }
  
}
</style>