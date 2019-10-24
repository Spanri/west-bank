<template>
  <div id="app">
    <div class="app__header-wrapper">
      <component 
        :is="currentWidth > 1080 ? 'Header' : 
          currentWidth > 748 ? 'Header748to1080' : 'HeaderMobile'"
        class="app__header"
        :class="
          currentWidth > 748 ? 
          'app__header_not-mobile' :
          'app__header_mobile'
        "
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

  font: Play;
  text-align: center;

  @include slide;
  @include datepicker;
}

.app {

  &__header {
    max-width: 1440px;

    margin: 0 auto;

    // position: sticky;
    top: 0px;

    &-wrapper {
      background: $color-header;
    }

  }

  &__main {
    min-height: calc(100vh - 290px);
  }

  &__content {
    // min-height: calc(100vh - 290px);
    max-width: 1440px;
    margin: 0 auto;
  }
  
}
</style>
