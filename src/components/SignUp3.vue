<template>
  <div class="signup3">
    <div class="signup3__welcome">
      <img
        class="signup3__logo"
        src="../assets/logo-without-letters.svg"
        alt="Логотип вест банк"
      >
    </div>
    <p class="signup3__text">
      Добро пожаловать!
    </p>
    <router-link
      class="signup3__link"
      to="news"
    >
      Перейти в онлайн-банк
    </router-link>
    <Ad class="signup3__ad"/>
    <Footer class="signup3__footer"/>
  </div>
</template>

<script>
export default {
  name: 'SignUp3',
  components: {
    Ad: () => import('@/components/Ad.vue'),
    Footer: () => import('@/components/Footer.vue'),
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
.button:hover, .button:hover .signup__button-svg {
  color: $color-main;
  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.signup3 {
  height: auto;
  
  color: $color-light;

  &__nav {
    position: absolute;
    right: 0;
    margin-top: -70px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    color: $color-light;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      height: 90px;
      width: 128px;

      @include color-main(background, 0.6);
      box-shadow: 0px 4px 4px #000000;
      
      font-family: Play;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      &_selected {
        z-index: 3;
        width: 383px;
        @include color-main(background, 0.95);
      }
    }
  }

  &__welcome {
    margin-top: 129px;
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
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 144.2%;
  }

  &__ad {
    margin-top: 600px;
  }

  &__footer {
    margin-top: 412px;
  }
}
</style>
