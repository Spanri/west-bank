<template>
  <div class="signup1">
    <p class="signup1__title">Регистрация3</p>
    
    <button class="button signup1__button" @click="signUp1to2()">
      Далее 
      <svg class="signup1__button-svg" width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"/>
      </svg>
    </button>
    <br>
    <p class="signup1__login">
      Уже есть аккаунт?<br>
      <router-link to="login" class="button signup1__login-button">Войти</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SignUp3',
  data() {
    return {
      blocks: [
        {title: 'Фамилия *', model: 'lastName'},
        {title:'Имя *', model: 'firstName'},
        {title:'Отчество *', model: 'patronymic'},
        {title:'Телефон *', model: 'phone'},
        {title:'Email', model: 'email'},
      ],
      lastName: '',
      firstName: '',
      patronymic: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    signUp1to2() {
      this.$emit('next', 'SignUp2');
    }
  },
}
</script>

<style scoped lang="scss">
.button:hover, .button:hover .signup__button-svg {
  color: $color-main;
  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.signup1 {
  height: auto;
  
  color: $color-light;

  &__title {
    color: white;
    margin: 88px 0 111px 155px;

    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__button {
    background: transparent;
    color: white;
    border: 0;
    margin-left: 155px;
    margin-bottom: 80px;

    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 144.2%;
    text-align: center;

    &-svg {
      fill: $color-light;
    }
  }

  &__login {
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    text-align: center;

    margin-left: 155px;
    margin-bottom: 348px;

    &-button {
      font-size: 36px;
      line-height: 144.2%;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
