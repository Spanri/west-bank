<template>
  <div class="nav">
    <router-link 
      to="/news" class="nav__item"
      @click.native="goToPage()"
    >
      Новости
    </router-link>
    <router-link 
      to="/for-private-clients" class="nav__item"
      @click.native="goToPage()"
    >
      Частным <br /> клиентам
    </router-link>
    <router-link 
      to="/about" class="nav__item"
      @click.native="goToPage()"
    >
      Бизнесу
    </router-link>
    <router-link 
      to="/about" class="nav__item"
      @click.native="goToPage()"
    >
      Финансовым <br /> институтам
    </router-link>
    <router-link 
      to="/about" class="nav__item"
      @click.native="goToPage()"
    >
      О банке
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  methods: {
    goToPage() {
      this.$emit("goToPage");
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  padding-right: 30px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  &__item {
    align-self: center;

    color: $color-light;
    text-decoration: none;

    padding-bottom: 37px;
    user-select: none;

    &:hover {
      color: $color-accent;
    }
  }
}

.router-link-exact-active {
  color: $color-accent;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;

    &__item {
      align-self: flex-start;

      padding-left: calc(100vw/2 - 61px);
      text-align: left;
    }
  }
}
</style>
