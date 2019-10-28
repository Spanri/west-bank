<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/home" class="header__logo">
        <LogoText 
          class="header__logo-text" :color="logoColor"
        />
        <img 
          src="@/assets/logo.png" alt="Логотип"
          class="header__logo-svg"
          width="75" height="86"
        >
        <!-- 
          @mouseenter.native="logoColor = 'rgb(255, 190, 190)'"
          @mouseleave.native="logoColor = 'white'"
         -->
      </router-link>
      <div class="header__content">
        <HeaderNav class="header__nav" />
        <div class="header__auth-block">
          <p class="header__text">+7 (495) 215 57 74</p>
          <HeaderAuth class="header__auth" />
        </div>
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
    margin-top: 46px;
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
    flex-direction: row;
    justify-content: space-between;
  }

  &__auth-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__text {
    text-align: left;
    font: 19px/22px Play, sans-serif;
    letter-spacing: .015em;

    padding: 0 0 3px 6px;
    margin: 0;
  }
  
}
</style>
