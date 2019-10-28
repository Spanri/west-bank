<template>
  <div class="nav">
    <router-link 
      :to="item.to" class="nav__item"
      v-for="(item, index) in items" :key="index"
      @click.native="goToPage()"
      :title="item.title"
      v-html="title(item)"
    />
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      items: [
        { title: 'Новости', to: '/news', },
        { 
          title: 'Частным клиентам', 
          titleMobile: 'Частным<br>клиентам', 
          to: '/for-private-clients', 
        },
        { title: 'Бизнесу', to: '/about', },
        { 
          title: 'Финансовым институтам', 
          titleMobile: 'Финансовым<br>институтам', 
          to: '/about', 
        },
        { title: 'О банке', to: '/about', },
      ],
    };
  },
  computed: {
    currentWidth() {
      return this.$store.getters.getCurrentWidth;
    },
  },
  methods: {
    goToPage() {
      this.$emit("goToPage");
    },
    title(item) {
      return this.currentWidth < 748 && item.titleMobile ? 
        item.titleMobile : item.title;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  padding-right: 40px;

  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: space-between;

  &__item {
    align-self: center;

    color: $color-light;
    font: $font-menu;
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
    }

  }

}

.router-link-exact-active {
  color: $color-accent;
  font-weight: bold;
}

@media (max-width: 748px) {

  .nav {
    padding-right: 0;
    flex-direction: column;

    &__item {
      align-self: flex-start;
      padding-left: calc(100vw/2 - 61px);
      text-align: left;
      font: 18px/21px Play;

      & + & {
        margin-top: 28px;
      }

    }

  }
  
}
</style>
