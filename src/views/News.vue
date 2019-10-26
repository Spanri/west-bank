<template>
  <div class="news">
    <NewsBlock class="news__block"/>
    <NewsCurrency class="news__currency"/>
  </div>
</template>

<script>
export default {
  name: "News",
  components: {
    NewsBlock: () => import("@/components/News/NewsBlock.vue"),
    NewsCurrency: () => import("@/components/News/NewsCurrency.vue"),
  },
};
</script>

<style scoped lang="scss">
.news {
  height: 100%;
  padding-bottom: 158px;
}
</style>
