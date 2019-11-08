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
        Пароль должен содержать не менее 8 символов, должны присутствовать    строчные и заглавные буквы, должен присутствовать один из символов     <span class="special-symbols">!»№;%:?*?()</span>, должны присутствовать цифры, не должны присутствовать повторяющиеся символы в нижнем и верхнем регистре (последнее не сделала).
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
    <div class="input-block">
      <div class="error error-from-server" v-if="signupError">
        {{ signupError }}
      </div>
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
/**
 * TODO:
 * Уточнить, что нужно в проверке пароля и что значит последнее условие.
 */

import { required, minLength, sameAs, } from 'vuelidate/lib/validators';
import { mapGetters, mapActions, } from "vuex";

export default {
  name: "SignUp2Inputs",

  props: {
    dataOfPhase1: Object,
  },

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

  computed: {
    ...mapGetters('auth', [ 'signupError', ]),
  },
  
  methods: {
    ...mapActions('auth', [ 'signupPhase2', ]),

    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const {login, password, dataOfPhase1,} = this;
        this.signupPhase2({
          username: login,
          password: password,
          ...dataOfPhase1,
        }).then(() => {
          this.$emit("next");
        });
      }
    },
  },

  created() {
    console.log(this.dataOfPhase1);
  },
};
</script>

<style scoped lang="scss">
.special-symbols {
  background: $color-block-light;
}

.input-block {

  &-wrapper {
    @include error;
    @include input;
    @include input-submit;
  }

  &__description {
    margin: 41px 0 -30px;
    margin-left: calc(40% - 36px);

    color: $color-pre-medium;
    font: 18px/21px Play, sans-serif;
    letter-spacing: .08em;
    text-align: left;
  }

  &__show-password {
    position: relative;
    top: -175px;
    right: -102%;

    color: $color-other;

    user-select: none;

    &:hover {
      color: $color-accent;
      cursor: pointer;
    }

  }

}

.error-from-server {
  padding-bottom: 30px;
}

@media (max-width: 1250px) {

  .input-block__show-password {
    top: -210px;
  }

}

@media (max-width: 850px) {

  .input-block__description {
    margin-top: 60px;
  }

  .input-block__show-password {
    top: -275px;
  }

}

</style>