<template>
  <div class="for-private-clients">
    <p class="for-private-clients__title">Описание</p>
    <ForPrivateClientsNav />
  </div>
</template>

<script>
export default {
  name: "ForPrivateClients",
  components: {
    ForPrivateClientsNav: () => 
    import("@/components/ForPrivateClients/ForPrivateClientsNav.vue"),
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
  color: white;
}
</style>