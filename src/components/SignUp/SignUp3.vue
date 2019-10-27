<template>
  <div class="signup3">
    <div class="signup3__content">
      <Logo class="signup3__logo" size="401" />
      <p class="signup3__text">
        Добро пожаловать!
      </p>
      <router-link class="signup3__link" to="/news">
        Перейти в онлайн-банк
      </router-link>
    </div>
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__logo {
    margin: 109px 0 30.42px;
  }

  &__text {
    font: $font-header;
    letter-spacing: 0.09em;
    text-align: center;
    margin-bottom: 8px;
  }

  &__link {
    color: $color-accent;
    font: 18px/144.2% Play;

    &:hover {
      color: $color-light;
      text-decoration: none;
    }

  }

  &__block {
    margin-top: 189px;
    margin-bottom: 120px;
  }
  
}
</style>
