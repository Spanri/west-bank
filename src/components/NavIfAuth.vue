<template>
  <nav class="nav">
    <router-link
      to="/home"
      class="nav-item"
    >
      Онлайн-банк
    </router-link>
    <router-link
      to="/transfers"
      class="nav-item"
    >
      Переводы
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  box-shadow: none !important;
  @include color-main(background, 0.95, !important);
  width: calc((100vw - 1440px)/2 + 383px) !important;
  z-index: 3;
}

.nav {
  position: absolute;
  right: 0;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: $color-light;

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;

    width: calc((100vw - 1440px)/2 + 337px);

    position: absolute;
    // padding-right: calc((100vw - 1440px)/2);
    right: 0;

    height: 90px;
    // width: 337px;

    @include color-main(background, 0.8);
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

    &:nth-child(2) {
      top: 62px;
      // background: $color-main;
    }
  }
}
</style>