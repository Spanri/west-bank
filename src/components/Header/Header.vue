<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/home" class="header__logo">
        <Logo
          class="transfers3__logo" size="105"
          :color1="logoColor1" :color2="logoColor2"
          @mouseenter.native="logoColor1 = 'white'"
          @mouseleave.native="logoColor1 = '#6DB0FF'"
        />
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
    Logo: () => import("@/icons/Logo.vue"),
    HeaderNav: () => import("@/components/Header/HeaderNav.vue"),
    HeaderAuth: () => import("@/components/Header/HeaderAuth.vue"),
  },
  data() {
    return {
      logoColor1: "#6DB0FF",
      logoColor2: "#766BF8",
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

    color: white;

    box-sizing: border-box;
  }

  &__nav {
    margin-top: 46px;
  }

  &__logo {
    user-select: none;
    padding: 7px 20px 0 27px;
  }

  &__content {
    width: 100%;
    max-width: 1227px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 24px;
    line-height: 28px;
  }

  &__auth-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__text {
    text-align: left;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: 0.015em;

    padding-bottom: 3px;
    padding-left: 6px;
    margin: 0;
  }
}
</style>
