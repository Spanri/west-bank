module.exports = {
  assetsDir: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/westb/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
      postcss: {
        // options here will be passed to postcss-loader
      },
    },
  },
};
