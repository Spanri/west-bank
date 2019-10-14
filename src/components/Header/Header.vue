<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="header__logo">
        <Logo
          class="transfers3__logo"
          :color1="logoColor1" :color2="logoColor2"
          @mouseenter.native="logoColor1 = 'white'"
          @mouseleave.native="logoColor1 = '#6DB0FF'"
        />
      </router-link>
      <div class="header__content">
        <p class="header__top">
          +7 (495) 215 57 74
        </p>
        <div class="header__bottom">
          <HeaderNav class="header__bottom-nav" />
          <HeaderAuth class="header__bottom-auth" />
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
    height: 172px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    color: white;

    box-sizing: border-box;
  }

  &__logo {
    user-select: none;
    padding: 15px 25px 0 27px;
  }

  &__content {
    width: 100%;
    max-width: 1227px;

    display: flex;
    flex-direction: column;

    padding: 31px 0 0 0;

    font-size: 24px;
    line-height: 28px;

    &:before {
      content: "";

      width: 10%;
      min-width: 100px;
      max-width: 200px;

      display: inline-block;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    text-align: right;

    padding-bottom: 0;
    padding-right: 60.66px;
  }

  &__bottom {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>
