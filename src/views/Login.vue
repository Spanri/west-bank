<template>
  <div class="login">
    <div class="login__content">
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
    <Block class="login__block"/>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    Block: () => import("@/components/Block.vue"),
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: $color-light;
  font: $font-header;

  &__title {
    margin: $margin-header;
    // особый margin, с отступом слева
    margin-left: 155px;

    color: white;
    text-align: center;
  }

  &__button {
    background: transparent;
    border: 0;
    margin: 45px 0 155px 170px;

    color: $color-accent;
    font: 18px/144.2% Play;
    text-align: center;

    &:hover {
      color: darken($color: $color-accent, $amount: 20);
    }

  }

  &__block {
    margin-bottom: 96px;
  }
  
}
</style>
