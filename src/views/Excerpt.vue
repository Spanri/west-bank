<template>
  <div class="excerpt">
    <div class="excerpt__content">
      <div class="excerpt__filter">
        <div>Выписка за период</div>
        <div />
        <span>с</span>
        <input
class="excerpt__input"
type="date"
v-model="dateStart" />
        <span>по</span>
        <input
class="excerpt__input"
type="date"
v-model="dateEnd" />
      </div>
    </div>
    <div class="excerpt__doc-and-footer">
      <button class="excerpt__document">
        <svg
          width="32"
          height="47"
          viewBox="0 0 32 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.84 45.5801C1.99537 45.5801 0.5 44.0847 0.5 42.2401L0.5 3.84008C0.5 1.99545 1.99537 0.500076 3.84 0.500076H28.16C30.0046 0.500076 31.5 1.99545 31.5 3.84008L31.5 42.2401C31.5 44.0847 30.0046 45.5801 28.16 45.5801H3.84Z"
            fill="#13181C"
            stroke="#F2F2F2"
          />
          <path
            d="M0.78 3.84008L0.78 42.2401C0.78 43.9301 2.15001 45.3001 3.84 45.3001H28.16C29.85 45.3001 31.22 43.9301 31.22 42.2401L31.22 3.84008C31.22 2.15009 29.85 0.780075 28.16 0.780075H3.84C2.15001 0.780075 0.78 2.15009 0.78 3.84008ZM3.84 45.5801C1.99537 45.5801 0.5 44.0847 0.5 42.2401L0.5 3.84008C0.5 1.99544 1.99537 0.500076 3.84 0.500076H28.16C30.0046 0.500076 31.5 1.99545 31.5 3.84008L31.5 42.2401C31.5 44.0847 30.0046 45.5801 28.16 45.5801H3.84Z"
            fill="#13181C"
            stroke="#F2F2F2"
          />
          <line
            x1="3.83887"
            y1="9.98999"
            x2="28.1589"
            y2="9.98999"
            stroke="#F2F2F2"
            stroke-width="0.5"
          />
          <line
            x1="3.83887"
            y1="15.1101"
            x2="28.1589"
            y2="15.1101"
            stroke="#F2F2F2"
            stroke-width="0.5"
          />
          <line
            x1="3.83887"
            y1="20.23"
            x2="28.1589"
            y2="20.23"
            stroke="#F2F2F2"
            stroke-width="0.5"
          />
          <path
            d="M4.91699 26.2529H7.63059C8.01459 26.2529 8.32179 26.2615 8.55219 26.2785C8.79113 26.2956 9.04286 26.334 9.30739 26.3937C9.58046 26.4535 9.79806 26.5431 9.96019 26.6625C10.1309 26.782 10.2759 26.9441 10.3954 27.1489C10.5063 27.3452 10.5618 27.5927 10.5618 27.8913V29.6193C10.5618 30.3105 10.293 30.8097 9.75539 31.1169C9.22633 31.4156 8.44126 31.5649 7.40019 31.5649H6.15859V34.5601H4.91699V26.2529ZM7.56659 30.7841C8.10419 30.7841 8.53513 30.686 8.85939 30.4897C9.18366 30.2935 9.34579 29.982 9.34579 29.5553V28.0449C9.34579 27.8145 9.28606 27.6268 9.16659 27.4817C9.04713 27.3281 8.87646 27.2215 8.65459 27.1617C8.44126 27.1105 8.26206 27.0764 8.11699 27.0593C7.97193 27.0423 7.77993 27.0337 7.54099 27.0337H6.14579V30.7841H7.56659Z"
            fill="#F2F2F2"
          />
          <path
            d="M12.217 26.2529H15.5194C17.849 26.2529 19.0138 27.0465 19.0138 28.6337V32.3073C19.0138 33.8092 17.8533 34.5601 15.5322 34.5601H12.217V26.2529ZM15.4426 33.7153C17.0298 33.7153 17.8234 33.2375 17.8234 32.2817V28.6209C17.8234 28.3137 17.7594 28.0535 17.6314 27.8401C17.5034 27.6268 17.3242 27.4689 17.0938 27.3665C16.8634 27.2727 16.6245 27.2087 16.377 27.1745C16.1295 27.1319 15.8394 27.1105 15.5066 27.1105H13.4586V33.7153H15.4426Z"
            fill="#F2F2F2"
          />
          <path
            d="M20.9045 26.2529H26.6133V27.1233H22.1461V29.8369H26.1909V30.7073H22.1461V34.5601H20.9045V26.2529Z"
            fill="#F2F2F2"
          />
        </svg>
        <span>Документ</span>
      </button>
      <Footer class="excerpt__footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {
    Footer: () => import("@/components/Footer.vue"),
  },
  data() {
    return {
      items: [],
      dateStart: null,
      dateEnd: null,
    };
  },
  filters: {
    excerptFilter(value) {
      if (!value) return this.items;
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.excerpt {
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content {
    margin-left: 43px;
  }

  &__filter {
    color: $color-light;
    text-align: left;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.09em;

    *:nth-child(1) {
      height: 60px;

      margin-top: 87px;
    }
  }

  &__input {
    width: 281px;
    height: 37px;

    background: $color-medium;
    border: 0;
    border-radius: 10px;
    margin: 0 42px;
    padding: 0 auto;

    // display: flex;
    align-items: center;
    flex-direction: row;

    color: $color-light;
    vertical-align: middle;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
  }

  &__document {
    border: 0;
    width: calc((100vw - 1440px) / 2 + 1166px);

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    padding-left: 43px;
  }
}

@media (max-width: 1440px) {
  .excerpt__document {
    width: 1166px;

    left: 0;
  }
}
</style>
