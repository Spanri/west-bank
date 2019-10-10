<template>
  <div class="home">
    <div class="home__welcome">
      <p>Добро пожаловать!</p>
    </div>
    <Ad />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Ad: () => import('@/components/Ad.vue'),
  },
};
</script>

<style scoped lang="scss">
.home {
  height: auto;
  color: white;

  &__welcome {
    height: 100%;
  }
}
</style>
