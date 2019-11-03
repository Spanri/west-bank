<template>
  <div class="transfers3">
    <div class="success">
      <div class="success__content">
        <img 
          src="@/assets/logo.png" class="success__logo"
          alt="Логотип" width="300"
        >
        <p class="success__text">
          Перевод совершен!
        </p>
        <router-link 
          class="success__link" to=""
          @mouseenter.native="logoColor1 = 'none'; logoColor2 = 'white';" 
          @mouseleave.native="logoColor1 = 'none'; logoColor2 = '#D35858';"
        >
          <Document
            class="success__link-img"
            :color1="logoColor1" :color2="logoColor2"
          />
          <span class="success__link-text">Показать чек</span>
        </router-link>
      </div>
      <Block class="success__block" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp3",

  components: {
    Logo: () => import("@/icons/Logo.vue"),
    Document: () => import("@/icons/Document.vue"),
    Block: () => import("@/components/Block.vue"),
  },

  data() {
    return {
      logoColor1: "none",
      logoColor2: "#D35858",
    };
  },
  
  beforeRouteEnter(to, from, next) {
    console.log(from);
    if(!/^transfers2+/.test(from.name)) {
      next('/transfers');
    }
    next();
  },
};
</script>

<style scoped lang="scss">
// для показать чек, не поняла, что переопределила
* {
  transition: 0.15s;
}

.transfers3 {
  @include success;

  .success__content {
    margin: 0 auto;

    max-width: 729px;

    text-align: center;
  }
  
}
</style>