<template>
  <div class="login">
    <p class="login__title">Войти</p>
    <div class="login__block">
      <span class="login__input-title">Логин *</span>
      <input class="login__input">
    </div>
    <div class="login__block">
      <span class="login__input-title">Пароль *</span>
      <input class="login__input">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Login from '@/components/Login.vue'

export default {
  name: 'login',
  // components: {
  //   Login
  // }
}
</script>

<style scoped lang="scss">
.login {

  height: auto;
  color: white;

  &__title {
    margin: 88px 0 111px 0;
  }

  &__block {
    width: 714px;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  
  &__input {
    background: #4F4F4F;
    width: 559px;
    height: 42px;
    border-radius: 10px;
    border: 0;
    padding: 5px 15px;

    &-title {
      align-items: flex-end;
    }
  }
}
</style>
