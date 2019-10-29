export const getImgUrl = {
  data() {
      return {
        logo: "logo.png",
        logoColor: "white",
      };
    },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/' + pic);
    },
  },
};