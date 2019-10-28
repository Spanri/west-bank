<template>
  <form 
    class="input-block-wrapper" 
    @submit.prevent="submit"
    autocomplete="off"
  >
    <div
      class="input-block"
      v-for="(block, index) in blocks" :key="index"
    >
      <p
        class="input-block__title"
        :class="
          block.model == 'passwordRepeat' ? 'input-block__title-password' : ''
        "
        v-html="block.title"
      />
      <input
        class="input-block__input"
        :class="{
          'input-error': $v[block.model].$invalid && $v[block.model].$dirty,
          'input-success': !$v[block.model].$invalid}"
        v-model="$v[block.model].$model"
        :type="block.type ? block.type : 'text'"
      />
      <div
        class="error"
        v-if="$v[block.model].$invalid && $v[block.model].$dirty"
      >
        {{ block.error }}
      </div>
      <p v-if="block.model == 'password'" class="input-block__description">
        Пароль должен содержать не менее 8 символов, должны присутствовать 
        строчные и заглавные буквы, должен присутствовать один из символов 
        !»№;%:?*?(), должны присутствовать цифры, не должны присутствовать 
        повторяющиеся символы в нижнем и верхнем регистре.
      </p>
      <p 
        v-if="block.model == 'password'"
        class="input-block__show-password"
        :class="$v[block.model].$invalid && $v[block.model].$dirty ? 
          'input-block__show-password_error' : ''"
        @click="block.type == 'password' ? 
          block.type='text' : block.type='password'"
      >
        {{block.type == 'password' ? 'показать' : 'скрыть'}}
      </p>
    </div>
    <div class="input-block__submit">
      <button type="submit" class="input-block__submit-inner">
        Зарегистрироваться
      </button>
    </div>
    <br />
  </form>
</template>

<script>
import { required, minLength, sameAs, } from 'vuelidate/lib/validators';

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
          type: "password",
          error: "Пароль не соответствует правилам.",
        },
        {
          title: "Повторите<br>пароль *",
          model: "passwordRepeat",
          type: "password",
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
      required,
      minLength: minLength(4),
    },
    password: {
      required,
      goodPassword:(password) => {
        return password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!»№;%:?*?()]/.test(password);
      },
    },
    passwordRepeat: {
      required,
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("register").then(() => {
          this.$emit("next");
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input-block {

  &-wrapper {
    @include error;
    @include input;
  }

  &__description {
    margin: 41px 0 -30px 270px;

    color: $color-pre-medium;
    font: 18px/21px Play, sans-serif;
    letter-spacing: .08em;
    text-align: left;
  }

  &__show-password {
    position: relative;
    top: -175px;
    right: -740px;

    color: $color-other;

    user-select: none;

    &:hover {
      color: $color-accent;
      cursor: pointer;
    }

  }

}

@media (max-width: 1250px) {

  .input-block__description {
    margin-left: 210px;
  }

  .input-block__show-password {
    top: -195px;
    right: -620px;
  }

}

@media (max-width: 850px) {

  .input-block__description {
    margin-left: 150px;
    margin-top: 60px;
  }

  .input-block__show-password {
    top: -280px;
    right: -465px;
  }

}

</style>