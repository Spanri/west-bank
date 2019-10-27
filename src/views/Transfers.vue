<template>
  <div class="transfers">
    <NavPhases class="signup__nav" :phase="transfersPhase" /> 
    <transition name="slide" mode="out-in">
      <router-view class="signup__content" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Transfers",
  components: {
    NavPhases: () => import("@/components/NavPhases.vue"),
  },
  computed: {
    transfersPhase() {
      return this.$route.name[9];
    },
  },
  methods: {
    next(val) {
      this.transfersPhase = val;
    },
  },
};
</script>

<style scoped lang="scss">
.transfers {
  @include slide;

  color: $color-light;
  font: 36px/42px Play;
  text-align: left;

  margin-bottom: 150px;

  &__title {
    padding: 137px 0 165px;
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