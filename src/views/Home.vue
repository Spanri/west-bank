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
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M14.8571 1.85714C14.8571 0.831471 14.0257 0 13 0C11.9743 0 11.1429 0.831471 11.1429 1.85714V11.1429H1.85714C0.831471 11.1429 0 11.9743 0 13C0 14.0257 0.831471 14.8571 1.85714 14.8571H11.1429V24.1429C11.1429 25.1685 11.9743 26 13 26C14.0257 26 14.8571 25.1685 14.8571 24.1429V14.8571H24.1429C25.1685 14.8571 26 14.0257 26 13C26 11.9743 25.1685 11.1429 24.1429 11.1429H14.8571V1.85714Z"
              fill="#2D9CDB"
            />
          </svg>
          <span class="home__button-text">
            Открытие счета
          </span>
        </button>
        <button
          class="button home__mobile-network"
          @click="goToMobileNetwork"
        >
          <svg
            width="26" height="40"
            viewBox="0 0 26 40" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 38.6948L1 1.3052C1 1.14029 1.13526 1 1.31026 1H24.6897C24.8647 1 25 1.14029 25 1.3052L25 38.6948C25 38.8597 24.8647 39 24.6897 39H1.31026C1.13525 39 1 38.8597 1 38.6948Z"
              stroke="#2D9CDB" stroke-width="2"
            />
          </svg>
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
    ItemBankAccountOrCard: () => import("@/components/ItemBankAccountOrCard.vue"),
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
  @include color-opacity(background, $color-main, 0.2);
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
    @include color-opacity(background, $color-main, 0.4);
  }
}

.home {
  height: auto;

  color: $color-light;
  text-align: left;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  &__title {
    &_bank-accounts {
      margin-top: 64px;
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
