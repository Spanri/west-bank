<template>
  <div class="login">
    <form class="login__content" @submit.prevent="submit">
      <p class="login__title">Вход</p>
      <div class="login__input input-block-wrapper">
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
        </div>
      </div>
      <div class="input-block__submit">
        <button type="submit" class="input-block__submit-inner">
          Войти
        </button>
      </div>
    </form>
    <Block class="login__block"/>
  </div>
</template>

<script>
import { required, } from 'vuelidate/lib/validators';

export default {
  name: "Login",
  components: {
    Block: () => import("@/components/Block.vue"),
  },
  data() {
    return {
      blocks: [
        { 
          title: "Логин *", 
          model: "login",
          error: "Это поле обязательно.",
        },
        {
          title: "Пароль *", 
          model: "password", 
          type: "password", 
          error: "Это поле обязательно.",
        },
      ],
      login: "",
      password: "",
    };
  },
  validations: {
    login: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("login").then(() => {
          this.$router.push("/");
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  @include error;
  @include input;

  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  color: $color-light;
  font: $font-header;

  &__content {
    margin: 0 auto;
    max-width: 729px;
  }

  &__title {
    margin: $margin-header;
    // особый margin, с отступом слева
    margin-left: 245px;

    color: white;
    text-align: center;
  }

  &__block {
    margin-bottom: 96px;
  }
  
}

.input-block__submit {
  margin-bottom: 150px;
}

@media (max-width: 1250px) {

  

  .login {

    &__title {
      margin-left: 105px;
    }

    .input-block {

      &__submit {
        padding-left: 105px;
      }

    }

  }

}
</style>
