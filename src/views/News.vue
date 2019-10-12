<template>
  <div class="news">
    <NewsAd class="news__ad"/>
    <NewsCurrency class="news__currency"/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "News",
  components: {
    NewsAd: () => import("@/components/NewsAd.vue"),
    NewsCurrency: () => import("@/components/NewsCurrency.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
};
</script>

<style scoped lang="scss">
.news {
  height: 100%;
  // position: relative;

  color: white;
}
</style>
