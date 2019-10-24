<template>
  <div class="download-app">
    <Back 
      v-if="currentWidth < 768"
      @click="$router.back()" 
      class="download-app__back"
    />
    <div class="download-app__content">
      <p class="download-app__text">
        Для совершения быстрых операций скачайте приложение
        <br>
        <span class="download-app__text download-app__text_title">
          ВЕСТ
        </span>
      </p>
      <Logo 
        class="download-app__logo" 
        color1="white" color2="white"
        :size="currentWidth > 748 ? '271' : '143'"
      />
      <button class="download-app__button">Скачать</button>
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
  name: "DownloadApp",
  components: {
    Back: () => import("@/icons/Back.vue"),
    Logo: () => import("@/icons/Logo.vue"),
  },
  mounted() {
    window.addEventListener('resize', this.setCurrentWidth);
  },
  data() {
    return {
      currentWidth: window.innerWidth,
    };
  },
  methods: {
    setCurrentWidth(e) {
      this.currentWidth = e.currentTarget.innerWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setCurrentWidth);
  },
};
</script>

<style scoped lang="scss">
.download-app {
  min-height: 854px;

  &__back {
    position: sticky;
    display: block;

    top: 0px;

    //margin: 32px 10px 10px 22px;
    padding: 20px 30px;
    background: $color-background;
    z-index: 2;

    width: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  &__content {
    margin: 27px 21px;
    background: $color-block-dark;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.45);
  }

  &__text {
    color: $color-light;
    font: 24px/37px Play;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);

    padding: 35px;

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

    &:hover {
      color: $color-block-light;
    }
  }

  &__mobile-apps {
    width: 120px;
    margin: 25px 0 48px;
  }
}
</style>