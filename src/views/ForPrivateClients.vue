<template>
  <div class="for-private-clients">
    <ForPrivateClientsNav class="for-private-clients__menu" />
    <div class="for-private-clients__description">
      <p class="for-private-clients__title">Описание</p>
      <p class="for-private-clients__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa, totam architecto voluptas recusandae earum aliquid libero minima assumenda ullam mollitia esse dolorem! Et provident corrupti libero enim eaque! Delectus?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForPrivateClients",
  components: {
    ForPrivateClientsNav: () => 
    import("@/components/ForPrivateClients/ForPrivate.vue"),
  },
  data() {
    return {
      items: [
        { 
          title: 'Перевод без открытия счета в рублях', 
          to: '/transfers/without-opening-an-account-in-rubles', 
        },
        { title: 'Перевод на карту', to: '/transfers/to-card', },
        { title: 'Перевод на электронный кошелек', to: '/transfers/to-e-wallet', },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.for-private-clients {
  margin: 44px auto auto;

  display: flex;
  flex-direction: row;

  &__title {
    color: $color-light;
    font: $font-header;
    margin-bottom: 50px;
  }

  &__description {
    padding: 0 30px;
  }

  &__text {
    color: $color-light;
    font: 18px/20px Play;
  }

  &__menu {
    position: absolute;
    top: 0;
  }
}

@media (max-width: 1200px) {

  .for-private-clients {
    flex-direction: column;
  }
  
}

</style>