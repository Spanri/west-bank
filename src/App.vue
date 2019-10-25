<template>
  <div id="app">
    <div class="app__header-wrapper">
      <Header 
        v-if="currentWidth > 1080" 
        class="app__header app__header_not-mobile" 
      />
      <Header748to1080 
        v-else-if="currentWidth > 748"
        class="app__header app__header_not-mobile"
      />
      <HeaderMobile 
        v-else
        class="app__header app_header_mobile"
      />
    </div>
    <main class="app__main">
      <NavIfAuth
        class="app__nav-if-auth"
        v-if="isLoggedIn && 
          currentRouteName != 'for-private-clients' && 
          currentRouteName != 'not-found' && 
          currentWidth > 748" 
      />
      <transition name="slide" mode="out-in">
        <router-view class="app__content"/>
      </transition>
    </main>
    <Footer 
      class="app__footer"
      v-if="currentRouteName != 'download-app' || currentWidth > 748"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {
    Header: () => import("@/components/Header/Header.vue"),
    Header748to1080: () => import("@/components/Header/Header748to1080.vue"),
    HeaderMobile: () => import("@/components/Header/HeaderMobile.vue"),
    NavIfAuth: () => import("@/components/NavIfAuth.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  mounted() {
    window.addEventListener('resize', this.setCurrentWidth);
  },
  computed: {
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
    const token = this.$store.state.token;
    console.log("token", token);
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);
    }
  },
  methods: {
    setCurrentWidth(e) {
      this.$store.commit('setCurrentWidth', e.currentTarget.innerWidth);
      // if (e.currentTarget.innerWidth < 748 && this.isLoggedIn) {
      //   this.$router.push("/download-app");
      // }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setCurrentWidth);
  },
};
</script>

<style lang="scss">
*:hover {
  transition: ease-in-out all .15s;
}

.button:hover {
  cursor: pointer;
}

::selection {
  background: darken($color-block-light, 5);
  color: $color-pre-light;
}

#app {
  background: $color-background;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  font: Play;
  text-align: center;

  @include slide;
  @include datepicker;
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
    height: 100%;
    max-width: 1440px;
    margin: 0px auto auto;
    width: -moz-available;
  }

  &__footer {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }
  
}
</style>
