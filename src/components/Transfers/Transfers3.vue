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
  color: $color-light;
  height: auto;
  text-align: center;

  &__logo {
    margin: 189px auto 60px;
  }

  &__text {
    font: normal normal bold 48px/56px Play;
    letter-spacing: .09em;
    text-align: center;
  }

  &__link {
    color: $color-accent;
    font: normal normal bold 36px/144.2% Play;

    &-text {
      margin-left: 52px;
      vertical-align: middle;
    }

    &:hover {
      color: darken($color: $color-accent, $amount: 20);
      text-decoration: none; 
    }

  }

  &__ad {
    margin: 48px 0 89px;
  }
  
}
</style>