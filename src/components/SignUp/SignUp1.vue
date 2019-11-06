<template>
  <div class="signup1">
    <p class="signup1__title">Регистрация</p>
    <SignUp1Inputs class="signup1__inputs" @next="next" />
    <p class="signup1__login login-link-wrapper">
      <router-link to="/login" class="login-link">
        <p class="login-link__text1">Уже есть аккаунт?</p>
        <p class="login-link__text2">Войти</p>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUp1",

  components: {
    SignUp1Inputs: () => import("@/components/SignUp/SignUp1Inputs.vue"),
  },

  methods: {
    next(data) {
      this.$emit("next", {
        val: '2',
        dataOfPhase1: data,
      });
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
.signup1 {
  @include login-link;

  color: $color-light;
  height: auto;

  margin: 0 auto;
  max-width: 829px;

  &__title {
    margin: 80px 45px;
    padding-left: calc(40% - 36px);

    color: $color-light;
    font: $font-header;
  }
  
}

@media (max-width: 1250px) {

  .signup1 {
    max-width: 608px;
  }

}

@media (max-width: 850px) {

  .signup1 {
    max-width: 470px;
  }

}

</style>