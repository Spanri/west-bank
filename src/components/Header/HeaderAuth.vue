<template>
  <div class="auth">
    <router-link
      to="/signup"
      class="auth__login auth__login_false"
      v-if="!isLoggedIn"
    >
      <img
        class="auth__logo"
        src="@/assets/auth-link.svg"
        alt="Иконка входа в веб-банк"
      />
      <span class="auth__text">Войти в веб-банк</span>
    </router-link>
    <router-link
      to="/profile"
      class="auth__login auth__login_true"
      v-if="isLoggedIn"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderAuth",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    name() {
      let user = this.$store.getters.getUser;
      return user.profile.firstName;
    },
  },
};
</script>

 
<style scoped lang="scss">
.auth {
  width: 274px;
  height: 90px;

  display: flex;

  background: $color-main;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  &__login {
    &:hover {
      box-shadow: 0 0 24px $color-block-light;
      // background: darken($color: $color-main, $amount: 15);
    }

    &_false {
      width: 274px;

      display: flex;
      justify-content: center;
      align-items: center;

      letter-spacing: 0.05em;
      color: white;
      text-decoration: none;

      user-select: none;
    }

    &_true {
      width: 274px;

      display: flex;
      justify-content: center;
      align-items: center;

      letter-spacing: 0.05em;
      color: white;
      text-decoration: none;

      user-select: none;
    }
  }

  &__logo {
    padding-right: 13px;

    width: 35px;
  }
}

@media (max-width: 1200px) {
  .auth {
    width: 180px;

    &__logo {
      padding-left: 10px;
      padding-right: 0px;
    }
  }
}
</style>
