<template>
  <table class="rates">
    <tr class="rates__title">
      <th colspan="4">Курсы</th>
    </tr>
    <tr>
      <td class="rates__subtitle"></td>
      <td class="rates__subtitle">Покупка</td>
      <td class="rates__subtitle">Продажа</td>
    </tr>
    <tr>
      <td class="rates__select-wrapper rates__type">
        <Select 
          class="rates__select rates__type-select"
          :items="items1"
          :default="selected1" @select="select"
          model="selected1" :icon="false"
        />
      </td>
      <td class="rates__value">{{ rates[selected1][0] }}</td>
      <td class="rates__value">{{ rates[selected1][1] }}</td>
    </tr>
    <tr>
      <td class="rates__select-wrapper rates__type">
        <Select 
          class="rates__select rates__type-select"
          :items="items2"
          :default="selected2" @select="select" 
          model="selected2" :icon="false"
        />
      </td>
      <td class="rates__value">{{ rates[selected2][0] }}</td>
      <td class="rates__value">{{ rates[selected2][1] }}</td>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapActions, } from "vuex";

export default {
  name: "NewsCurrencyRates",

  components: {
    Select: () => import("@/components/Select.vue"),
  },

  data() {
    return {
      selected1: 'EUR',
      selected2: 'USD',
    };
  },

  computed: {
    ...mapGetters('general', [ 'currencyRates', ]),

    items1() {
      return ['USD', 'EUR', 'GBP',].filter(item => item != this.selected2);
    },

    items2() {
      return ['USD', 'EUR', 'GBP',].filter(item => item != this.selected1);
    },

    rates() {
      return {
        RUB: this.currencyRates.ruble,
        USD: this.currencyRates.dollar,
        EUR: this.currencyRates.euro,
        GBP: this.currencyRates.pound,
      };
    },
  },
  
  methods: {
    ...mapActions('general', [ 'getCurrencyRates', ]),

    select(val, model) {
      this[model] = val;
    },
  },

  created() {
    this.getCurrencyRates();
  },
};
</script>

<style scoped lang="scss">

.rates {
  width: 431px;

  &__text {
    color: $color-light;
    font: 12px/144.69% Roboto;

    opacity: 0.6;
    padding-top: 32px;
  }

  &__title {
    font: normal normal bold 18px Roboto;
    vertical-align: top;
    height: auto;
  }

  &__subtitle {
    height: 49px;

    font: 16px/19px Roboto;
    vertical-align: top;
  }

  &__value {
    // нужно задавать высоту, ибо иначе она ставится по select
    height: 75px;
    font: 24px/28px Play, sans-serif;
  }

  // для select курсов
  &__type {
    position: relative;
    width: 150px;

    &-select {
      color: $success;
      padding-left: 26px;
    }

  }
  
}

@media (max-width: 748px) {

  .rates {
    width: 100%;

    &__title > * {
      padding-left: 15px;
    }

    &__subtitle {
      padding-right: 10px;
    }

    &__value {
      height: 38px;
      font: 18px/21px Play, sans-serif;
      text-align: left !important;
    }

    &__select {
      font: 18px/21px Roboto !important;
      padding-left: 22px;
    }

    &__type-select::before {
      top: 20px;
    }

    &__symbol-select::after {
      top: -23px;
      left: 25px;
    }

    &__text {
      width: auto;
      padding: 0;
      padding-left: 10px;
    }

  }

}

</style>