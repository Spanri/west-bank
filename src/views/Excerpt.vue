<template>
  <div class="excerpt">
    <div class="excerpt__content">
      <ExcerptFilter
        class="excerpt__filter"
        @filter="filter"
      />
    </div>
    <div class="excerpt__doc-and-footer">
      <div class="excerpt__document-wrapper">
        <div class="excerpt__document">
          <div class="excerpt__document-button">
            <img src="../assets/excerpt-document.svg">
            <span>Документ</span>
          </div>
        </div>
      </div>
      <Footer class="excerpt__footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {
    ExcerptFilter: () => import("@/components/ExcerptFilter.vue"),
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
  methods: {
    filter(data) {
      console.log('Данные поменялись', data);
    },
  },
};
</script>

<style scoped lang="scss">
.excerpt {
  height: 100%;
  min-height: calc(100vh - 180px);

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
    width: calc((100vw - 1440px) / 2 + 654px);
    height: 62px;

    display: flex;
    align-items: center;

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    margin-left: 0px;
    @include color-opacity(background, $color-block-light, 0.2);

    color: $color-light;
    vertical-align: middle;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.09em;

    &-wrapper {
      position: relative;

      height: 62px;
      margin-bottom: 58px;
    }

    &-button {
      width: calc((100vw - 1440px) / 2 + 654px);

      padding-left: calc((100vw - 1440px) / 2);
      text-align: left;

      & > * + * {
        padding-left: 34px;
      }
    }

    &:hover {
      cursor: pointer;
      @include color-opacity(background, $color-block-light, 0.4);
    }
  }
}

@media (max-width: 1440px) {
  .excerpt__document {
    width: 1166px;

    left: 0;
  }
}
</style>
