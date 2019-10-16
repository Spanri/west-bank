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
        <td class="select-inner currency__type">
          <select class="select currency__type-select">
            <option class="select__item">USD</option>
            <option selected class="select__item">EUR</option>
            <option class="select__item">GBP</option>
            <option class="select__item">CHF</option>
          </select>
        </td>
        <td class="currency__value">65,66</td>
        <td class="currency__value">67,85</td>
      </tr>
      <tr>
        <td class="select-inner currency__type">
          <select class="select currency__type-select">
            <option class="select__item">USD</option>
            <option class="select__item">EUR</option>
            <option selected class="select__item">GBP</option>
            <option class="select__item">CHF</option>
          </select>
        </td>
        <td class="currency__value">72,12</td>
        <td class="currency__value">74,57</td>
      </tr>
    </table>
    <table class="currency__converter">
      <tr class="currency__title">
        <th colspan="2">Конвертер</th>
      </tr>
      <tr>
        <td class="currency__value">10000</td>
        <td class="select-inner currency__symbol">
          <select class="select currency__symbol-select">
            <option class="select__item">$</option>
            <option class="select__item">₽</option>
            <option selected class="select__item">€</option>
            <option class="select__item">£</option>
            <option class="select__item">CHf</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="currency__value">134,10</td>
        <td class="select-inner currency__symbol">
          <select class="select currency__symbol-select">
            <option class="select__item">$</option>
            <option class="select__item">₽</option>
            <option selected class="select__item">€</option>
            <option class="select__item">£</option>
            <option class="select__item">CHf</option>
          </select>
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
};
</script>

<style scoped lang="scss">    
select { -webkit-border-radius:25px; -moz-border-radius:25px; border-radius:25px; } 
select:hover { background-color:gren; } 
option:hover { background-color:yellow; } 
option { -webkit-border-radius:25px; -moz-border-radius:25px; border-radius:25px; color:blue; background-color:yellow; }


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
  }

  &__converter {
    width: 250px;
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
    height: 65px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    vertical-align: top;
  }

  &__subtitle {
    height: 65px;

    vertical-align: top;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__value {
    height: 65px;

    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
  }

  &__type {
    &-select {
      color: #6fcf97;
    }

    &::before {
      left: 0;
      top: 25px;
    }
  }

  &__symbol {
    &-select {
      color: $color-light;
    }

    &::before {
      left: 35px;
      top: 50px;
    }
  }
}

.select {
  display: block;

  width: 100%;
  height: 65px;

  padding-left: 26px;
  border: none;
  appearance: none;
  background-color: transparent;
  margin-right: 53px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  &__item {
    background: $color-light;
    border: 0;

    color: black;
    font-size: 20px;
  }

  &-inner {
    position: relative;

    &::before {
      content: "▼";
      pointer-events: none;

      display: inline-block;

      width: 24px;
      height: 24px;

      position: absolute;

      color: $color-light;
    }
  }

  &:hover,
  &-inner:hover::before {
    cursor: pointer;

    color: $color-accent;
  }

  &::-ms-expand {
    display: none;
  }
}
</style>