<template>
  <div class="news">
    <NewsAd class="news__ad"/>
    <NewsCurrency class="news__currency"/>
  </div>
</template>

<script>
export default {
  name: "News",
  components: {
    NewsAd: () => import("@/components/News/NewsAd.vue"),
    NewsCurrency: () => import("@/components/News/NewsCurrency.vue"),
  },
};
</script>

<style scoped lang="scss">
.news {
  height: 100%;
}
</style>
