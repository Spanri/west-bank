<template>
  <div class="home">
    <div class="bills">
      <p class="home__title">Счета</p>
      <div
        class="item bills__item"
        v-for="(item, index) in bills"
        :key="index"
        @click="goToBillorCard('bill', item)"
      >
        <div class="item-without-currency">
          <svg class="item__number-svg" width="112" height="73" viewBox="0 0 112 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z" stroke="#2094E8" stroke-width="2"/>
            <path d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z" stroke="url(#paint0_linear)" stroke-opacity="0.65" stroke-width="2"/>
            <defs>
            <linearGradient id="paint0_linear" x1="17.7561" y1="-8.73788" x2="64.0132" y2="68.1811" gradientUnits="userSpaceOnUse">
            <stop offset="0.0208333" stop-color="white" stop-opacity="0.4"/>
            <stop offset="0.494792" stop-color="white" stop-opacity="0.78"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
          </svg>
          <span class="item__number">
            <svg class="item__number-svg" width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37.7731" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
              <circle cx="22.0841" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
              <circle cx="6.39518" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
              <rect y="1" width="44" height="30" fill="none"/>
            </svg>
            {{ item.number }} 
          </span>
          <span class="item__money">
            {{ item.money }}
          </span>
        </div>
        <span class="item__currency">
          {{ 
            item.currency == 0 ? '₽' :
            item.currency == 1 ? 'долларов' :
            item.currency == 2 ? 'евро' :
            'че'
          }}
        </span>
      </div>
    </div>
    <div class="cards">
      <p class="home__title">Карты</p>
      <div
        class="item cards__item"
        v-for="(item, index) in cards"
        :key="index"
        @click="goToBillorCard('card', item)"
      >
        <div class="item-without-currency">
          <svg width="112" height="73" viewBox="0 0 112 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z" stroke="#2094E8" stroke-width="2"/>
            <path d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z" stroke="url(#paint0_linear)" stroke-opacity="0.65" stroke-width="2"/>
            <defs>
            <linearGradient id="paint0_linear" x1="17.7561" y1="-8.73788" x2="64.0132" y2="68.1811" gradientUnits="userSpaceOnUse">
            <stop offset="0.0208333" stop-color="white" stop-opacity="0.4"/>
            <stop offset="0.494792" stop-color="white" stop-opacity="0.78"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
          </svg>
          <span class="item__number">
            <svg class="item__number-svg" width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37.7731" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
              <circle cx="22.0841" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
              <circle cx="6.39518" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
              <rect y="1" width="44" height="30" fill="none"/>
            </svg>
            {{ item.number }} 
          </span>
          <span class="item__money">
            {{ item.money }}
          </span>
        </div>
        <span class="item__currency">
          {{ 
            item.currency == 0 ? '₽' :
            item.currency == 1 ? 'долларов' :
            item.currency == 2 ? 'евро' :
            'че'
          }}
        </span>
      </div>
    </div>
    <div class="home__buttons">
      <button 
        class="button home__open-bill" 
        @click="goToOpenBill"
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8571 1.85714C14.8571 0.831471 14.0257 0 13 0C11.9743 0 11.1429 0.831471 11.1429 1.85714V11.1429H1.85714C0.831471 11.1429 0 11.9743 0 13C0 14.0257 0.831471 14.8571 1.85714 14.8571H11.1429V24.1429C11.1429 25.1685 11.9743 26 13 26C14.0257 26 14.8571 25.1685 14.8571 24.1429V14.8571H24.1429C25.1685 14.8571 26 14.0257 26 13C26 11.9743 25.1685 11.1429 24.1429 11.1429H14.8571V1.85714Z" fill="#2D9CDB"/>
        </svg>
        <span class="home__button-text">
          Открытие счета
        </span>
      </button>
      <button 
        class="button home__mobile-network" 
        @click="goToMobileNetwork"
      >
        <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 38.6948L1 1.3052C1 1.14029 1.13526 1 1.31026 1H24.6897C24.8647 1 25 1.14029 25 1.3052L25 38.6948C25 38.8597 24.8647 39 24.6897 39H1.31026C1.13525 39 1 38.8597 1 38.6948Z" stroke="#2D9CDB" stroke-width="2"/>
        </svg>
        <span class="home__button-text">
          Мобильная связь
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bills: [
        { id: 0, number: '4560', money: '65.25', currency: 0, },
        { id: 1, number: '7654', money: '123.84', currency: 1, },
      ],
      cards: [
        { id: 0, number: '4560', money: '65.25', currency: 0, },
        { id: 1, number: '7654', money: '123.84', currency: 1, },
      ],
    };
  },
  methods: {
    goToBillorCard(type, item) {
      this.$router.push({
        name: type,
        params: { 
          id: item.id,
          itemParam: item,
        },
      });
    },
    goToOpenBill() {

    },
    goToMobileNetwork() {

    },
  },
};
</script>

<style scoped lang="scss">
.button {
  height: 61px;
  width: calc((100vw - 1440px)/2 + 654px);

  padding-left: calc((100vw - 1440px)/2 + 43px);
  background: $color-dark;
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
    @include color-dark(background, 5);
  }
}

.home {
  height: auto;

  position: relative;

  color: $color-light;
  text-align: left;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  &__title {
    &:nth-child(1) {
      margin-top: 64px;
      margin-bottom: 40px;
    }

    &:nth-child(2) {
      margin-top: 50px;
      margin-bottom: 45px;
    }
  }

  &__buttons {
    width: calc((100vw - 1440px)/2 + 654px);

    position: absolute;
    left: calc((100vw - 1440px)/2 * (-1));
    top: 720px;

    .button:nth-child(1) {
      margin-bottom: 50px;
    }
  }

  &__button-text {
    margin-left: 37px;
  }
}

.cards, .bills {
  margin-left: 43px;
}

.item {
  display: flex;
  justify-content: space-between;

  width: min-content;

  padding: 19px;
  margin: 0 -19px;

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

  &:hover {
    cursor: pointer;
    background: $color-dark;
  }
}

@media (max-width: 1440px) {
  .home__buttons {
    left: 0;
  }

	.button {
    padding-left: 43px;
    width: 654px;
	}
}
</style>
