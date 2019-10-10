<template>
  <nav class="nav">
    <span
      class="nav-item"
    >
      Онлайн-банк
    </span>
    <span
      class="nav-item"
    >
      Переводы
    </span>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: absolute;
  right: 0;
  margin-top: -70px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: $color-light;

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    height: 90px;
    width: 128px;

    @include color-main(background, 0.6);
    box-shadow: 0px 4px 4px #000000;
    user-select: none;
    
    font-family: Play;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    &_selected {
      z-index: 3;
      width: 383px;
      @include color-main(background, 0.95);
    }
  }
}
</style>