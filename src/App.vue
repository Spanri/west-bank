<template>
  <div id="app">
    <div class="app__header-wrapper">
      <component 
        :is="currentWidth > 748 ? 'Header' : 'HeaderMobile'"
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
      if (this.currentWidth < 748 && this.isLoggedIn) {
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

.date-picker {
  display: inline-block;

  &__input {
    height: 37px;
    //width: 281px;

    display: inline-block;

    background: $color-medium !important;
    border: 0;
    border-radius: 10px;
    margin: 0 42px;
    padding: 0 auto;

    color: $color-light;
    font: 22px/28px Play;
    vertical-align: middle;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

  }

  &__calendar {
    background: $color-block-light !important;
    border: 0 !important;
    margin-right: 50px !important;
    width: 420px  !important;

    .prev {
      color: white !important;
    }

    span:hover {
      background: $color-accent !important;
      border: 1px solid transparent !important;
    }

    .up:hover, .prev:hover, .next:hover {
      border: 0 !important;
    }

  }

}

#app {
  background: $color-background;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font: Play;
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
