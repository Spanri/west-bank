<template>
  <div class="signup3 success">
    <div class="success__content">
      <Logo class="success__logo" size="401" />
      <p class="success__text">
        Добро пожаловать!
      </p>
      <router-link class="success__link" to="/news">
        Перейти в онлайн-банк
      </router-link>
    </div>
    <Block class="success__block" />
  </div>
</template>

<script>
export default {
  name: "SignUp3",
  
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Block: () => import("@/components/Block.vue"),
  },
};
</script>

<style scoped lang="scss">
.signup3 {
  @include success;  
}
</style>
