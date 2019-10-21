<template>
  <div class="transfers">
    <NavPhases class="signup__nav" :phase="transfersPhase"/> 
    <transition name="slide" mode="out-in">
      <!-- <component
        :is="transfersPhase" @next="next"
        class="signup__content"
      /> -->
      <Transfers1 class="signup__content"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Transfers",
  components: {
    NavPhases: () => import("@/components/NavPhases.vue"),
    Transfers1: () => import("@/components/Transfers/Transfers1.vue"),
    // Transfers2: () => import("@/components/Transfers/Transfers2.vue"),
    // Transfers3: () => import("@/components/Transfers/Transfers3.vue"),
  },
  computed: {
    // currentRouteName() {
    //   return this.$route.name;
    // },
  },
  watch: { 
    // currentRouteName: function(newVal) {
    //   console.log(newVal);
    //   if (newVal == 'transfers-links') {
    //     this.transfersPhase = 'Transfers1';
    //   }
    // },
  },
  data() {
    return {
      transfersPhase: 'Transfers1',
      items: [
        { 
          title: 'Перевод без открытия счета в рублях', 
          to: '/transfers/without-opening-an-account-in-rubles', 
        },
        { title: 'Перевод на карту', to: '/transfers/to-card', },
        { title: 'Перевод на электронный кошелек', to: '/transfers/to-e-wallet', },
      ],
    };
  },
  methods: {
    next(component) {
      this.transfersPhase = component;
    },
  },
};
</script>

<style scoped lang="scss">
.transfers {
  @include slide;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - 172px);

  color: $color-light;
  font: normal normal normal 36px/42px Play;
  text-align: left;

  &__title {
    margin: 137px 0 165px;
  }

  &__button + &__button {
    margin-top: 117px;
  }

  &__button {
    width: 841px;

    display: flex;
    justify-content: space-between;
  }

  &__link {
    font: normal normal normal 36px/42px Play;
    color: $color-light;

    &-accent {
      color: $color-accent;

      &:hover {
        @include color-opacity(color, $color-accent, .5, true);
      }
    }

    &:hover {
      color: $color-medium;
      text-decoration: none;
    }
  }
}
</style>