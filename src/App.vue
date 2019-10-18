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
        v-if="isLoggedIn && currentRouteName != 'for-private-clients'" 
      />
      <transition name="slide" mode="out-in">
        <router-view class="app__content"/>
      </transition>
    </main>
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
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Play&display=swap");

.vs__selected-options {
    flex-basis: auto;
}

.vs__search {
  width: 0px;
}  

.vs--single .vs__selected {
  background-color: transparent;
  border-color: transparent;
  color: white;
}

*:hover {
  transition: ease-in-out all 0.15s;
}

.button:hover {
  cursor: pointer;
}

::selection {
  background: $color-block-light;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $color-background;
  overflow: hidden;

  text-align: center;
  font-family: Play;
  font-style: normal;
  font-weight: normal; 

  @include slide;
}

.app {
  &__header {
    max-width: 1440px;
    
    margin: 0 auto;

    &-wrapper {
      background: $color-header;
    }
  }

  &__main {
    min-height: calc(100vh - 172px);
    max-width: 1440px;

    margin: 0 auto;
  }
}
</style>
