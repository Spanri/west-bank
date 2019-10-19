<template>
  <nav class="nav">
    <div 
      class="nav__item-wrapper" 
      v-for="(item, index) in items" :key="index"
    >
      <router-link
        class="nav__item" :to="item.to"
      >
        <span class="nav__text">{{ item.title }}</span>
      </router-link>
    </div>
    
  </nav>
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
  position: absolute;
  left: 0;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  color: $color-light;

  margin-top: 30px;

  & > * + * {
    top: 62px;
  }

  &__item {
    display: flex;
    align-items: center;

    height: 90px;
    width: calc((100vw - 1440px) / 2 + 600px);

    position: absolute;
    left: 0;

    @include color-opacity(background, $color-block-medium, 0.85);
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.1);
    user-select: none;

    margin-top: 150px;

    &-wrapper + &-wrapper {
      margin-top: 75px;
    }

    &:hover {
      background: $color-block-light;
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
</style>