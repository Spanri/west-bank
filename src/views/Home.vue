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
    <div class="home__buttons-wrapper">
      <div class="home__buttons">
        <button
          class="button home__open-bank-account"
          @click="goToOpenBankAccount"
        >
          <svg
            width="26" height="26"
            viewBox="0 0 26 26" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Cross class="home__cross"/>
          </svg>
          <span class="home__button-text">
            Открытие счета
          </span>
        </button>
        <button
          class="button home__mobile-network"
          @click="goToMobileNetwork"
        >
          <Rectangle class="home__rectangle"/>
          <span class="home__button-text">
            Мобильная связь
          </span>
        </button>
      </div>
    </div>
    <Footer class="home_footer"/>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Cross: () => import("@/icons/Cross.vue"),
    Rectangle: () => import("@/icons/Rectangle.vue"),
    ItemBankAccountOrCard: () => 
      import("@/components/ItemBankAccountOrCard.vue"),
    Footer: () => import("@/components/Footer.vue"),
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
  methods: {
    goToOpenBankAccount() {},
    goToMobileNetwork() {},
  },
};
</script>

<style scoped lang="scss">
.button {
  height: 61px;
  width: calc((100vw - 1440px) / 2 + 654px);

  padding-left: calc((100vw - 1440px) / 2 + 43px);
  @include color-opacity(background, $color-block-light, 0.2);
  border: 0;
  user-select: none;

  color: $color-light;
  text-align: left;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.09em;

  &:hover {
    @include color-opacity(background, $color-block-light, 0.4);
  }
}

.home {
  height: auto;

  color: $color-light;
  text-align: left;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  &__title {
    &_bank-accounts {
      padding-top: 64px;
      margin-bottom: 40px;

      display: flex;
      align-content: stretch;
    }

    &_cards {
      margin-top: 50px;
      margin-bottom: 45px;
    }
  }

  &__item {
    display: flex;
    align-content: stretch;

    padding-left: -15px;

    &:hover {
      cursor: pointer;
      @include color-opacity(background, $color-accent, 0.6);
      margin-left: -15px;
      transition: background ease-in-out 0.2s;

      max-width: 1100px;

      &::before {
        content: '';
        width: 15px;
        height: 100%;
        @include color-opacity(background, $color-accent, 0.6);
      }
    }
  }

  &__buttons {
    width: calc((100vw - 1440px) / 2 + 654px);

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));
    top: 85.25px;

    &-wrapper {
      height: 402.25px;

      position: relative;
    }

    & > * + * {
      margin-top: 25px;
    }
  }

  &__button-text {
    margin-left: 37px;
  }

  &__cross {
    margin-bottom: 5px;
  }

  &__rectangle {
    margin-bottom: 3px;
  }
}

.cards,
.bank-accounts {
  margin-left: 43px;
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
