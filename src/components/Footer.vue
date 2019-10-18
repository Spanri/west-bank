<template>
  <footer class="footer">
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

  display: flex;
  flex-direction: row;

  color: $color-light;
  font-family: Play;
  font-style: normal;
  font-weight: normal;

  &__contacts {
    width: 100%;

    display: flex;
    flex-direction: column;

    color: $color-light;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.135em;
    text-align: left;

    margin-left: 213px;

    &-item {
      padding-bottom: 24px;
    }
  }

  &__search {
    width: 392px;

    display: flex;
    flex-direction: column;

    overflow: visible;

    &-text {
      color: $color-light;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.205em;
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
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;

      &:focus {
        // box-shadow: 0 0 14px $color-block-light;
        @include color-opacity(background, $color-accent, 0.45);
      }
    }
  }
}

@media (max-width: 1440px) {
  .footer__search-input {
    width: 392px;
  }
}
</style>
