<template>
  <div class="signup3">
    <div class="signup3__content">
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__logo {
    margin: 178px 0 91px;
  }

  &__text {
    font: normal normal bold 24px/28px Play;
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
