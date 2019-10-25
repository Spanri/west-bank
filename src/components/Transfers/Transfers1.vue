<template>
  <div class="transfers1">
    <p class="transfers1__title">Переводы</p>
    <div
      class="transfers1__button" @click="goToNext(item.to)"
      v-for="(item, index) in items" :key="index"
      @mouseenter="index == 0 ? 
        item.logoColor = 'white' : item.logoColor = '#D35858'"
      @mouseleave=" index == 0 ? 
        item.logoColor = '#D35858' : item.logoColor = 'white'"
    >
      <div
        class="transfers1__link" 
        :class="index == 0 ? 'transfers1__link-accent' : ''"
      >
        {{ item.title }}
      </div>
      <Triangle class="transfers1__triangle" :color="item.logoColor" /> 
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
          to: 'without-opening-an-account',
          logoColor: '#D35858',
        },
        { 
          title: 'Перевод на карту', 
          to: 'to-card', 
          logoColor: 'white',
        },
        { 
          title: 'Перевод на электронный кошелек', 
          to: 'to-e-wallet', 
          logoColor: 'white',
        },
      ],
    };
  },
  methods: {
    goToNext(to) {
      this.$router.push({ name: 'transfers2-' + to, });
      this.$emit("next", 2);
    },
  },
};
</script>

<style scoped lang="scss">
.transfers1 {
  color: $color-light;
  font: 24px/28px Play;
  text-align: left;

  // height: 100%;

  margin-left: 41px;

  &__title {
    margin: 0 0 111px;
    padding-top: 44px;
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
      color: $color-accent;
      transition: 0 ease-in-out all;

      .transfers1__link-accent {
        color: $color-light;
      }
    }

  }

  &__link {

    &-accent {
      color: $color-accent;

    }

    &:hover {
      color: $color-accent;
      text-decoration: none;
    }

  }
  
}
</style>