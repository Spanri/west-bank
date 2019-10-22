<template>
  <div id="app">
    <div class="app__header-wrapper">
      <component 
        :is="currentWidth > 768 ? 'Header' : 'HeaderMobile'"
        class="app__header"
        :class="
          currentWidth > 768 ? 
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
          currentWidth > 500" 
      />
      <transition name="slide" mode="out-in">
        <router-view class="app__content"/>
      </transition>
    </main>
    <Footer 
      class="app__footer"
      v-if="currentRouteName != 'download-app'"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {
    Header: () => import("@/components/Header/Header.vue"),
    HeaderMobile: () => import("@/components/Header/HeaderMobile.vue"),
    NavIfAuth: () => import("@/components/NavIfAuth.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  mounted() {
    window.addEventListener('resize', this.setCurrentWidth);
  },
  data() {
    return {
      currentWidth: window.innerWidth,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    currentRouteName() {
      return this.$route.name;
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
      this.currentWidth = e.currentTarget.innerWidth;
      if (this.currentWidth < 500 && this.isLoggedIn) {
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
*:hover {
  transition: ease-in-out all .15s;
}

.button:hover {
  cursor: pointer;
}

::selection {
  background: $color-block-light;
  color: $color-light;
}

#app {
  background: $color-background;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;

  font-family: Play;
  font-style: normal;
  font-weight: normal;
  text-align: center;

  @include slide;
}

.app {

  &__header {
    max-width: 1440px;

    margin: 0 auto;

    position: sticky;
    top: 0px;

    &-wrapper {
      background: $color-header;
    }

  }

  &__main {
    min-height: calc(100vh - 290px);
  }

  &__content {
    min-height: calc(100vh - 290px);
    max-width: 1440px;
    margin: 0 auto;
  }
  
}
</style>
