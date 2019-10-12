<template>
  <div class="news-ad-wrapper">
    <div class="news-ad">
      <div class="news-ad__first"></div>
      <div class="news-ad__second"></div>
      <Ad class="news-ad__ad" />
      <img
        src="../assets/card.svg"
        alt="Банковская карта"
        width="384"
        height="220"
        class="news-ad__card"
      />
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
    top: 65px;
    left: calc((100vw - 1440px) / 2 * (-1));

    width: calc((100vw - 1440px) / 2 + 720px);
    height: 220px;

    @include color-main(background, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__second {
    position: absolute;
    top: 150px;
    left: calc((100vw - 1440px) / 2 * (-1));

    width: calc((100vw - 1440px) / 2 + 908px);
    height: 257px;

    @include color-main(background, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__card {
    position: absolute;
    top: 289px;
    left: 650px;

    margin-bottom: -220px;
    transform: rotate(-15deg);
    box-shadow: 3px 6px 4px rgba(0, 0, 0, 0.3),
      inset -2px -4px 0px rgba(0, 0, 0, 0.25);
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