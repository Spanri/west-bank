module.exports = {
  assetsDir: './',
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/mixins/_mixins-general.scss";
          @import "@/assets/scss/mixins/_mixins-width.scss";
          @import "@/assets/scss/mixins/_mixins-input.scss";
          @import "vue-select/src/scss/vue-select.scss";
        `,
      },
      postcss: {
        // options here will be passed to postcss-loader
      },
    },
  },
};
