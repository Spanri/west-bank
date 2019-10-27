<template>
  <div class="about">
    <p class="about__text">О банке</p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
.about {
  margin: 100px auto auto;

  &__text {
    color: $color-light;
    font: $font-header;

    margin: $margin-header;
  }
}
</style>