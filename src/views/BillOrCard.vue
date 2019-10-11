<template>
  <div class="bill-or-card">
    <div class="bill-or-card__item item ">
      <div class="item__without-currency">
        <svg
          class="item__number-svg"
          width="112"
          height="73"
          viewBox="0 0 112 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z"
            stroke="#2094E8"
            stroke-width="2"
          />
          <path
            d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z"
            stroke="url(#paint0_linear)"
            stroke-opacity="0.65"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="17.7561"
              y1="-8.73788"
              x2="64.0132"
              y2="68.1811"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.0208333"
                stop-color="white"
                stop-opacity="0.4" />
              <stop
                offset="0.494792"
                stop-color="white"
                stop-opacity="0.78" />
              <stop
                offset="1"
                stop-color="white"
                stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span class="item__number">
          <svg
            class="item__number-svg"
            width="44"
            height="31"
            viewBox="0 0 44 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="37.7731"
              cy="6.9235"
              r="6.10123"
              fill="#F2F2F2" />
            <circle
              cx="22.0841"
              cy="6.9235"
              r="6.10123"
              fill="#F2F2F2" />
            <circle
              cx="6.39518"
              cy="6.9235"
              r="6.10123"
              fill="#F2F2F2" />
            <rect
              y="1"
              width="44"
              height="30"
              fill="none" />
          </svg>
          {{ item.number }}
        </span>
        <span class="item__money">
          {{ item.money }}
        </span>
      </div>
      <span class="item__currency">
        {{
          item.currency == 0
            ? "₽"
            : item.currency == 1
            ? "долларов"
            : item.currency == 2
            ? "евро"
            : "че"
        }}
      </span>
    </div>
    <div class="bill-or-card__info">
      <p class="bill-or-card__info-item">
        <span class="bill-or-card__info-title">
          Статус:
        </span>
        <span class="bill-or-card__info-data">
          {{ item.status }}
        </span>
      </p>
      <p class="bill-or-card__info-item">
        <span class="bill-or-card__info-title">
          Вид:
        </span>
        <span class="bill-or-card__info-data">
          {{ item.type }}
        </span>
      </p>
      <p class="bill-or-card__info-item">
        <span class="bill-or-card__info-title">
          Ограничения:
        </span>
        <span class="bill-or-card__info-data">
          {{ item.constraints }}
        </span>
      </p>
    </div>
    <div class="bill-or-card__button">
      <div class="bill-or-card__excerpt">
        <span>Выписка</span>
        <button
          @click="goToExcerpt"
          class="button bill-or-card__excerpt-button"
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.952 35.094C5.82031 36.6809 2.12474 34.7029 2.1673 31.4627L2.49544 6.47833C2.53963 3.11435 6.55007 0.929276 9.64239 2.58435L33.4616 15.3329C36.5539 16.988 36.3506 21.2107 33.0993 22.8582L8.952 35.094Z"
              stroke-width="3"
            />
          </svg>
        </button>
      </div>
      <button class="button bill-or-card__lock-out">
        Заблокировать счёт
      </button>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "BillOrCard",
  components: {
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
        constraints: "",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  height: 62px;

  background: transparent;
  border: 0;
  user-select: none;
  margin: 0;
  padding: 0;
}

.bill-or-card {
  height: 100%;

  color: $color-light;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 43px;

  &__info {
    font-family: Play;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;

    flex-grow: 2;

    &-item {
      min-height: 80px;

      margin-top: 10px;

      &:nth-child(1) {
        margin-top: 50px;
      }

      &:nth-child(3) {
        min-height: 172px;
      }
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

    * {
      color: $color-light;
      text-align: left;
      font-family: Play;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;
      letter-spacing: 0.09em;
    }
  }

  &__excerpt {
    width: 1177.27px;

    background: transparent;
    margin-bottom: 50px;
    stroke: $color-light;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &-button {
      &:hover {
        stroke: $color-medium;
      }
    }
  }

  &__lock-out {
    width: 1122px;

    background: $color-dark;

    &:hover {
      @include color-dark(background, 5);
    }
  }
}

.item {
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  display: flex;
  justify-content: space-between;

  width: min-content;

  padding: 19px;
  margin: 140px -19px 0;

  &-without-currency {
    width: 878px;

    display: flex;
    justify-content: space-between;
  }

  &__number {
    flex-grow: 2;
    align-self: center;

    margin-left: 24.29px;

    &-svg {
      // margin-top: -5px;
      vertical-align: inherit;
    }
  }

  &__currency {
    margin-left: 26px;
  }
}
</style>
