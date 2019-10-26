<template>
  <div class="download-app-wrapper">
    <DownloadApp class="download-app width2_big"/>
    <DownloadAppMobile class="download-app width2_mobile"/>
  </div>
</template>

<script>
export default {
  name: "DownloadAppWrapper",
  components: {
    DownloadApp: () => import("@/components/DownloadApp/DownloadApp.vue"),
    DownloadAppMobile: 
      () => import("@/components/DownloadApp/DownloadAppMobile.vue"),
  },
};
</script>

<style lang="scss" scoped>
.download-app-wrapper {
  @include width2; // показ блоков в зависимости от размера, 2 размера
}
</style>

