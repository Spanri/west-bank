<template>
  <div class="download-app">
    <div class="download-app__content">
      <p class="download-app__text">
        Для совершения быстрых операций скачайте приложение
        <br>
        <span class="download-app__text download-app__text_title">
          ВЕСТ
        </span>
      </p>
      <img 
        src="@/assets/logo.png" alt="Логотип"
        class="download-app__logo" width="153"
      >
      <button class="download-app__button" @click="download">
        Скачать
      </button>
      <img 
        src="@/assets/mobileApps.png"
        class="download-app__mobile-apps"
        alt="Скачать мобильное приложение"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadAppMobile",
  methods: {
    download() { },
  },
};
</script>

<style scoped lang="scss">
.download-app {

  &__content {
    height: 100%;
    margin: 27px 21px;
    background: $color-block-dark;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.45);
  }

  &__text {
    color: $color-light;
    font: 24px/37px Play, sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);

    padding: 35px 35px 0;

    &_title {
      color: $color-accent;
      font: 24px/153.2% Play, sans-serif;
      font-weight: bold;
    }

  }

  &__logo {
    margin: 0 0 34px;
  }

  &__button {
    display: block;
    margin: 0 auto;
    border: 0;
    background: transparent;

    color: $color-accent;
    font: 18px/153.2% Play, sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);

    &:hover {
      color: $color-light;
    }

  }

  &__mobile-apps {
    width: 120px;
    margin: 25px 0 48px;
  }

}
</style>