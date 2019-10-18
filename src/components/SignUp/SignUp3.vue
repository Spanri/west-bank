<template>
  <div class="signup3">
    <Logo 
      class="signup3__logo"
      color1="white" color2="white" 
      size="271"
    />
    <p class="signup3__text">
      Добро пожаловать!
    </p>
    <router-link class="signup3__link" to="/news">
      Перейти в онлайн-банк
    </router-link>
    <Ad class="signup3__ad" />
  </div>
</template>

<script>
export default {
  name: "SignUp3",
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Ad: () => import("@/components/Ad.vue"),
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
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.09em;
  }

  &__link {
    color: $color-accent;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 144.2%;

    &:hover {
      text-decoration: none;
      color: $color-light;
    }
  }

  &__ad {
    margin-top: 48px;
  }
}
</style>
