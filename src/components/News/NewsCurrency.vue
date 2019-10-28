<template>
  <div class="currency">
    <NewsCurrencyRates  class="currency__rates" />
    <NewsCurrencyConverter 
      :relevance="converter.relevance"
      class="currency__converter"
    />
  </div>
</template>

<script>
export default {
  name: "NewsCurrency",
  components: {
    NewsCurrencyRates: () => import("@/components/News/NewsCurrencyRates.vue"),
    NewsCurrencyConverter: () => 
      import("@/components/News/NewsCurrencyConverter.vue"),
  },
  data() {
    return {
      converter: {
        relevance: (new Date()).toLocaleDateString("ru-RU", { 
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric', 
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric', 
        }),
        ruble: 1,
        dollar: 50,
        euro: 60,
        pound: 80,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.currency {
  @include width2; // показ блоков в зависимости от размера, 2 размера

  display: flex;
  justify-content: center;

  color: $color-light;
  text-align: left;

  &__rates {
    margin: 0 221px 0 232px;

    .currency__title {
      height: auto;
    }
  }

  &__converter {
    width: 250px;

    .currency__value {
      text-align: right;
      width: 90px;
    }

    .currency__title {
      height: 67px;
      text-align: right;
      width: 90px;
    }

  }
  
}

@media (max-width: 1066px) {

  .currency {

    &__rates {
      margin: 0 32px 0 0;
    }
    
  }

}

@media (max-width: 800px) {

  .currency {
    justify-content: flex-end;
  }

}

@media (max-width: 748px) {

  .currency {
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;

    &__rates {
      width: 100%;
    }

    &__converter {
      margin-top: 18px;
    }

  }

}

@media (max-width: 420px) {

  .currency {
    margin: 0 21px;
  }

}

</style>