<template>
  <div class="transfers1">
    <p class="transfers1__title">Переводы</p>
    <div
      class="transfers1__button"
      v-for="(item, index) in items" :key="index"
      @mouseenter.native="logoColor[index] = '#C66166'"
      @mouseleave.native="logoColor[index] = 'white'"
    >
      <div
        class="transfers1__link" @click="goToNext(item.to)"
        :class="index == 0 ? 'transfers1__link-accent' : ''"
      >
        {{ item.title }}
      </div>
      <Triangle 

        class="transfers1__triangle" :color="logoColor[index]"
      /> {{logoColor[index]}} {{index}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Transfers",
  components: {
    Triangle: () => import("@/icons/Triangle.vue"),
  },
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
      logoColor: [ "red", "white", "white", ],
    };
  },
  methods: {
    mouseenter(index) {
      this.logoColor[index] = '#C66166';
    },
    goToNext(to) {
      this.$router.push({ name: 'transfers', params: { type: to, }, });
      this.$emit("next", 'Transfers2');
    },
  },
};
</script>

<style scoped lang="scss">
.transfers1 {
  color: $color-light;
  font: 24px/28px Play;
  text-align: left;

  height: 100%;

  margin-left: 41px;

  &__title {
    margin: 44px 0 111px;
  }

  &__button + &__button {
    margin-top: 38px;
  }

  &__button {
    width: 546px;
    display: flex;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
    }

  }

  &__link {

    &-accent {
      color: $color-accent;

      &:hover {
        /* я не знаю, как это переопределить */
        color: darken($color: $color-accent, $amount: 20) !important;
      }

    }

    &:hover {
      color: $color-accent;
      text-decoration: none;
    }

  }
  
}
</style>