<template>
  <form 
    class="signup1" 
    @submit.prevent="" 
    @submit="checkForm" 
    novalidate="true"
  >
    <p class="signup1__title">Регистрация</p>
    <Input :blocks="[
      {title: 'Фамилия *', model: 'lastName', required: true, type: 'text'},
      {title: 'Имя *', model: 'firstName', required: true, type: 'text'},
      {title: 'Отчество *', model: 'patronymic', required: true, type: 'text'},
      {title: 'Телефон *', model: 'phone', required: true, type: 'text'},
      {title: 'Email', model: 'email', required: false, type: 'email'},
    ]"/>
    <p v-if="errors.length">
      <b>Пожалуйста, исправьте указанные ошибки:</b>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </p>
    <button 
      class="button signup1__button"
      @click="checkForm()"
    >
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
  </form>
</template>

<script>
import { required, minLength, /*between*/ } from 'vuelidate/lib/validators'

export default {
  name: 'SignUp1',
  components: {
    Input: () => import('@/components/Input.vue')
  },
  data() {
    return {
      lastName: null,
      firstName: null,
      patronymic: null,
      phone: null,
      email: null,
      errors: [],
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(4)
    },
  },
  methods: {
    signUp1to2() {
      
    },
    checkForm: function (e) {
      let { lastName, firstName, patronymic, phone, /*email*/ } = this;
      if (lastName && firstName && patronymic && phone) {
        this.$emit('next', 'SignUp2');
        return true;
      }

      this.errors = [];

      if (!lastName) {
        this.errors.push('Требуется указать фамилию.');
      }
      if (!firstName) {
        this.errors.push('Требуется указать имя.');
      }
      if (!patronymic) {
        this.errors.push('Требуется указать отчество.');
      }
      if (!phone) {
        this.errors.push('Требуется указать телефон.');
      }
      // if(email && !this.validEmail(email)) {
      //   this.errors.push('Укажите корректный адрес электронной почты.');
      // }

      e.preventDefault();
    },
    // validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // }
  },
}
</script>

<style scoped lang="scss">
.button:hover, .button:hover .signup1__button-svg {
  color: $color-main;
  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.signup1 {
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
    margin-bottom: 78px;

    color: white;
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

    margin: 0;
    margin-left: 155px;
    margin-bottom: 348px;

    &-button {
      font-size: 36px;
      line-height: 154.2%;
      color: white;

      text-decoration: none;
    }
  }
}
</style>
