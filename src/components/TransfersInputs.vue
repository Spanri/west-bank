<template>
  <div class="transfers">
    <p class="transfers__title">Переводы</p>
    <div>
      <router-link
        class="transfers__link"
        to="/transfers/without-opening-an-account-in-rubles"
      >
        Перевод без открытия счета в рублях
      </router-link>
      <router-link
        class="transfers__link"
        to="/transfers/to-card"
      >
        Перевод на карту
      </router-link>
      <router-link
        class="transfers__link"
        to="/transfers/to-e-wallet"
      >
        Перевод на электронный кошелек
      </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Transfers",
  data() {
    return {
      item: {
        id: 0,
        number: "4560",
        money: "65.25",
        currency: 0,
        status: "Открыт",
        type: "Не персонализирован",
        constraints: "Не персонализирован Не персонализирован Не персон ализирован Не персо нализирован Не персонализирован Не персонал изирован Не персонНе персонализирован ",
      },
    };
  },
  methods: {
    goToExcerpt() {
      this.$router.push({
        name: "excerpt",
        params: {
          id: this.item.id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">

</style>