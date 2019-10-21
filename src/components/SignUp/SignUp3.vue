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
    <Block class="signup3__block" />
  </div>
</template>

<script>
export default {
  name: "SignUp3",
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Block: () => import("@/components/Block.vue"),
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
  transition: .1s all ease-in-out;
}

.signup3 {
  color: $color-light;
  height: auto;

  &__logo {
    margin: 189px 0 60px;
  }

  &__text {
    font: normal normal bold 36px/42px Play;
    letter-spacing: 0.09em;
    text-align: center;
  }

  &__link {
    color: $color-accent;
    font: 24px/144.2% Play;

    &:hover {
      color: $color-light;
      text-decoration: none;
    }

  }

  &__block {
    margin-top: 149px;
    margin-bottom: 71px;
  }
  
}
</style>
