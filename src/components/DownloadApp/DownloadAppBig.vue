<template>
  <div class="download-app">
    <div class="download-app__content">
      <img 
        src="@/assets/logoBig.png" alt="Логотип"
        class="download-app__logo"
      >
      <!-- <Logo class="download-app__logo" size="305" /> -->
      <p class="download-app__text">
        Для совершения быстрых операций скачайте приложение
        <span class="download-app__text download-app__text_title">
          ВЕСТ
        </span>
      </p>
      <button class="download-app__button">Скачать</button>
      <img 
        src="@/assets/mobileApps.png"
        class="download-app__mobile-apps"
        alt="Скачать мобильное приложение"
      >
    </div>
    <Block class="download-app__block" />
  </div>
</template>

<script>
export default {
  name: "DownloadApp",
  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Block: () => import("@/components/Block.vue"),
  },
};
</script>

<style scoped lang="scss">
.download-app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content {
    margin: 57px auto 80px;
    background: transparent;
    box-shadow: none;

    max-width: 406px;
  }

  &__text {
    color: $color-light;
    font: 24px/37px Play;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    margin-bottom: 36px;

    &_title {
      color: $color-accent;
      font-weight: bold;
    }
  }

  &__logo {
    margin: 178px 0 36px;
  }

  &__button {
    display: block;
    margin: 0 auto;
    border: 0;
    background: transparent;

    color: $color-accent;
    font: 18px/153.2% Play;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    margin-bottom: 26px;

    &:hover {
      color: $color-light;
    }
  }

  &__mobile-apps {
    width: 120px;
  }

  &__block {
    margin-bottom: 111px;
    margin-top: 28px;
  }
}
</style>