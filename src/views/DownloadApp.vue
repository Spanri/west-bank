<template>
  <div class="download-app-wrapper">
    <DownloadAppBig class="download-app width2_big"/>
    <DownloadAppMobile class="download-app width2_mobile"/>
  </div>
</template>

<script>
export default {
  name: "DownloadAppWrapper",

  components: {
    DownloadAppBig: () => import("@/components/DownloadApp/DownloadAppBig.vue"),
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

