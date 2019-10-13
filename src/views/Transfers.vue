<template>
  <div class="transfers">
    <p class="transfers__title">Переводы</p>
    <div v-if="$route.params.type == undefined">
      <p 
        class="transfers__button"
        v-for="(item, index) in items" :key="index"
      >
        <router-link
          class="transfers__link" :to="item.to"
          :class="index == 0 ? 'transfers__link-accent' : ''"
        >
          {{ item.title }}
        </router-link>
        <svg
          width="38" height="38"
          viewBox="0 0 38 38" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.952 35.094C5.82031 36.6809 2.12474 34.7029 2.1673 31.4627L2.49544 6.47833C2.53963 3.11435 6.55007 0.929276 9.64239 2.58435L33.4616 15.3329C36.5539 16.988 36.3506 21.2107 33.0993 22.8582L8.952 35.094Z"
            stroke-width="3"
          />
        </svg>
      </p>
    </div>
    <TransfersInputs v-else class="transfers__inputs" />
  </div>
</template>

<script>
export default {
  name: "Transfers",
  components: {
    TransfersInputs: () => import("@/components/TransfersInputs.vue"),
  },
  data() {
    return {
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
  beforeRouteLeave(to, from, next) {
    if (this.$route.params.type == undefined) {
      next();
    } else {
      const answer = window.confirm('Вы точно хотите уйти?');
      if (answer) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style scoped lang="scss">
.transfers {
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: $color-light;
  text-align: left;

  &__title {
    margin-top: 137px;
    margin-bottom: 165px;
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
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: $color-light;

    &-accent {
      color: $color-accent;

      &:hover {
        @include color-opacity(color, $color-accent, 0.5, true);
      }
    }

    &:hover {
      text-decoration: none;
      color: $color-medium;
    }
  }
}
</style>