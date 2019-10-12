<template>
  <div class="signup1">
    <p class="signup1__title">Регистрация</p>
    <SignUp1Inputs
      class="signup1__inputs"
      @next="next"
    />
    <p class="signup1__login">
      Уже есть аккаунт?<br />
      <router-link
        to="/login"
        class="button signup1__login-button"
      >
        Войти
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUp1",
  components: {
    SignUp1Inputs: () => import("@/components/SignUp1Inputs.vue"),
  },
  methods: {
    next(component) {
      this.$emit("next", component);
    },
  },
};
</script>

<style scoped lang="scss">
.button:hover {
  color: darken($color: $color-light, $amount: 40);
  fill: darken($color: $color-light, $amount: 40);
  transition: 0.1s all ease-in-out;
}

.signup1 {
  height: auto;

  color: $color-light;

  &__title {
    margin: 88px 0 111px 155px;

    color: white;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__login {
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    text-align: center;

    margin: 0;
    margin-left: 155px;
    margin-bottom: 348px;

    &-button {
      font-size: 36px;
      line-height: 154.2%;
      color: white;
      text-decoration: none;
    }
  }
}
</style>