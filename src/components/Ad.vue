<template>
  <div class="ad-wrapper">
    <div class="ad">
      <div class="ad-inner">
        <div class="ad__content">
          Реклама
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ad",
};
</script>

 
<style scoped lang="scss">
.ad {
  height: 263px;

  &-wrapper {
    position: relative;
  }

  &-inner {
    background: $color-block-dark;
    
    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    width: calc((100vw - 1440px) / 2 + 1166px);
    height: 263px;
  }

  &__content {
    border: 1px $color-pre-medium solid;

    height: 263px;

    margin-left: calc((100vw - 1440px) / 2);

    color: $color-pre-medium;
  }
}

@media (max-width: 1440px) {
  .ad-inner {
    width: 1166px;

    left: 0;
  }

  .ad__content {
    margin-left: 0;
  }
}
</style>
