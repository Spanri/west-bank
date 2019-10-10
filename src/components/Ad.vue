<template>
  <div class="ad">
    <div
      class="ad__block" 
      :style="{'width': lengthAdBlock}"
    >
      Реклама
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  props: {
    lengthAdBlock: {
      type: String,
      default: '100%',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ad {
  width: 1166px;
  height: 263px;
  width: calc((100vw - 1440px)/2 + 1166px);

  position: absolute;
  top: 267px;
  left: calc((100vw - 1440px)/2 * (-1));
  
  background: $color-main;
  margin-bottom: 89px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__block {
    height: 100%;
    width: calc((100vw - 1440px)/2 + 577px);
  
    position: absolute;
    right: 590px;

    background: white;
    color: black;
  }
}

@media (max-width: 1440px) {
  .ad__block {
    width: 577px;
  }
}
</style>
