<template>
  <div class="news-ad-wrapper">
    <div class="news-ad">
      <div class="news-ad__first"></div>
      <div class="news-ad__second"></div>
      <Ad class="news-ad__ad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsAd",
  components: {
    Ad: () => import("@/components/Ad.vue"),
  },
};
</script>

<style scoped lang="scss">
.news-ad {
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

  &__ad {
    position: absolute;
    top: 275px;
  }

}

@media (min-width: 1440px) {

  .news-ad {
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

  .news-ad {
    &__first {
      left: 0;
      width: 720px;
    }

    &__second {
      left: 0;
      width: 908px;
    }

    &__ad {
      left: 0;
      width: 1166px;
    }

  }
  
}
</style>