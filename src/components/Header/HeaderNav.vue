<template>
  <div class="nav">
    <router-link 
      :to="item.to" class="nav__item"
      v-for="(item, index) in items" :key="index"
      @click.native="goToPage()"
      :title="item.title"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      items: [
        { title: 'Новости', to: '/news', },
        { title: 'Частным клиентам', to: '/for-private-clients', },
        { title: 'Бизнесу', to: '/about', },
        { title: 'Финансовым институтам', to: '/about', },
        { title: 'О банке', to: '/about', },
      ],
    };
  },
  methods: {
    goToPage() {
      this.$emit("goToPage");
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  padding-right: 20px;

  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: space-between;

  &__item {
    align-self: center;

    color: $color-light;
    font: 16px/19px;
    text-decoration: none;
    letter-spacing: .08em;

    user-select: none;

    &::after {
      content: attr(title);
      overflow: hidden;
      visibility: hidden;

      display: block;

      font-weight: bold;

      height: 0;
    }

    &:hover {
      color: $color-accent;
      font-weight: bold;
    }

  }

}

.router-link-exact-active {
  color: $color-accent;
  font-weight: bold;
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
