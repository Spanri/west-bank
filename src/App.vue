<template>
  <div id="app">
    <div id="app-inner">
      <Header class="app__header"/>
      <main
        class="app__main"
        v-cloak>
        <NavIfAuth
          class="app__nav-if-auth"
          v-if="isLoggedIn" />
        <router-view class="app__content"/>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {
    Header: () => import("@/components/Header.vue"),
    NavIfAuth: () => import("@/components/NavIfAuth.vue"),
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
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

.button:hover {
  cursor: pointer;
}

::selection {
  background: $color-main;
}

[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: " ";
  background-image: url("data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==");

  display: block;

  width: 16px;
  height: 16px;
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

  &-inner {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;

    min-height: 100vh;
    max-width: 1440px;

    margin: 0 auto;
  }

  &__main {
    flex: 2 0px;
  }
}
</style>
