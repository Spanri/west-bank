<template>
  <div class="home">
    <div class="rectangles-and-card">
      <div class="rectangles-and-card__first"></div>
      <div class="rectangles-and-card__second"></div>
      <Ad class="rectangles-and-card__ad" />
      <img
        src="../assets/card.svg"
        alt="Банковская карта"
        width="384"
        height="220"
        class="rectangles-and-card__card"
      />
    </div>
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
              <option
selected
class="select__item">EUR</option>
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
              <option
selected
class="select__item">GBP</option>
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
              <option
selected
class="select__item">€</option>
              <option class="select__item">£</option>
              <option class="select__item">CHf</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="currency__value">134,10</td>
          <td class="select-inner currency__symbol">
            <input type="radio" />
            <select class="select currency__symbol-select">
              <option class="select__item">$</option>
              <option class="select__item">₽</option>
              <option
selected
class="select__item">€</option>
              <option class="select__item">£</option>
              <option class="select__item">CHf</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "News",
  components: {
    Ad: () => import("@/components/Ad.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
};
</script>

<style scoped lang="scss">
.home {
  height: auto;
  position: relative;

  color: white;
}

.rectangles-and-card {
  // position: relative;
  height: 603px;

  &__first {
    position: absolute;
    top: 65px;
    left: calc((100vw - 1440px) / 2 * (-1));

    width: calc((100vw - 1440px) / 2 + 720px);
    height: 220px;

    @include color-main(background, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__second {
    position: absolute;
    top: 150px;
    left: calc((100vw - 1440px) / 2 * (-1));

    width: calc((100vw - 1440px) / 2 + 908px);
    height: 257px;

    @include color-main(background, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__card {
    position: absolute;
    top: 289px;
    left: 650px;

    margin-bottom: -220px;
    transform: rotate(-15deg);
    box-shadow: 3px 6px 4px rgba(0, 0, 0, 0.3),
      inset -2px -4px 0px rgba(0, 0, 0, 0.25);
  }
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
    width: 232px;
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

option:checked {
  background: red;
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

    &:checked {
      background: red !important;
    }
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

    color: $color-main;
  }

  &::-ms-expand {
    display: none;
  }
}

@media (max-width: 1440px) {
  .rectangles-and-card {
    &__first {
      left: 0;

      width: 720px;
    }

    &__second {
      left: 0;

      width: 908px;
    }

    &__ad {
      left: 0;
      
      width: 1166px;
    }
  }
}
</style>
