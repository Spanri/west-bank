<template>
  <div class="ad">
    <div class="ad__block">
      Реклама
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ad',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ad {
  width: 1166px;
  height: 263px;
  background: #2D9CDB;
  margin-bottom: 89px;

  &__block {
    position: absolute;
    right: 550px;
    background: white;
    height: 100%;
    width: calc((100vw - 1440px)/2 + 616px);
    // margin-right: 550px;
    color: black;
  }
}

@media (max-width: 1440px) {
  .ad__block {
    width: 616px;
  }
}
</style>
