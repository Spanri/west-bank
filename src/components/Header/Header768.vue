<template>
  <header class="header">
    <div class="header-inner">
      <div class="header__status header__status_close" v-if="!open">
        <div 
          class="header_hamburger-wrapper"
          @click="open = !open"
        >
          <svg
            class="header__hamburger"
            width="40" height="31"
            viewBox="0 0 40 31" fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <line 
              x1="2" y1="2" 
              x2="38" y2="2" 
              stroke="#C66166" stroke-width="4" 
              stroke-linecap="round" stroke-linejoin="round"
            />
            <line
              x1="2" y1="15" 
              x2="38" y2="15" 
              stroke="#C66166" stroke-width="4" 
              stroke-linecap="round" stroke-linejoin="round"
            />
            <line
              x1="2" y1="29" 
              x2="38" y2="29" 
              stroke="#C66166" stroke-width="4" 
              stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="header__menu">
          <HeaderNav class="header__bottom-nav" />
          <HeaderAuth class="header__bottom-auth" />
        </div>
        <router-link to="/" class="header__logo">
          <Logo
            class="transfers3__logo"
            :color1="logoColor1" :color2="logoColor2"
            @mouseenter.native="logoColor1 = 'white'; logoColor2 = 'white';" 
            @mouseleave.native="logoColor1 = '#6DB0FF'; logoColor2 = '#766BF8';"
          />
        </router-link>
      </div>
    </div>
    <div class="header__status header__status_open" v-if="open">
      <svg 
        width="24" height="24"
        viewBox="0 0 24 24" fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line 
          x1="3" y1="20.2131"
          x2="20.213" y2="3.00006"
          stroke="#C66166" stroke-width="4"
          stroke-linecap="round" stroke-linejoin="round"
        />
        <line
          x1="3.82843" y1="3.10059"
          x2="21.0414" y2="20.3136"
          stroke="#C66166" stroke-width="4"
          stroke-linecap="round" stroke-linejoin="round"
        />
      </svg>

      Привет
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
