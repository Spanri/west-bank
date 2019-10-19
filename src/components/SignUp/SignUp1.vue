<template>
  <div class="signup1">
    <p class="signup1__title">Регистрация</p>
    <SignUp1Inputs class="signup1__inputs" @next="next" />
    <p class="signup1__login-wrapper">
      <router-link to="/login" class="button signup1__login">
        <p class="signup1__text1">Уже есть аккаунт?</p>
        <p class="signup1__text2">Войти</p>
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
.signup1 {
  color: $color-light;
  height: auto;

  &__title {
    margin: 88px 0 111px 155px;

    color: $color-light;
    font: normal normal normal 24px/28px Play;
  }

  &__login {
    color: $color-accent;
    font: Play;
    
    text-align: center;
    text-decoration: none;
    
    &-wrapper {
      margin: 85px 0 150px;
    }

    & > * {
      margin: 0 0 0 155px;
    }

    &:hover {
      color: $color-light;
      transition: .1s all ease-in-out;
    }
  }

  &__text1 {
    font-size: 24px;
    line-height: 35px;
  }

  &__text2 {
    font-size: 36px;
    line-height: 52px;
  }
  
}
</style>