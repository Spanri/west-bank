<template>
  <header class="header">
    <router-link
      to="/"
      class="header__logo"
    >
      <img
        src="../assets/logo-header.svg"
        alt="Логотип вест банк"
        class="header__logo-img"
      />
    </router-link>
    <div class="header__content">
      <div class="header__top">
        <p>ООО РНКО “ВЕСТ”</p>
        <p>+7 (495) 215 57 74</p>
      </div>
      <div class="header__bottom">
        <HeaderNav class="header__bottom-nav" />
        <HeaderAuth class="header__bottom-auth" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    HeaderNav: () => import("@/components/HeaderNav.vue"),
    HeaderAuth: () => import("@/components/HeaderAuth.vue"),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 180px;

  display: flex;
  justify-content: space-between;

  color: white;

  box-sizing: border-box;

  &__logo {
    padding: 9px 25px 0 14px;
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
