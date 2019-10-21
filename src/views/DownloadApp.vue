<template>
  <div class="download-app">
    <Back @click="$router.back()" class="download-app__back"/>
    <p class="download-app__text">
      Для совершения быстрых операций скачайте приложение
      <span class="download-app__text download-app__text_title">
        ВЕСТ
      </span>
    </p>
    <Logo 
      class="download-app__logo" 
      color1="white" color2="white"
    />
    <button class="download-app__button">Скачать</button>
  </div>
</template>

<script>
export default {
  name: "DownloadApp",
  components: {
    Back: () => import("@/icons/Back.vue"),
    Logo: () => import("@/icons/Logo.vue"),
  },
};
</script>

<style scoped lang="scss">
.download-app {
  height: 100%;
  margin: 57px 21px;
  position: relative;

  &__back {
    position: sticky;
    display: block;

    top: 0;
  }

  &__text {
    color: $color-light;
    font: 24px/37px Play;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);

    &_title {
      color: $color-accent;
      font-weight: bold;
    }
  }

  &__logo {
    margin: 38px 0 34px;
  }

  &__button {
    display: block;
    margin: 0 auto;
    border: 0;
    background: transparent;

    color: $color-accent;
    font: 18px/153.2% Play;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  }
}
</style>
