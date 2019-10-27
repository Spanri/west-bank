<template>
  <div class="login">
    <form class="login__content" @submit.prevent="submit">
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
    submit() {
      this.$store.dispatch("login").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  @include error;
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

  &__block {
    margin-bottom: 96px;
  }
  
}

.input-block__submit {
  margin-bottom: 150px;
}
</style>
