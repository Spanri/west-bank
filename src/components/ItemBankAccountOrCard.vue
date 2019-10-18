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
            ? "долларов"
            : item.currency == 2
            ? "евро"
            : "че"
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

  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  &-without-currency {
    width: 878px;

    display: flex;
    justify-content: space-between;
  }

  &__number {
    flex-grow: 2;
    align-self: center;

    margin-left: 44.78px;

    &-svg {
      vertical-align: inherit;
      margin-right: 10px;
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
</style>
