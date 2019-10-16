<template>
  <div id="app">
    <div class="app__header-wrapper">
      <Header class="app__header app__header_more768"/>
      <HeaderMobile class="app__header app__header_768"/>
    </div>
    <main class="app__main">
      <NavIfAuth
        class="app__nav-if-auth"
        v-if="isLoggedIn && currentRouteName != 'for-private-clients'" 
      />
      <router-view class="app__content"/>
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
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Play&display=swap");

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


@media (min-width: 769px) {
  .app__header {
    &_more768 {
      display: flex;
    }

    &_768 {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .app__header {
    &_more768 {
      display: none;
    }

    &_768 {
      display: flex;
    }
  }
}
</style>
