<template>
  <div class="signup2">
    <p class="signup2__title">Регистрация</p>
    <SignUp2Inputs class="signup2__inputs" @next="next" />
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
  name: "SignUp2",

  components: {
    SignUp2Inputs: () => import("@/components/SignUp/SignUp2Inputs.vue"),
  },

  methods: {
    next() {
      this.$emit("next", 3);
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
.signup2 {
  @include login-link;
  height: auto;
  color: $color-light;

  margin: 0 auto;
  max-width: 729px;

  &__title {
    margin: $margin-header;
    // особый margin, с отступом слева
    margin-left: 245px;

    color: $color-light;
    font: $font-header;
  }
  
}

@media (max-width: 1250px) {

  .signup2__title {
    margin-left: 185px;
  }

}

@media (max-width: 850px) {

  .signup2__title {
    margin-left: 145px;
  }

}
</style>
