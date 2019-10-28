<template>
  <div class="excerpt">
    <div class="excerpt__content">
      <ExcerptFilter class="excerpt__filter" @filter="filter"/>
      <ExcerptTable class="excerpt__table"/>
    </div>
    <div class="excerpt__document-wrapper">
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
  </div>
</template>

<script>
export default {
  name: "Excerpt",
  components: {
    Document: () => import("@/icons/Document.vue"),
    ExcerptFilter: () => import("@/components/Excerpt/ExcerptFilter.vue"),
    ExcerptTable: () => import("@/components/Excerpt/ExcerptTable.vue"),
  },
  data() {
    return {
      logoColor1: '#3D4168',
      logoColor2: '#F2F2F2',
      items: [],
      date: {
        start: null,
        end: null,
      },
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // &__content {
  //   margin-left: 43px;
  // }

  &__filter {
    margin: 41px 0 163px 187px;
  }

  &__document {
    height: 62px;
    width: calc((100vw - 1440px) / 2 + 654px);

    display: flex;
    align-items: center;

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    @include color-opacity(background, $color-block-light, .2);
    background: 
      linear-gradient(90deg, #15172D -50.71%, rgba(61, 65, 104, 0) 90%),
      rgba(red($color-block-light), 
        green($color-block-light), 
        blue($color-block-light),
        .2); 
    
    margin-left: 0px;
    user-select: none;
    
    color: $color-light;
    font: 24px/28px Play, sans-serif;
    letter-spacing: .09em;
    vertical-align: middle;

    &-wrapper {
      position: relative;

      height: 62px;
      margin: 150px 0 58px 0;
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
      background: $color-accent;
      background: 
        linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
        $color-accent; 
      cursor: pointer;
      transition: ease-in-out all .15s;
    }

  }

}

@media (min-width: 1440px) {

  .excerpt__document {
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

  .excerpt__document {
    left: 0;
    width: 654px;
  }
  
}

@media (max-width: 1440px) {

  .excerpt__document {
    left: 0;
    width: 654px;
  }
  
}
</style>
