<template>
  <div class="nav">
    <nav class="nav__inner">
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
    <hr class="nav__line" />
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;

  display: inline-block;

  padding-right: 30px;

  &__inner {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__line {
    margin: 0;
    border: 2px solid $color-light;
  }

  &__item {
    color: white;
    text-decoration: none;

    padding-bottom: 37px;
    user-select: none;

    &:hover {
      color: $color-main-light;
    }
  }
}

.router-link-exact-active {
  color: $color-main-light;
}
</style>
