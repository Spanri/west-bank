<template>
  <div class="auth" @click="goToPage()">
    <router-link
      to="/auth" v-if="!isLoggedIn"
      class="auth__login auth__login_false"
    >
      <AuthLogo class="auth__logo" color="#F2F2F2" />
      <span class="auth__text">Личный кабинет</span>
    </router-link>
    <router-link
      to="/profile"
      class="auth__login auth__login_true"
      v-if="isLoggedIn"
    >
      <ProfileLogo class="auth__logo" :color="logoColor" />
      <span class="auth__text">{{ name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderAuth",

  components: {
    AuthLogo: () => import("@/icons/AuthLogo.vue"),
    ProfileLogo: () => import("@/icons/ProfileLogo.vue"),
  },

  data() {
    return {
      logoColor: '#F2F2F2',
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },

    name() {
      let user = this.$store.getters.getUser;
      return user.profile.firstName;
    },
  },
  
  methods: {
    goToPage() {
      this.$emit("goToPage");
    },
  },
};
</script>

<style scoped lang="scss">
.auth {
  height: 72px;
  width: 278px;

  display: flex;

  background: $color-accent;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  &__login {

    &_false, &_true {
      width: 278px;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      color: $color-light;
      font: 16px/19px Play, sans-serif;
      letter-spacing: .05em;
      text-decoration: none;

      user-select: none;
    }

    // &_true {
    //   width: 278px;

    //   display: flex;
    //   justify-content: center;
    //   align-items: center;

    //   letter-spacing: 0.05em;
    //   color: $color-light;
    //   text-decoration: none;

    //   user-select: none;
    // }
  }

  &__logo {
    margin: 0 8px;
    width: 35px;
  }

  &__text {
    padding-left: 15px;
  }

  &:hover {
    background: $color-block-light;
  }

}

@media (max-width: 1200px) {

  .auth {
    width: 226px;

    // &__logo {
    //   display: none;
    // }
  }

}

@media (max-width: 748px) {

  .auth {
    flex-direction: column;

    background: transparent;
    box-shadow: none;
    
    // color: $color-light;

    // height: 40px;

    &__login {
      background: transparent;
      transition: 0s;

      &_false {
        margin-left: -35px;
      }

      &_true {
        margin-left: -35px;
      }

    }

    &__text {
      padding-left: 20px;
    }

    &:hover {
      background: transparent;
      
      .auth__login {
        color: $color-accent;
      }

    }

  }
  
}
</style>
