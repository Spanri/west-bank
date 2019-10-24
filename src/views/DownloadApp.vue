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
  mounted() {
    window.addEventListener('resize', this.setCurrentWidth);
  },
  data() {
    return {
      currentWidth: window.innerWidth,
    };
  },
  methods: {
    setCurrentWidth(e) {
      this.currentWidth = e.currentTarget.innerWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setCurrentWidth);
  },
};
</script>
