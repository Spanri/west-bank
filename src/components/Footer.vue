<template>
  <footer class="footer">
    <p class="footer__logo">
      ООО<br>РНКО<br>”ВЕСТ”
    </p>
    <div class="contacts">
      <span class="contacts__item">Контактная информация</span>
      <span class="contacts__item">+7 (495) 215 57 74</span>
      <span class="contacts__item">Адреса</span>
    </div>
    <div class="search">
      <span class="search__text">Поиск по сайту</span>
      <input class="search__input">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  height: 172px;

  display: flex;
  flex-direction: row;

  color: $color-light;
  font-family: Play;
  font-style: normal;
  font-weight: normal;

  &__logo {
    width: 135px;

    flex-basis: 135px;
    flex-grow: 0;
    flex-shrink: 0;

    margin: 0;
    padding-left: 6px;
    padding-right: 72px;

    color: $color-main;
    font-size: 24px;
    line-height: 172.5%;
    text-align: center;
    letter-spacing: 0.22em;
  }
}

.contacts {
  width: 100%;

  display: flex;
  flex-direction: column;

  color: $color-light;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.135em;
  text-align: left;

  &__item {
    padding-bottom: 24px;
  }
}

.search {
  width: 392px;

  display: flex;
  flex-direction: column;
  
  overflow: visible;
  
  &__text {
    color: $color-light;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.135em;
    text-align: left;
  }

  &__input {
    width: calc((100vw - 1440px)/2 + 392px);
    height: 42px;

    margin-top: 13px;
    border: 0;
    background: $color-main02;
    padding: 0 15px;
    color: $color-light;
  }
}

@media (max-width: 1440px) {
  .search__input {
		width: 392px;
  }
}
</style>
