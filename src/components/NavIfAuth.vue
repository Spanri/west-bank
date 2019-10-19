<template>
  <nav class="nav">
    <router-link to="/home" class="nav__item nav__item_online-bank">
      <span class="nav__text">Онлайн-банк</span>
    </router-link>
    <router-link to="/transfers" class="nav__item nav__item_transfers">
      <span class="nav__text">Переводы</span>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  @include color-opacity(background, $color-block-dark, .95, true);
  box-shadow: none !important;
  z-index: 3;

  width: calc((100vw - 1440px) / 2 + 383px) !important;
}

.nav {
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: $color-light;

  margin-top: 30px;
  z-index: 2;

  & > * + * {
    top: 62px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 90px;
    width: calc((100vw - 1440px) / 2 + 337px);

    position: absolute;
    right: 0;

    @include color-opacity(background, $color-block-medium, .85);
    box-shadow: 10px 10px 4px rgba(0, 0, 0, .1);
    user-select: none;

    &_online-bank {
      padding-bottom: 15px;
    }

    &_transfers {
      padding-top: 15px;
    }

    &:hover {
      z-index: 4;
      text-decoration: none;
      background: $color-block-light;
    }

    &:focus {
      transition: background 0 ease-in-out;
    }

  }

  &__text {
    width: calc((100vw - 1440px) / 2 + 225px);
    align-items: flex-start;

    color: $color-light;
    font: normal normal bold 24px/28px Play;
    text-align: left;
    text-decoration: none;
  }

}

@media (max-width: 1440px) {

  .nav__text {
    width: 225px;
  }

  .nav__item {
    width: 337px;
  }

  .router-link-active {
    width: 383px !important;
  }
  
}
</style>
