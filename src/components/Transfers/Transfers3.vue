<template>
  <div class="transfers3">
    <img
      class="transfers3__logo"
      src="@/assets/logo.svg"
      alt="Логотип вест банк"
    />
    <p class="transfers3__text">
      Перевод совершен
    </p>
    <router-link class="transfers3__link" to="/news">
      <img src="@/assets/document-red.svg">
      <span class="transfers3__link-text">Показать чек</span>
    </router-link>
    <Ad class="transfers3__ad" />
  </div>
</template>

<script>
export default {
  name: "SignUp3",
  components: {
    Ad: () => import("@/components/Ad.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.button:hover,
.button:hover .transfers3__button-svg {
  color: $color-main;

  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.transfers3 {
  height: auto;

  color: $color-light;
  text-align: center;

  &__logo {
    margin: 0 auto;
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
    color: $color-main;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 144.2%;

    &-text {
      margin-left: 52px;
    }

    &:hover {
      text-decoration: none;
      color: darken($color: $color-main, $amount: 20);
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