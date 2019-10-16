<template>
  <header class="header">
    <div class="header-inner">
      <div class="header__status header__status_close" >
        <Hamburger 
          class="header__hamburger"
          @click="open = true"
        />
        <div class="header__menu" v-if="!open">
          <HeaderNav class="header__bottom-nav" />
          <HeaderAuth class="header__bottom-auth" />
        </div>
        <router-link 
          to="/" class="header__logo" 
          v-if="!open"
        >
          <Logo
            class="transfers3__logo"
            :color1="logoColor1" :color2="logoColor2"
            @mouseenter.native="logoColor1 = 'white'; logoColor2 = 'white';" 
            @mouseleave.native="logoColor1 = '#6DB0FF'; logoColor2 = '#766BF8';"
          />
        </router-link>
      </div>
    </div>
    <!-- <div v-if="open" class="header__status header__status_open">
      <Close class="header__close" @click="open = !open"/>
      Привет
    </div> -->
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Hamburger: () => import("@/icons/Hamburger.vue"),
    // Close: () => import("@/icons/Close.vue"),
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
};
</script>

<style scoped lang="scss">
.header {
  &-inner {
    height: 172px;
    width: 100%;

    color: white;

    box-sizing: border-box;
  }

  &__status {
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__hamburger {
    margin: 28px 0 28px 20px;
  }

  &__close {
    align-items: center;
  }

  &__logo {
    margin: 28px 20px 28px 0;
    user-select: none;
  }

  &__menu {
    display: flex;
    flex-direction: column;
  }
}
</style>
