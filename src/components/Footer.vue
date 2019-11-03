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
  width: 100%;

  display: flex;
  flex-direction: row;

  color: $color-light;
  font: $font-footer;

  &__mobile-apps {
    width: 174px;
  }

  &__contacts {
    width: 100%;

    display: flex;
    flex-direction: column;

    color: $color-light;
    font: 18px/21px Play, sans-serif;
    letter-spacing: .135em;
    text-align: left;

    margin-left: 94px;

    &-item {
      margin-bottom: 24px;
    }

  }

  &__search {
    //width: 279px;

    display: flex;
    flex-direction: column;

    overflow: visible;

    &-text {
      color: $color-light;
      font: 18px/21px Play, sans-serif;
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
      font: 16px/19px Play, sans-serif;
      letter-spacing: .05em;

      &:focus {
        background: $color-block-light;
      }

      &::-ms-clear {
        width : 0;
        height: 0;
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

@media (max-width: 680px) {

  .footer {
    height: 400px;
    flex-direction: column;
    overflow: hidden;

    &__search, &__mobile-apps-link {
      align-self: flex-end;
    }

    &__contacts {
      order: 0;
      margin-left: 23px;
      width: auto;
    }

    &__mobile-apps-link {
      order: 1;
      margin: 12px -11px 18px;
    }

    &__search {
      order: 2;
      margin: 0 21px 24px 0;

      &-text {
        font: 13px/15px Play, sans-serif;
      }

      &-input {
        font: 18px/17px Play, sans-serif;

        height: 36px;
        width: 279px;
      }

    }

  }

}

@media (max-width: 680px)  and 
  (-ms-high-contrast: none), 
  (-ms-high-contrast: active) {

  .footer {
    height: 550px;
  }

}

</style>
