<template>
  <div class="transfers1">
    <p class="transfers1__title">Переводы</p>
    <div
      class="transfers1__button"
      v-for="(item, index) in items" :key="index"
    >
      <div
        class="transfers1__link" @click="goToNext(item.to)"
        :class="index == 0 ? 'transfers1__link-accent' : ''"
      >
        {{ item.title }}
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Transfers",
  data() {
    return {
      items: [
        { 
          title: 'Перевод без открытия счета в рублях', 
          to: 'without-opening-an-account-in-rubles',
        },
        { title: 'Перевод на карту', to: 'to-card', },
        { title: 'Перевод на электронный кошелек', to: 'to-e-wallet', },
      ],
    };
  },
  methods: {
    goToNext(to) {
      this.$router.push({ name: 'transfers', params: { type: to, }, });
      this.$emit("next", 'Transfers2');
    },
  },
};
</script>

<style scoped lang="scss">
.transfers1 {
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: $color-light;
  text-align: left;

  height: 100%;

  margin-left: 41px;

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

    &:hover {
      cursor: pointer;
    }
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
        /* я не знаю, как это переопределить */
        color: darken($color: $color-accent, $amount: 20) !important;
      }
    }

    &:hover {
      text-decoration: none;
      color: $color-accent;
    }
  }
}
</style>