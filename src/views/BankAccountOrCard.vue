<template>
  <div class="bankAccount-or-card">
    <ItemBankAccountOrCard
      class="bankAccount-or-card__item"
      type="bankAccount" :item="item"
    />
    <div class="bankAccount-or-card__info">
      <p class="bankAccount-or-card__info-item">
        <span class="bankAccount-or-card__info-title">
          Статус:
        </span>
        <span class="bankAccount-or-card__info-data">
          {{ item.status }}
        </span>
      </p>
      <p class="bankAccount-or-card__info-item">
        <span class="bankAccount-or-card__info-title">
          Вид:
        </span>
        <span class="bankAccount-or-card__info-data">
          {{ item.type }}
        </span>
      </p>
      <p class="bankAccount-or-card__info-item">
        <span class="bankAccount-or-card__info-title">
          Ограничения:
        </span>
        <span class="bankAccount-or-card__info-data">
          {{ item.constraints }}
        </span>
      </p>
    </div>
    <div class="bankAccount-or-card__button">
      <div class="bankAccount-or-card__excerpt" @click="goToExcerpt">
        <span>Выписка</span>
        <svg
          width="38" height="38"
          viewBox="0 0 38 38" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.952 35.094C5.82031 36.6809 2.12474 34.7029 2.1673 31.4627L2.49544 6.47833C2.53963 3.11435 6.55007 0.929276 9.64239 2.58435L33.4616 15.3329C36.5539 16.988 36.3506 21.2107 33.0993 22.8582L8.952 35.094Z"
            stroke-width="3"
          />
        </svg>
      </div>
      <div class="bankAccount-or-card__lock-out-wrapper">
        <div class="button bankAccount-or-card__lock-out">
          <span class="button bankAccount-or-card__lock-out-button">
            Заблокировать счёт
          </span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "bankAccountOrCard",
  components: {
    ItemBankAccountOrCard: () => import("@/components/ItemBankAccountOrCard.vue"),
    Footer: () => import("@/components/Footer.vue"),
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
.button {
  height: 62px;

  background: transparent;
  border: 0;
  user-select: none;
  margin: 0;
  padding: 0;
}

.bankAccount-or-card {
  height: 100%;

  color: $color-light;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 43px;

  &__item  {
    margin: 140px 0 0;
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
    font-family: Play;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;

    max-width: 929px;

    flex-grow: 2;

    margin-top: 50px;

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

  &__button {
    margin-bottom: 150px;

    color: $color-light;
    text-align: left;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.09em;
  }

  &__excerpt {
    width: 1177.27px;

    background: transparent;
    margin-bottom: 50px;
    stroke: $color-light;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      cursor: pointer;
      stroke: $color-accent;
      color: $color-accent;
    }
  }

  &__lock-out {
    width: calc((100vw - 1440px) / 2 + 654px);

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    @include color-opacity(background, $color-block-light, 0.2);
    margin-left: -42px;

    &-wrapper {
      position: relative;
    }

    &-button {
      width: calc((100vw - 1440px) / 2 + 654px);

      display: flex;
      align-items: center;

      padding-left: calc((100vw - 1440px) / 2 + 42px);
    }

    &:hover {
      @include color-opacity(background, $color-block-light, 0.4);
    }
  }
}
</style>
