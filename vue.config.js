module.exports = {
  assetsDir: './',
  // publicPath: '/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/westb/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_general.scss";
          @import "@/assets/scss/mixins/_mixins-buttons.scss";
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
