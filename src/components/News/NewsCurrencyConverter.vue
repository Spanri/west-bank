<template>
  <table class="converter">
    <tr class="converter__title">
      <th>Конвертер</th>
      <th class="converter__text width2_mobile">
        Курс актуален на {{ relevance }}
      </th>
    </tr>
    <tr>
      <td class="converter__value">10000</td>
      <td class="converter__select-wrapper converter__symbol">
        <Select 
          class="converter__select converter__symbol-select"
          :items="['$', '₽', '€', '£']" default="$"
          :icon="true"
          @select="select" model="selected3"
        />
      </td>
    </tr>
    <tr>
      <td class="converter__value">134,10</td>
      <td class="converter__select-wrapper converter__symbol">
        <Select 
          class="converter__select converter__symbol-select"
          :items="['$', '₽', '€', '£']" default="$" 
          :icon="true"
          @select="select" model="selected4"
        />
      </td>
    </tr>
    <tr class="width2_big-tr">
      <td colspan="2" class="converter__text">
        Курс актуален на {{ relevance }}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapActions, } from "vuex";

export default {
  name: "NewsCurrencyConverter",

  components: {
    Select: () => import("@/components/Select.vue"),
  },

  data() {
    return {
      selected3: '$',
      selected4: '€',
    };
  },

  computed: {
    ...mapGetters('general', [ 'currencyConverter', ]),

    relevance: this.currencyConverter.relevance.toLocaleDateString(
      "ru-RU", { 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric', 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
      }
    ),
  },
  
  methods: {
    ...mapActions('general', [ 'getCurrencyConverter', ]),

    select(val, model) {
      this[model] = val;
    },
  },

  created() {
    this.getCurrencyConverter();
  },
};
</script>

<style scoped lang="scss">

.converter {
  @include width2; // показ блоков в зависимости от размера, 2 размера
  width: 250px;

  &__text {
    color: $color-light;
    font: 12px/144.69% Roboto;

    width: 100%;

    opacity: 0.6;
    padding-top: 32px;
  }

  &__title {
    font: normal normal bold 18px Roboto;
    vertical-align: top;
    text-align: right;

    height: 67px;
    width: 90px;
  }

  &__subtitle {
    height: 49px;

    font: 16px/19px Roboto;
    vertical-align: top;
  }

  &__value {
    // нужно задавать высоту, ибо иначе она ставится по select
    height: 75px;
    width: 90px;

    font: 24px/28px Play, sans-serif;
    text-align: right;
  }

  // для select конвертера
  &__symbol {
    position: relative;

    &-select {
      display: block;

      position: relative;

      color: $color-light;

      padding-left: 61px;
    }

  }
  
}

@media (max-width: 748px) {

  .converter {
    margin-top: 18px;
    width: 100%;
      
    &__title {
      height: 53px;

      & > * {
        padding-left: 15px;
      }

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