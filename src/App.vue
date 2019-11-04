<template>
  <div id="app">
    <div class="app__header-wrapper">
      <HeaderBig class="app__header width3_big" />
      <Header748to1080 class="app__header width3_748-to-1080" />
      <HeaderMobile class="app__header width3_mobile" />
    </div>
    <main class="app__main">
      <NavIfAuth
        class="app__nav-if-auth width2_big"
        v-if="isLoggedIn && (this.$route.meta.type & 0b010)" 
      />
      <transition name="slide" mode="out-in">
        <router-view class="app__content"/>
      </transition>
    </main>
    <Footer class="app__footer" />
  </div>
</template>

<script>
// import axios from "axios";
// import { mapGetters, mapActions, } from "vuex";

export default {
  name: "App",

  components: {
    HeaderBig: () => import("@/components/Header/HeaderBig.vue"),
    Header748to1080: () => import("@/components/Header/Header748to1080.vue"),
    HeaderMobile: () => import("@/components/Header/HeaderMobile.vue"),
    NavIfAuth: () => import("@/components/NavIfAuth.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },

  mounted() {
    /** 
     * Применяется в components/Header/HeaderNav.vue и ниже в 
     * methods, setCurrentWidth
    */
    window.addEventListener('resize', this.setCurrentWidth);
  },

  computed: {
    // ...mapGetters('auth', [
    //   'isLoggedIn',
    // ]),

    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },

    currentRouteName() {
      return this.$route.name;
    },
    
    currentWidth() {
      return this.$store.getters.getCurrentWidth;
    },
  },

  created() {
    // const token = this.$store.state.token;

    // console.log("token", token);
    // if (token) {
    //   axios.defaults.headers.common["Authorization"] = token;
    //   localStorage.setItem("token", token);
    // }
  },

  methods: {
    // ...mapActions('auth', [
    //     'login',
    // ]),
      
    setCurrentWidth(e) {
      const currentWidth = e.currentTarget.innerWidth;
      const isAuth = this.$route.meta.type & 0b100;

      this.$store.commit('setCurrentWidth', currentWidth);
      if (currentWidth < 748 && isAuth) {
        this.$router.push("/download-app");
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setCurrentWidth);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Play, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  min-height: 100vh;
  
  @include slide; // переключение страниц
  @include datepicker; // для дат в components/Excerpt/ExcerptFilter
  @include width3; // показ блоков в зависимости от размера, 3 размера
  @include width2; // показ блоков в зависимости от размера, 2 размера
  background: $color-background;
}

.app {

  &__header {
    max-width: 1440px;
    margin: 0 auto;

    &-wrapper {
      background: $color-header;
      z-index: 10;

      position: sticky;
      top: 0px;
    }

  }

  &__main {
    max-width: 1440px;
    margin: 0px auto auto;

    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;
  }

  &__footer {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }
  
}

@media (min-width: 748px) {

  .app__main {
    height: 100%;
  }

}

@media (-ms-high-contrast: none), 
  (-ms-high-contrast: active) {

  .app__main {
    height: 100%;
  }

}
</style>
