<template>
  <div
    class="item"
    @click="goToBillorCard(item.id)"
  >
    <div class="item-without-currency">
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
              stop-opacity="0.4"
            />
            <stop
              offset="0.494792"
              stop-color="white"
              stop-opacity="0.78"
            />
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
</template>

<script>
export default {
  name: "Home",
  props: {
    type: String,
    item: {
      id: 0, 
      number: "4560", 
      money: "65.25", 
      currency: 0,
    },
  },
  methods: {
    goToBillorCard(id) {
      this.$router.push({
        name: Boolean(this.type) == 0 ? 'bill' : 'card',
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
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
    width: 654px;

    padding-left: 43px;
  }
}
</style>
