<template>
  <div class="item-wrapper">
    <div
      class="item"
      @click="goToBankAccountorCard(item.id)"
    >
      <div class="item-without-currency">
        <Card class="item__number-svg"/>
        <span class="item__number">
          <CardNumber class="item__number-svg" />
          {{ item.number }}
        </span>
        <span class="item__money">
          {{ item.money }}
        </span>
      </div>
      <span class="item__currency">
        {{
          item.currency == 0
            ? "₽"
            : item.currency == 1
            ? "₽"
            : item.currency == 2
            ? "₽"
            : "₽"
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  props: {
    type: String,
    item: {
      id: 0, 
      number: "4560", 
      money: "65.25", 
      currency: 0,
    },
  },

  components: {
    Card: () => import("@/icons/Card.vue"),
    CardNumber: () => import("@/icons/CardNumber.vue"),
  },
  
  methods: {
    goToBankAccountorCard(id) {
      this.$router.push({
        name: this.type,
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;

  width: min-content;

  padding: 19px;
  margin: 0 -19px;

  font: 24px/28px Play, sans-serif;

  &-without-currency {
    width: 645px;
    display: flex;
    justify-content: space-between;
  }

  &__number {
    flex-grow: 2;
    align-self: center;
    margin-left: 40.29px;

    &-svg {
      vertical-align: inherit;
      margin-right: 10px;
      background: transparent;
    }

  }

  &__money {
    align-self: center;
  }

  &__currency {
    margin-left: 26px; 
    align-self: center;
  }

}

@media (max-width: 1440px) {
  .home__buttons {
    left: 0;
  }

  .button {
    width: 654px;
    padding-left: 43px;
  }

}

@media (max-width: 900px) {

  .item-without-currency {
    width: 500px;
  }

}
</style>
