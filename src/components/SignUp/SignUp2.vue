<template>
  <div class="signup2">
    <p class="signup2__title">Регистрация</p>
    <SignUp2Inputs class="signup2__inputs" @next="next" />
    <p class="signup2__login-wrapper">
      <router-link to="/login" class="button signup2__login">
        <p class="signup2__text1">Уже есть аккаунт?</p>
        <p class="signup2__text2">Войти</p>
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
  height: auto;

  color: $color-light;

  &__title {
    margin: $margin-header;
    // особый margin, с отступом слева
    margin-left: 155px;

    color: $color-light;
    font: $font-header;
  }

  &__login {
    color: $color-pre-light;
    font: Play;
    
    text-align: center;
    text-decoration: none;

    &-wrapper {
      margin: 124px 0 150px 170px;
    }

    & > * {
      margin: 0;
    }

    &:hover {
      color: $color-accent;
      transition: .1s all ease-in-out;
    }

  }

  &__text1 {
    font: 16px/144.2% Play;
  }

  &__text2 {
    font: 18px/144.2% Play;
  }
  
}
</style>
