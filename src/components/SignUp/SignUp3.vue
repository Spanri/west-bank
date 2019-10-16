<template>
  <div class="signup3">
    <img
      class="signup3__logo"
      src="@/assets/logo.svg"
      alt="Логотип вест банк"
    />
    <p class="signup3__text">
      Добро пожаловать!
    </p>
    <router-link class="signup3__link" to="/news">
      Перейти в онлайн-банк
    </router-link>
    <Ad class="signup3__ad" />
    <Footer class="signup3__footer" />
  </div>
</template>

<script>
export default {
  name: "SignUp3",
  components: {
    Ad: () => import("@/components/Ad.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.button:hover,
.button:hover .signup__button-svg {
  color: $color-accent;

  fill: $color-accent;
  transition: 0.1s all ease-in-out;
}

.signup3 {
  height: auto;

  color: $color-light;

  &__logo {
    margin-top: 189px;
    margin-bottom: 60px;
  }

  &__text {
    font-family: Play;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.09em;
  }

  &__link {
    color: $color-accent;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 144.2%;

    &:hover {
      text-decoration: none;
      color: darken($color: $color-accent, $amount: 20);
    }
  }

  &__ad {
    margin-top: 48px;
  }

  &__footer {
    margin-top: 412px;
  }
}
</style>
