<template>
  <footer class="footer">
    <router-link
      to="/download-app"
      class="footer__mobile-apps-link"
    >
      <img 
        src="@/assets/mobileApps.png"
        class="footer__mobile-apps"
        alt="Скачать мобильное приложение"
      >
    </router-link>
    <div class="footer__contacts">
      <span class="footer__contacts-item">Контактная информация</span>
      <span class="footer__contacts-item">+7 (495) 215 57 74</span>
      <span class="footer__contacts-item">Адреса</span>
    </div>
    <div class="footer__search">
      <span class="footer__search-text">Поиск по сайту</span>
      <input class="footer__search-input" v-on:keyup.enter="search"/>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    search() {
      console.log('Поиск');
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  height: 172px;
  max-width: 1440px;

  display: flex;
  flex-direction: row;

  color: $color-light;
  font: Play;

  margin: 0 auto;

  &__mobile-apps {
    width: 174px;
  }

  &__contacts {
    width: 100%;

    display: flex;
    flex-direction: column;

    color: $color-light;
    font: 18px/21px Play;
    letter-spacing: .135em;
    text-align: left;

    margin-left: 94px;

    &-item {
      padding-bottom: 24px;
    }

  }

  &__search {
    width: 279px;

    display: flex;
    flex-direction: column;

    overflow: visible;

    &-text {
      color: $color-light;
      font: 18px/21px Play;
      letter-spacing: .205em;
      text-align: left;
    }

    &-input {
      width: 279px;
      height: 72px;

      margin-top: 13px;
      border: 0;
      @include color-opacity(background, $color-accent, 0.6);
      padding: 0 10px;

      color: $color-light;
      font: 16px/19px Play;
      letter-spacing: .05em;

      &:focus {
        background: $color-block-light;
      }

    }

  }

}

@media (max-width: 1440px) {

  .footer__search-input {
    width: 279px;
  }
  
}

@media (max-width: 850px) {

  .footer__contacts {
    margin-left: 0px;
  }

  .footer__search-input {
    width: 220px;
  }
  
}
</style>
