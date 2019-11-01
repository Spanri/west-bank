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
      <div class="bank-account-or-card__buttons button-left-wrapper">
        <div class="button-left">
          <div class="button-left-inner" @click="goToExcerpt">
            <span class="button-left-text">Выписка</span>
          </div>
        </div>
        <div class="button-left">
          <div class="button-left-inner" @click="lockout">
            <span class="button-left-text">Заблокировать счёт</span>
          </div>
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
    lockout() {},
  },
};
</script>

 
<style scoped lang="scss">
.bank-account-or-card {
  @include button-left;

  height: 100%;

  color: $color-light;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* переопределение, так как размеры другие */
  &__item  {
    margin: 140px 0 0;
    margin-left: 43px;
    pointer-events: none;

    /deep/ .item {
      font: 36px/42px Play, sans-serif;
      vertical-align: top;
    }

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
    font: 24px/28px Play, sans-serif;

    max-width: 929px;

    flex-grow: 2;

    margin-top: 50px;

    & > * + * {
      margin-top: 40px;
    }

    &-item {
      margin-left: 43px;
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
    margin: 71px 0 188px;

    & > * + * {
      margin-top: 223px;
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
</style>
