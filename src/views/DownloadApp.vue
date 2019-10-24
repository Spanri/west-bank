<template>
  <component 
    class="download-app-wrapper"
    :is="currentWidth > 748 ? 'DownloadApp' : 'DownloadAppMobile'"
  >
    
  </component>
</template>

<script>
export default {
  name: "DownloadAppWrapper",
  components: {
    DownloadApp: () => import("@/components/DownloadApp/DownloadApp.vue"),
    DownloadAppMobile: 
      () => import("@/components/DownloadApp/DownloadAppMobile.vue"),
  },
  computed: {
    currentWidth() {
      return this.$store.getters.getCurrentWidth;
    },
  },
};
</script>
