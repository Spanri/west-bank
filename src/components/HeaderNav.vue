<template>
  <nav class="nav">
    <router-link
      to="/news"
      class="nav__item"
    >
      Новости
    </router-link>
    <router-link
      to="/about"
      class="nav__item"
    >
      Частным
      <br />
      клиентам
    </router-link>
    <router-link
      to="/about"
      class="nav__item"
    >
      Бизнесу
    </router-link>
    <router-link
      to="/about"
      class="nav__item"
    >
      Финансовым
      <br />
      институтам
    </router-link>
    <router-link
      to="/about"
      class="nav__item"
    >
      О банке
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding-right: 30px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  &__item {
    color: white;
    text-decoration: none;

    padding-bottom: 37px;
    user-select: none;

    &:hover {
      color: $color-main;
    }
  }
}

.router-link-exact-active {
  color: $color-main;
}
</style>
