<template>
  <nav class="nav">
    <router-link 
    to="/home" class="nav__item nav__item_online-bank"
    >
      <span class="nav__text">Онлайн-банк</span>
    </router-link>    
    <router-link 
      to="/transfers" 
      class="nav__item nav__item_transfers"
      :class="currentRouteName != 'transfers' && 
        currentRouteName != 'home' ? 'nav__passive' : ''"
    >
      <span class="nav__text">Переводы</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavIfAuth",
  computed: {
    currentRouteName() {
      console.log(this.$route.name);
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  /* как убрать important */
  @include color-opacity(background, $color-block-dark, .95, true);
  background: linear-gradient(270deg, #15172D -90.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-dark !important;
  box-shadow: none !important;
  z-index: 9;
  transform: translateY(69px);

  width: calc((100vw - 1440px) / 2 + 383px) !important;
}

.nav {
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;

  color: $color-light;
  font: $font-nav;

  margin-top: 30px;
  z-index: 8;

  & > * + * {
    top: 62px;
  }

  &__passive {
    transform: translateY(110px);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 90px;
    width: calc((100vw - 1440px) / 2 + 337px);

    position: absolute;
    right: 0;
    top: 0;

    @include color-opacity(background, $color-block-medium, .85);
    background: linear-gradient(270deg, #15172D -90.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-medium;
    box-shadow: 10px 10px 4px rgba(0, 0, 0, .1);
    user-select: none;
    transition: all .5s ease-in-out;
    
    &_online-bank {
      padding-bottom: 5px;
    }

    &_transfers {
      padding-top: 0px;
      // transform: translateY(169px);
    }

    &:hover {
      // z-index: 4;
      text-decoration: none;
      background: $color-accent;
      background: 
        linear-gradient(270deg, #15172D -90.71%, rgba(61, 65, 104, 0) 100%),
        $color-accent;
    }

  }

  &__text {
    width: calc((100vw - 1440px) / 2 + 225px);
    align-items: flex-start;

    color: $color-light;
    text-align: left;
    text-decoration: none;
  }

}

@media (min-width: 1440px) {

  .nav__item {
    background: linear-gradient(270deg, #15172D -0.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-medium;

    &:hover {
      background: 
        linear-gradient(270deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
        $color-accent;
    }
  }

  .router-link-active {
    background: linear-gradient(270deg, #15172D -20.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-dark !important;
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

@media (max-width: 1300px) {

  .nav__text {
    width: 100%;
    text-align: center;
  }

  .nav__item {
    width: 200px;
  }

  .router-link-active {
    width: 240px !important;
  }
  
}

@media (max-width: 1066px) {

  .nav {
    position: relative;
    height: 200px;
    right: 0;
  }

  .nav__item {
    width: 100%;
  }

  .router-link-active {
    width: 100% !important;
  }
  
}
</style>
