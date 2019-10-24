<template>
  <div class="news-block-wrapper">
    <div class="news-block">
      <div class="news-block__first"></div>
      <div class="news-block__second"></div>
      <Block class="news-block__block"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlock",
  components: {
    Block: () => import("@/components/Block.vue"),
  },
};
</script>

<style scoped lang="scss">
.news-block {
  height: 603px;

  &-wrapper {
    position: relative;
  }

  &__first {
    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));
    top: 65px; 

    height: 220px;
    width: calc((100vw - 1440px) / 2 + 720px);

    @include color-opacity(background, $color-block-light, .5);
    background: 
      linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
      rgba(red($color-block-light), 
        green($color-block-light), 
        blue($color-block-light),
        .5); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__second {
    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));
    top: 150px;

    height: 257px;
    width: calc((100vw - 1440px) / 2 + 908px);

    @include color-opacity(background, $color-block-medium, .8);
    background: 
      linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
      rgba(red($color-block-medium), 
        green($color-block-medium), 
        blue($color-block-medium),
        .8); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__block {
    position: absolute;
    top: 275px;
  }

}

@media (min-width: 1440px) {

  .news-block {
    &__first {
      background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      rgba(red($color-block-light), 
        green($color-block-light), 
        blue($color-block-light),
        .5);
    }

    &__second {
      background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      rgba(red($color-block-medium), 
        green($color-block-medium), 
        blue($color-block-medium),
        .8); 
    }

  }

}

@media (max-width: 1440px) {

  .news-block {
    &__first {
      left: 0;
      width: 720px;
    }

    &__second {
      left: 0;
      width: 908px;
    }

    &__block {
      left: 0;
      width: 1166px;
    }

  }
  
}

@media (max-width: 1166px) {

  .news-block {
    &__first {
      width: 60%;
    }

    &__second {
      width: 80%;
    }

    &__block {
      width: 100%;
    }

  }
  
}

@media (max-width: 748px) {

  .news-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;

    margin: 22px 0 31px;

    &-wrapper {
      margin: 0 21px;
    }

    &__first, &__second, &__block {
      width: 100%;
      position: inherit !important;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    }

    &__first, &__second {
      height: 57px;
    }

    &__block {
      order: 1;
      z-index: 3;
      height: calc(100vw / 1.89);
    }

    &__first {
      order: 2;
      background: $color-block-medium;
      z-index: 2;
    }  

    &__second {
      order: 3;
      background: $color-block-light;
      z-index: 1;
    }

  }
  
}
</style>