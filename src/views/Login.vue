<template>
  <div class="login">
    <p class="login__title">Вход</p>
    <div class="login__input input-block-wrapper">
      <div
        class="input-block"
        v-for="(block, index) in blocks"
        :key="index"
      >
        <span class="input-block__title">{{ block.title }}</span>
        <input
          class="input-block__input"
          :v-model="block.model"
          :required="block.required"
          :type="block.type"
        />
      </div>
    </div>
    <button
      class="button login__button"
      @click="loginMethod"
    >
      Войти
    </button>
    <div class="login__ad">
      <Ad />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    Ad: () => import("@/components/Ad.vue"),
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
    margin: 282px 0 155px 142px;

    color: $color-main;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    &:hover {
      color: darken($color: $color-main, $amount: 20);
    }
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
