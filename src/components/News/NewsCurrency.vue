<template>
  <div class="currency">
    <table class="currency__rates">
      <tr class="currency__title">
        <th colspan="4">Курсы</th>
      </tr>
      <tr>
        <td class="currency__subtitle"></td>
        <td class="currency__subtitle">Покупка</td>
        <td class="currency__subtitle">Продажа</td>
      </tr>
      <tr>
        <td class="currency__select-wrapper currency__type">
          <Select 
            class="currency__select currency__type-select"
            :items="['USD', 'EUR', 'GBP', 'CHF']"
            default="USD" @select="select" 
            model="selected1"
          />
        </td>
        <td class="currency__value">65,66</td>
        <td class="currency__value">67,85</td>
      </tr>
      <tr>
        <td class="currency__select-wrapper currency__type">
          <Select 
            class="currency__select currency__type-select"
            :items="['USD', 'EUR', 'GBP', 'CHF']"
            default="EUR" @select="select" 
            model="selected2"
          />
        </td>
        <td class="currency__value">72,12</td>
        <td class="currency__value">74,57</td>
      </tr>
    </table>
    <table class="currency__converter">
      <tr class="currency__title">
        <th colspan="1">Конвертер</th>
      </tr>
      <tr>
        <td class="currency__value">10000</td>
        <td class="currency__select-wrapper currency__symbol">
          <Select 
            class="currency__select currency__symbol-select"
            :items="['$', '₽', '€', '£']" default="$"
            @select="select" model="selected3"
          />
        </td>
      </tr>
      <tr>
        <td class="currency__value">134,10</td>
        <td class="currency__select-wrapper currency__symbol">
          <Select 
            class="currency__select currency__symbol-select"
            :items="['$', '₽', '€', '£dfdfd']" default="$" 
            @select="select" model="selected4"
          />
        </td>
      </tr>
      <tr>
        <td colspan="2" class="currency__text">
          Курс актуален на 19:00:05, 2.09.2019
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "NewsCurrency",
  components: {
    Select: () => import("@/components/Select.vue"),
  },
  data() {
    return {
      selected1: 'USD',
      selected2: 'EUR',
      selected3: '$',
      selected4: '€',
    };
  },
  methods: {
    select(val, model) {
      this[model] = val;
    },
  },
};
</script>

<style scoped lang="scss">  
*:hover {
  transition: all ease-in-out 0s;
}

.currency {
  display: flex;
  justify-content: center;

  margin-bottom: 158px;

  color: $color-light;
  text-align: left;

  &__rates {
    width: 431px;

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

  &__text {
    color: $color-light;
    font: 12px Roboto;
    line-height: 144.69%;

    opacity: 0.6;
    padding-top: 32px;
  }

  &__title {
    font: normal normal bold 18px Roboto;
    vertical-align: top;
  }

  &__subtitle {
    height: 49px;

    font: 16px/19px Roboto;
    vertical-align: top;
  }

  &__value {
    /* нужно задавать высоту, ибо иначе она ставится по select */
    height: 75px;

    font: 24px/28px Play;
  }

  /* для select курсов */
  &__type {
    position: relative;
    width: 150px;

    &-select {
      color: $success;
      padding-left: 26px;

      &::before {
        content: "▼";

        display: inline-block;

        height: 24px;
        width: 24px;
        
        position: absolute;
        left: 0;
        top: 25px;

        color: $color-light;
        font-size: 18px;
      }

      &:hover::before {
        color: $color-accent;
        cursor: pointer;
      }

    }

  }

  /* для select конвертера */
  &__symbol {
    position: relative;

    &-select {
      display: block;
      position: relative;

      color: $color-light;

      padding-left: 61px;

      &::after {
        content: "▼";
        margin: -30px 15px 0 0;

        display: inline-block;

        height: 24px;
        width: 24px;

        position: relative;
        left: 28px;
        top: -30px;

        color: $color-light;
        font-size: 18px;
      }

      &:hover::after {
        color: $color-accent;
        cursor: pointer;
      }

    }

  }
  
}

.currency__select {

  &-wrapper {
    &:hover,
    &:hover /deep/ .select__value,
    &:hover::before {
      color: $color-accent;
      cursor: pointer;
    }

  }

}
</style>