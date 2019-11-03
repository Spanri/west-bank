<template>
  <div class="transfers1">
    <p class="transfers1__title">Переводы</p>
    <button
      class="transfers1__button" @click="goToNext(item.to)"
      v-for="(item, index) in items" :key="index"
      @mouseenter="item.logoColor = '#D35858'"
      @mouseleave=" item.logoColor = 'white'"
    >
      <div
        class="transfers1__link"
      >
        {{ item.title }}
      </div>
      <Triangle class="transfers1__triangle" :color="item.logoColor" /> 
    </button>
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
          logoColor: 'white',
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
  text-align: left;
  margin-left: 41px;

  &__title {
    padding: 44px 0 80px;    
    font: $font-header;
  }

  &__button + &__button {
    margin-top: 38px;
  }

  &__button {
    width: 546px;

    display: flex;
    justify-content: space-between;

    font: $font-header;

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

    &:hover {
      color: $color-accent;
      text-decoration: none;
    }

  }
  
}
</style>