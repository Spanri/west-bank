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
        <div class="home__buttons-item home__history">
          <router-link 
            class="home__link"
            to="/history"
          >
            <History class="home__history"/>
            <span class="home__button-text">
              История
            </span>
          </router-link>
        </div>
        <div class="home__buttons-item home__open-bank-account">
          <router-link 
            class="home__link"
            to=""
          >
            <Cross class="home__cross"/>
            <span class="home__button-text">
              Открытие счета
            </span>
          </router-link>
        </div>
        <div class="home__buttons-item home__mobile-network">
          <router-link 
            class="home__link"
            to=""
          >
            <Rectangle class="home__rectangle"/>
            <span class="home__button-text">
              Мобильная связь
            </span>
          </router-link>
        </div>
        <br>
      </div>
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
  height: auto;

  color: $color-light;
  font: 24px/28px Play;
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

      max-width: 1100px;

      &::before {
        @include color-opacity(background, $color-accent, .6);
        content: '';

        height: 100%;
        width: 15px;
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

    &-item {
      height: 61px;
      width: calc((100vw - 1440px) / 2 + 654px);

      @include color-opacity(background, $color-block-light, .2);
      background: 
        linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
        rgba(red($color-block-light), 
          green($color-block-light), 
          blue($color-block-light), 
          .2); 
      border: 0;
      padding-left: calc((100vw - 1440px) / 2 + 43px);    
      padding-top: 5px;  

      &:hover {
        background: $color-accent;
        background: 
          linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
          $color-accent; 
      }

    }
  }

  &__link {
    user-select: none;
    text-decoration: none;

    color: $color-light;
    font: normal normal normal 36px/42px Play;
    letter-spacing: .09em;
    text-align: left;
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

@media (min-width: 1440px) {
  .home__buttons-item {
    background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      rgba(red($color-block-light), 
        green($color-block-light), 
        blue($color-block-light), 
        .2); 

    &:hover {
      background: 
        linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
        $color-accent; 
    }
  }
}

@media (max-width: 1440px) {

  .home__buttons {
    left: 0;

    &-item {
      width: 654px;
      padding-left: 43px;
    }
  }

}
</style>
