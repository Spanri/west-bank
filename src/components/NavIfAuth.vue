<template>
  <nav class="nav">
    <router-link to="/home" class="nav__item">
      <span class="nav__text">Онлайн-банк</span>
    </router-link>
    <router-link to="/transfers" class="nav__item">
      <span class="nav__text">Переводы</span>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  box-shadow: none !important;
  @include color-opacity(background, $color-block-dark, 0.95, true);
  width: calc((100vw - 1440px) / 2 + 383px) !important;
  z-index: 3;
}

.nav {
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: $color-light;

  margin-top: 30px;

  & > * + * {
    top: 62px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: calc((100vw - 1440px) / 2 + 337px);
    height: 90px;

    position: absolute;
    right: 0;

    @include color-opacity(background, $color-block-medium, 0.85);
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.1);
    user-select: none;

    // &:nth-child(1) {
    //   z-index: 2;
    // }

    &:hover {
      z-index: 4;
      text-decoration: none;
      @include color-opacity(background, $color-block-medium, 0.55);
    }
  }

  &__text {
    width: calc((100vw - 1440px) / 2 + 225px);
    align-items: flex-start;

    text-align: left;
    text-decoration: none;
    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
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
