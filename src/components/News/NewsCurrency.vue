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

    margin-right: 221px;
    margin-left: 232px;

    .currency__title {
      height: auto;
    }
  }

  &__converter {
    width: 250px;

    .currency__value {
      width: 90px;
      text-align: right;
    }

    .currency__title {
      width: 90px;
      height: 67px;
      text-align: right;
    }
  }

  &__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 144.69%;
    color: $color-light;

    padding-top: 32px;
    opacity: 0.6;
  }

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    vertical-align: top;
  }

  &__subtitle {
    height: 49px;

    vertical-align: top;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  &__value {
    /* нужно задавать высоту, ибо иначе она ставится по select */
    height: 75px;

    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  /* для select курсов */
  &__type {
    width: 150px;
    position: relative;

    &-select {
      color: #6fcf97;
      padding-left: 26px;

      &::before {
        content: "▼";

        display: inline-block;

        width: 24px;
        height: 24px;

        position: absolute;
        top: 25px;
        left: 0;

        color: $color-light;
        font-size: 18px;
      }

      &:hover::before {
        cursor: pointer;
        color: $color-accent;
      }
    }
  }

  /* для select конвертера */
  &__symbol {
    position: relative;

    &-select {
      display: block;
      position: relative;

      padding-left: 61px;
      color: $color-light;

       &::after {
        content: "▼";
        display: inline-block;

        width: 24px;
        height: 24px;

        position: relative;
        left: 28px;
        top: -30px;

        margin-top: -30px;
        margin-right: 15px;

        color: $color-light;
        font-size: 18px;
      }

      &:hover::after {
        cursor: pointer;
        color: $color-accent;
      }
    }
  }
}

.currency__select {
  &-wrapper {
    &:hover,
    &:hover /deep/ .select__value,
    &:hover::before {
      cursor: pointer;
      color: $color-accent;
    }
  }
}
</style>