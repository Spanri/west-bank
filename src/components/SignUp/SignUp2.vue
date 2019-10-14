<template>
  <div class="signup2">
    <p class="signup2__title">Регистрация</p>
    <SignUp2Inputs class="signup2__inputs" @next="next" />
    <p class="signup2__login">
      Уже есть аккаунт?<br />
      <router-link to="/login" class="button signup2__login-button">
        Войти
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUp2",
  components: {
    SignUp2Inputs: () => import("@/components/SignUp/SignUp2Inputs.vue"),
  },
  methods: {
    next(component) {
      this.$emit("next", component);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == 'login') {
      next();
    } else {
      const answer = window.confirm('Вы точно хотите уйти?');
      if (answer) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style scoped lang="scss">
.button:hover,
.button:hover .signup1__button-svg {
  color: darken($color: $color-light, $amount: 40);

  fill: darken($color: $color-light, $amount: 40);
  transition: 0.1s all ease-in-out;
}

.signup2 {
  height: auto;

  color: $color-light;

  &__title {
    margin: 88px 0 111px 155px;

    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__login {
    color: $color-pre-light;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    text-align: center;

    margin-left: 155px;
    margin-bottom: 348px;

    &-button {
      color: $color-pre-light;
      font-size: 36px;
      line-height: 144.2%;
      text-decoration: none;
    }
  }
}
</style>
