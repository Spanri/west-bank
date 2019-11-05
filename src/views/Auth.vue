<template>
  <div class="auth">
    <router-link class="auth__link" to="/login">
      <span class="auth__text">Вход </span>
      <svg
        class="auth__svg"
        width="27" height="16"
        viewBox="0 0 27 16" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
        />
      </svg>
    </router-link>
    <router-link class="auth__link" to="/signup">
      <span class="auth__text">Регистрация </span>
      <svg
        class="auth__svg"
        width="27" height="16"
        viewBox="0 0 27 16" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
import { mapActions, } from "vuex";

export default {
  name: "Auth",
  
  methods: {
    ...mapActions('auth', [ 'logout', ]),
  },

  created() {
    // сбросить login статус
    this.logout();
  },
};
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  &__svg {
    fill: $color-light;
  }

  &__link {
    color: $color-light;
    font: 26px/28px Play, sans-serif;
    text-decoration: none;
    text-align: left;

    margin: 80px auto 0;

    width: 200px;

    &:hover {
      color: $color-accent;
      fill: $color-accent;

      .auth__svg {
        fill: $color-accent;
      }

    }

  }

}
</style>
