<template>
  <div class="login">
    <p class="login__title">Войти</p>
    <Input :blocks="[
      {title: 'Логин *', model: 'login'},
      {title:'Пароль *', model: 'password'}
    ]"/>
    <button class="button login__button">Войти</button>
    <div class="login__ad">
      <Ad />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    Ad: () => import('@/components/Ad.vue'),
    Input: () => import('@/components/Input.vue'),
  },
  data() {
    return {
      login: '',
      password: '',
    }
  }
}
</script>

<style scoped lang="scss">
.button:hover {
  color: $color-light;
  transition: 0.1s all ease-in-out;
}

.login {
  height: auto;

  color: $color-light;

  &__title {
    margin: 88px 0 111px 155px;

    color: white;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__button {
    background: transparent;
    border: 0;
    margin-left: 155px;
    margin-bottom: 142px;

    color: $color-main;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
  }

  &__ad {
    height: calc(263px + 167px);

    .ad {
      top: auto;

      &__block {
        width: 100%;
      }
    }
  }
}
</style>
