<template>
  <div class="transfers3">
    <Logo
      class="transfers3__logo"
      size="271"
      color1="white"
      color2="white"
    />
    <p class="transfers3__text">
      Перевод совершен
    </p>
    <router-link 
      class="transfers3__link" to=""
      @mouseenter.native="logoColor1 = 'none'; logoColor2 = '#9c2929';" 
      @mouseleave.native="logoColor1 = 'none'; logoColor2 = '#D35858';"
    >
      <Document
        class="transfers3__link-img"
        :color1="logoColor1" :color2="logoColor2"
      />
      <span class="transfers3__link-text">Показать чек</span>
    </router-link>
    <Ad class="transfers3__ad" />
  </div>
</template>

<script>
export default {
  name: "SignUp3",
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Document: () => import("@/icons/Document.vue"),
    Ad: () => import("@/components/Ad.vue"),
  },
  data() {
    return {
      logoColor1: "none",
      logoColor2: "#D35858",
    };
  },
};
</script>

<style scoped lang="scss">
/* для показать чек, не поняла, что переопределила */
* {
  transition: 0.15s;
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
    color: $color-accent;
    font-family: Play;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 144.2%;

    &-text {
      margin-left: 52px;
      vertical-align: middle;
    }

    &:hover {
      text-decoration: none;
      color: darken($color: $color-accent, $amount: 20);
    }
  }

  &__ad {
    margin-top: 48px;
    margin-bottom: 89px;
  }
}
</style>