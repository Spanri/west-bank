<template>
  <div class="bank-account-or-card">
    <ItemBankAccountOrCard
      class="bank-account-or-card__item"
      type="bank-account" :item="item"
    />
    <div class="bank-account-or-card__info">
      <p class="bank-account-or-card__info-item">
        <span class="bank-account-or-card__info-title">
          Статус:
        </span>
        <span class="bank-account-or-card__info-data">
          {{ item.status }}
        </span>
      </p>
      <p class="bank-account-or-card__info-item">
        <span class="bank-account-or-card__info-title">
          Вид:
        </span>
        <span class="bank-account-or-card__info-data">
          {{ item.type }}
        </span>
      </p>
      <p class="bank-account-or-card__info-item">
        <span class="bank-account-or-card__info-title">
          Ограничения:
        </span>
        <span class="bank-account-or-card__info-data">
          {{ item.constraints }}
        </span>
      </p>
    </div>
    <div class="bank-account-or-card__buttons-wrapper">
      <div class="bank-account-or-card__buttons">
        <div class="bank-account-or-card__buttons-inner">
          <p 
            class="bank-account-or-card__buttons-text" 
            @click="goToExcerpt"
          >
            Выписка
          </p>
        </div>
        <div class="bank-account-or-card__buttons-inner">
          <p 
            class="bank-account-or-card__buttons-text"
          >
            Заблокировать счёт
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bankAccountOrCard",
  components: {
    ItemBankAccountOrCard: () => import("@/components/ItemBankAccountOrCard.vue"),
  },
  data() {
    return {
      item: {
        id: 0,
        number: "4560",
        money: "65.25",
        currency: 0,
        status: "Открыт",
        type: "Не персонализирован",
        constraints: "Не персонализирован Не персонализирован Не персон ализирован Не персо нализирован Не персонализирован Не персонал изирован Не персонНе персонализирован ",
      },
    };
  },
  methods: {
    goToExcerpt() {
      this.$router.push({
        name: "excerpt",
        params: {
          id: this.item.id,
        },
      });
    },
  },
};
</script>

 
<style scoped lang="scss">
.bank-account-or-card {
  height: 100%;

  color: $color-light;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__item  {
    margin: 140px 0 0;
    margin-left: 43px;
    pointer-events: none;

    /* 
    Не получается переопределить то, то в 
    компоненте ItembankAccountOrCard:^(
    */
    .item:hover {
      cursor: default !important;
      background: transparent !important;
    }

  }

  &__info {
    font: 24px/28px Play;

    max-width: 929px;

    flex-grow: 2;

    margin-top: 50px;
    margin-left: 43px;

    & > * + * {
      margin-top: 40px;
    }

    &-item:last-child {
      margin-bottom: 82px;
    }

    &-title {
      color: $color-light;
      font-weight: bold;
    }

    &-data {
      color: $color-post-medium;
      font-weight: normal;
    }

  }

  &__buttons {
    height: 268px;

    &-wrapper {
      position: relative;
      margin: 71px 0 188px;
    }

    &-inner {      
      position: absolute;
      left: calc((100vw - 1440px) / 2 * (-1));

      height: 62px;
      width: calc((100vw - 1440px) / 2 + 654px);

      @include color-opacity(background, $color-block-light, .2);
      background: 
        linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
        rgba(red($color-block-light), 
          green($color-block-light), 
          blue($color-block-light),
          .2); 
      border: 0;
      padding-left: calc((100vw - 1440px) / 2);
      user-select: none;

      color: $color-light;
      font: normal normal normal 24px/28px Play;
      letter-spacing: .09em;

      &:hover {
        background: $color-accent;
        background: 
          linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
          $color-accent;
        cursor: pointer;
      }
    }

    &-inner + &-inner {
      margin-top: 313px; // 90px (1ый блок) + 223px
    }

    &-text {
      margin: 0;
      padding: 15px 0 15px 42px;
      text-align: left;
    }    

  }

  &__excerpt {
    width: 1177.27px;

    background: transparent;
    margin-bottom: 50px;
    stroke: $color-light;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:hover {
      color: $color-accent;
      cursor: pointer;
      stroke: $color-accent;
    }

  }
  
}

@media (min-width: 1440px) {

  .bank-account-or-card__buttons-inner {
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

  .bank-account-or-card__buttons-inner {
    width: 654px;
    left: 0;
  }

}
</style>
