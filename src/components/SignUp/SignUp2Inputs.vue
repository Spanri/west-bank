<template>
  <form class="input-block-wrapper" @submit.prevent="submit">
    <div
      class="input-block"
      v-for="(block, index) in blocks" :key="index"
    >
      <span
        class="input-block__title"
        :class="
          block.model == 'passwordRepeat' ? 'input-block__title-password' : ''
        "
        v-html="block.title"
      />
      <b-form-input
        class="input-block__input"
        :type="
          block.model == 'password' || block.model == 'passwordRepeat'
            ? 'password'
            : 'text'
        "
        v-model="$v[block.model].$model"
        :state="$v[block.model].$dirty ? !$v[block.model].$error : null"
        :aria-describedby="`input-block__invalid-feedback-${block.model}`"
      />
      <b-form-invalid-feedback
        :id="`input-block__invalid-feedback-${block.model}`"
      >
        {{ block.error }}
      </b-form-invalid-feedback>
      <p v-if="block.model == 'password'" class="input-block__description">
        Пароль должен содержать не менее 8 символов, должны присутствовать 
        строчные и заглавные буквы, должен присутствовать один из символов 
        !»№;%:?*?(), должны присутствовать цифры, не должны присутствовать 
        повторяющиеся символы в нижнем и верхнем регистре.
      </p>
      <p v-if="block.model == 'password'" class="input-block__edit">
        изменить
      </p>
    </div>
    <button type="submit" class="button input-block__submit">
      Зарегистрироваться
    </button>
    <br />
  </form>
</template>

<script>
// import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: "SignUp2Inputs",
  data() {
    return {
      blocks: [
        {
          title: "Логин *",
          model: "login",
          error: "Обязательное поле, минимум 4 символа.",
        },
        {
          title: "Пароль *",
          model: "password",
          error: "Пароль не соответствует правилам.",
        },
        {
          title: "Повторите<br>пароль *",
          model: "passwordRepeat",
          error: "Пароли должны совпадать.",
        },
      ],
      login: "",
      password: "",
      passwordRepeat: "",
    };
  },
  validations: {
    login: {
      // required,
      // minLength: minLength(4)
    },
    password: {
      // required,
      // goodPassword:(password) => {
      // 	return password.length >= 8 &&
      // 	/[a-z]/.test(password) &&
      // 	/[A-Z]/.test(password) &&
      // 	/[0-9]/.test(password) &&
      // 	/[!»№;%:?*?()]/.test(password)
      // }
    },
    passwordRepeat: {
      // required,
      // sameAsPassword: sameAs('password')
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("register").then(() => {
          this.$emit("next", "SignUp3");
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input-block {
  &-wrapper {
    @include input;
  }

  &__submit {
    background: transparent;
    border: 0;
    margin-left: 155px;
    margin-top: 90px;
    margin-bottom: 80px;

    color: $color-main;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 144.2%;
    text-align: center;

    &:hover {
      color: darken($color: $color-main, $amount: 20);

      fill: darken($color: $color-light, $amount: 40);
      transition: 0.1s all ease-in-out;
    }
  }
}
</style>