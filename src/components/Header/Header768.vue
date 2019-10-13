<template>
  <header class="header">
    <svg
      width="40" height="31"
      viewBox="0 0 40 31" fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <line 
        x1="2" y1="2" 
        x2="38" y2="2" 
        stroke="#C66166" stroke-width="4" 
        stroke-linecap="round" stroke-linejoin="round"
      />
      <line
        x1="2" y1="15" 
        x2="38" y2="15" 
        stroke="#C66166" stroke-width="4" 
        stroke-linecap="round" stroke-linejoin="round"
      />
      <line
        x1="2" y1="29" 
        x2="38" y2="29" 
        stroke="#C66166" stroke-width="4" 
        stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
    <HeaderNav class="header__bottom-nav" />
    <HeaderAuth class="header__bottom-auth" />
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {
    HeaderNav: () => import("@/components/Header/HeaderNav.vue"),
    HeaderAuth: () => import("@/components/Header/HeaderAuth.vue"),
  },
};
</script>

<style scoped lang="scss">
.header {
  &_desktop {
    height: 172px;

    display: flex;
    justify-content: space-between;

    color: white;

    box-sizing: border-box;
  }

  &__logo {
    user-select: none;
    padding: 15px 25px 0 27px;
  }

  &__content {
    width: 100%;
    max-width: 1227px;

    display: flex;
    flex-direction: column;

    padding: 31px 0 0 0;

    font-size: 24px;
    line-height: 28px;

    &:before {
      content: "";

      width: 10%;
      min-width: 100px;
      max-width: 200px;

      display: inline-block;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    text-align: right;

    padding-bottom: 0;
    padding-right: 60.66px;
  }

  &__bottom {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

@media (min-width: 651px) {
  .nav {
    &_desktop {
      display: flex;
    }

    &_mobile {
      display: none;
    }
  }
}

@media (max-width: 650px) {
  .header {
    &_desktop {
      display: none;
      background: red;
    }

    &_mobile {
      display: flex;
    }
  }
}
</style>
