<template>
  <header class="header">
    <div class="header-inner">
      <router-link 
        to="/home" class="header__logo"
        @mouseenter.native="logoColor = '#C66166'; 
          logo = 'logoHover.png'"
        @mouseleave.native="logoColor = 'white'; logo = 'logo.png'"
      >
        <LogoText class="header__logo-text" :color="logoColor" />
        <img :src="getImgUrl(logo)" class="header__logo-svg" />
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
import { getImgUrl, } from "@/mixins/getImgUrl";

export default {
  name: "Header",
  mixins: [getImgUrl,], // data - logo, methods - getImgUrl
  components: {
    LogoText: () => import("@/icons/LogoText.vue"),
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
    //margin-top: 46px;
  }

  &__logo {
    user-select: none;
    margin: 0 20px 0 15px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 170px;

    &-svg {
      height: 86px; 
      width: auto;
    }

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
