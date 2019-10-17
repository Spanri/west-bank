<template>
  <div class="login">
    <div class="login-inner">
      <p class="login__title">Вход</p>
      <div class="login__input input-block-wrapper">
        <div
          class="input-block"
          v-for="(block, index) in blocks" :key="index"
        >
          <span class="input-block__title">{{ block.title }}</span>
          <input
            class="input-block__input"
            :v-model="block.model" :required="block.required"
            :type="block.type"
          />
        </div>
      </div>
      <button class="button login__button" @click="loginMethod">
        Войти
      </button>
    </div>
    <Ad />
    <Footer class="login__footer" />
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    Ad: () => import("@/components/Ad.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  data() {
    return {
      blocks: [
        { title: "Логин *", model: "login", },
        { title: "Пароль *", model: "password", type: "password", },
      ],
      login: "",
      password: "",
    };
  },
  methods: {
    loginMethod() {
      this.$store.dispatch("login").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  @include input;

  min-height: calc(100vh - 172px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: $color-light;

  .input-block + .input-block{
    margin-top: 25px;
  }

  .input-block {
    &__title {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.08em;
    }
  }

  &__title {
    margin: 20px 0 82px 170px;

    color: white;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  &__button {
    background: transparent;
    border: 0;
    margin: 282px 0 155px 170px;

    color: $color-accent;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    &:hover {
      color: darken($color: $color-accent, $amount: 20);
    }
  }

  &__footer {
    justify-self: flex-end;
  }
}
</style>
