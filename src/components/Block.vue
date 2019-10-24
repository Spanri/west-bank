<template>
  <div class="block-wrapper">
    <div class="block">
      <div class="block-inner">
        <div class="block__content">
          Реклама
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block",
};
</script>

 
<style scoped lang="scss">
.block {
  height: 263px;

  &-wrapper {
    position: relative;
  }

  &-inner {
    background: $color-block-dark;
    background: 
      linear-gradient(90deg, #15172D -80.71%, rgba(61, 65, 104, 0) 100%),
      $color-block-dark;
    
    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    height: 263px;
    width: calc((100vw - 1440px) / 2 + 1166px);
  }

  &__content {
    border: 1px $color-pre-medium solid;

    height: 263px;

    margin-left: calc((100vw - 1440px) / 2);

    color: $color-pre-medium;
  }
  
}

@media (min-width: 1440px) {

  .block-inner {
    background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      $color-block-dark;
  }
  
}

@media (max-width: 1440px) {

  .block-inner {
    left: 0;
    width: 1166px; 
  }

  .block__content {
    margin-left: 0;
  }

}

@media (max-width: 1166px) {

  .block-inner {
    left: 0;
    width: 100%; 
  }

  .block__content {
    margin-left: 0;
  }

}
</style>
