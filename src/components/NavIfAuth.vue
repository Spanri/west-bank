<template>
  <nav class="nav">
    <router-link
      to="/home"
      class="nav__item"
    >
      Онлайн-банк
    </router-link>
    <router-link
      to="/transfers"
      class="nav__item"
    >
      Переводы
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  box-shadow: none !important;
  @include color-opacity(background, $color-main, 0.95);
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
    justify-content: center;
    align-items: center;

    width: calc((100vw - 1440px) / 2 + 337px);
    height: 90px;

    position: absolute;
    right: 0;

    @include color-opacity(background, $color-main, 0.8);

    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.1);
    user-select: none;

    text-decoration: none;
    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    &:nth-child(1) {
      z-index: 2;
    }

    &:hover {
      background: darken($color: $color-main, $amount: 5);
    }
  }  
}
</style>
