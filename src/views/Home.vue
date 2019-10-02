<template>
  <div class="home">
    <div class="home__welcome">
      <p>Добро пожаловать!</p>
    </div>
    <Ad />
  </div>
</template>

<script>
// @ is an alias to /src
import Ad from '@/components/Ad.vue'

export default {
  name: 'home',
  components: {
    Ad
  }
}
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
