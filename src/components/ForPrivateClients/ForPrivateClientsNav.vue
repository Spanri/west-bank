<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <div 
        class="nav-inner" 
        v-for="(item, index) in items" :key="index"
      >
        <router-link
          class="nav__item" :to="item.to"
        >
          <span class="nav__text">{{ item.title }}</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ForPrivateClients",
  data() {
    return {
      items: [
        { 
          title: 'Оставить заявку', 
          to: '/for-private-clients/1', 
        },
        { 
          title: 'Интернет Банкинг', 
          to: '/for-private-clients/2', 
        },
        { 
          title: 'Тарифы', 
          to: '/for-private-clients/3', 
        },
        { 
          title: 'Валютный контроль', 
          to: '/for-private-clients/4', 
        },
        { 
          title: 'Рассчетно-кассовое обслуживание', 
          to: '/for-private-clients/5', 
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  // position: absolute;
  // left: 0;

  display: flex;
  align-items: flex-end;
  flex-direction: row;

  color: $color-light;

  margin-top: 30px;

  height: 600px;

  & > * + * {
    top: 62px;
  }

  &-wrapper {
    position: relative;
    margin: 185px 0 100px;
  }

  &-inner {
    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));

    height: 90px;
    width: calc((100vw - 1440px) / 2 + 600px);
  }

  &__item {
    display: flex;
    align-items: center;

    // height: 90px;
    // width: calc((100vw - 1440px) / 2 + 600px);

    // position: absolute;
    // left: 0;

    @include color-opacity(background, $color-block-medium, 0.85);
    background: 
      linear-gradient(90deg, #15172D -80.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-light;
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.1);
    user-select: none;

    margin-top: 150px;

    &-wrapper + &-wrapper {
      margin-top: 75px;
    }

    &:hover {
      background: $color-block-light;
      background: 
        linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
        $color-block-light;
      text-decoration: none;
      z-index: 4;
    }
    
  }

  &__text {
    padding-left: calc((100vw - 1440px) / 2 + 44px);

    color: $color-light;
    font: normal normal bold 24px/28px Play;
    text-align: left;
    text-decoration: none;
  }

}

@media (min-width: 1440px) {

  .nav__item {
    background: linear-gradient(90deg, #15172D -0.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-medium;

    &:hover {
      background: 
        linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
        $color-block-light; 
    }
  }

  .router-link-active {
    background: linear-gradient(90deg, #15172D -20.71%, 
      rgba(61, 65, 104, 0) 100%), $color-block-dark !important;
  }
  
}

@media (max-width: 1440px) {

  .nav__item {
    width: 600px;
  }

  .nav__text {
    padding-left: 44px;
  }

  .router-link-active {
    width: 383px !important;
  }

}

@media (max-width: 748px) {

  .nav {
    height: auto;

    &-wrapper {
      position: inherit;
      margin: 22px 0 60px;
    }

    &-inner {
      position: inherit;
      left: calc((100vw - 1440px) / 2 * (-1));

      height: 220px;
      width: 100%;
    }

    &__item {
      width: 100%;
      height: 220px;
      margin-top: 22px;

    }

  }

  .nav-inner + .nav-inner {
    margin-top: 7px;
  }
  
  .nav__text {
    padding-left: 44px;
  }

  .router-link-active {
    width: 383px !important;
  }

}

</style>