<template>
  <div class="not-found">
    <p class="not-found__text">Страница не найдена.</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
.not-found {
  margin: 100px auto auto;

  &__text {
    color: $color-light;
    font: 18px Play;

    margin: 0;
  }
}
</style>