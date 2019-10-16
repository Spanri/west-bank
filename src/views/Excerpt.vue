<template>
  <div class="excerpt">
    <div class="excerpt__content">
      <ExcerptFilter class="excerpt__filter" @filter="filter"/>
      <ExcerptTable class="excerpt__table"/>
    </div>
    <div class="excerpt__doc-and-footer">
      <div 
      class="excerpt__document-wrapper">
        <div class="excerpt__document">
          <div class="excerpt__document-button">
            <Document
              class="excerpt__document-button-img"
              :color1="logoColor1" :color2="logoColor2"
            />
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
  name: "Excerpt",
  components: {
    Document: () => import("@/icons/Document.vue"),
    ExcerptFilter: () => import("@/components/Excerpt/ExcerptFilter.vue"),
    ExcerptTable: () => import("@/components/Excerpt/ExcerptTable.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  data() {
    return {
      logoColor1: '#3D4168',
      logoColor2: '#F2F2F2',
      items: [],
      dateStart: null,
      dateEnd: null,
    };
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
    margin-bottom: 48px;
  }

  &__document {
    width: calc((100vw - 1440px) / 2 + 654px);
    height: 62px;

    display: flex;
    align-items: center;

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    user-select: none;
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
      margin-top: 150px;
    }

    &-button {
      width: calc((100vw - 1440px) / 2 + 654px);

      padding-left: calc((100vw - 1440px) / 2);
      text-align: left;

      & > * + * {
        padding-left: 34px;
      }

      &-img {
        margin-left: 43px;
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
