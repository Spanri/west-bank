<template>
  <div class="home">
    <div class="bank-accounts">
      <p class="home__title home__title_bank-accounts">Счета</p>
      <ItemBankAccountOrCard
        class="home__item"
        v-for="(item, index) in bankAccounts" :key="index"
        type="bank-account" :item="item"
      />
    </div>
    <div class="cards">
      <p class="home__title home__title_cards">Карты</p>
      <ItemBankAccountOrCard
        class="home__item"
        v-for="(item, index) in cards" :key="index"
        type="card" :item="item"
      />
    </div>
    <div class="home__buttons button-left-wrapper">
      <router-link class="button-left" to="/history">
        <div class="button-left-inner">
          <History class="home__icon home__history" width="40"/>
          <span class="button-left-text">История</span>
        </div>
      </router-link>
      <router-link class="button-left" to="">
        <div class="button-left-inner">
          <Cross class="home__icon home__cross" width="40"/>
          <span class="button-left-text">Открытие счета</span>
        </div>
      </router-link>
      <router-link class="button-left" to="">
        <div class="button-left-inner">
          <Rectangle class="home__icon home__rectangle" width="40"/>
          <span class="button-left-text">Мобильная связь</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    History: () => import("@/icons/History.vue"),
    Cross: () => import("@/icons/Cross.vue"),
    Rectangle: () => import("@/icons/Rectangle.vue"),
    ItemBankAccountOrCard: () => 
      import("@/components/ItemBankAccountOrCard.vue"),
  },
  data() {
    return {
      bankAccounts: [
        { id: 0, number: "4560", money: "65.25", currency: 0, },
        { id: 1, number: "7654", money: "123.84", currency: 1, },
        { id: 2, number: "7777", money: "9999999999.99", currency: 2, },
      ],
      cards: [
        { id: 0, number: "4560", money: "65.25", currency: 0, },
        { id: 1, number: "7654", money: "123.84", currency: 1, },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  @include button-left;

  height: auto;

  color: $color-light;
  font: 24px/28px Play, sans-serif;
  text-align: left;

  &__title {

    &_bank-accounts {
      margin-bottom: 40px;
      padding-top: 64px;

      display: flex;
      align-content: stretch;
    }

    &_cards {
      margin: 50px 0 45px 0;
    }

  }

  &__item {
    display: flex;
    align-content: stretch;

    &:hover {
      @include color-opacity(background, $color-accent, .6);
      cursor: pointer;
      margin-left: -15px;
      transition: background ease-in-out .2s;

      max-width: 730px;

      &::before {
        @include color-opacity(background, $color-accent, .6);
        content: '';

        height: 100%;
        width: 15px;
      }

    }

  }

  &__buttons {
    margin: 185px 0 100px;

    & > * + * {
      margin-top: 78px;
    }

  }

  /* Иконки для кнопок */

  &__icon {
    margin-right: 37px;
  }

  &__cross, &__history {
    margin-bottom: 5px;
  }

  &__rectangle {
    margin-bottom: 3px;
  }

}

.cards,
.bank-accounts {
  margin-left: 193px;
}

@media (max-width: 1166px) {

  .cards, .bank-accounts {
    margin-left: 60px;
  }

}

@media (max-width: 900px) {

  .cards, .bank-accounts {
    margin-left: 60px;
  }

}

</style>
