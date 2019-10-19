<template>
  <div class="signup">
    <NavPhases class="signup__nav" :phase="signUpPhase"/> 
    <transition name="slide" mode="out-in">
      <component
        :is="signUpPhase" @next="next"
        class="signup__content" 
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  components: {
    NavPhases: () => import("@/components/NavPhases.vue"),
    SignUp1: () => import("@/components/SignUp/SignUp1.vue"),
    SignUp2: () => import("@/components/SignUp/SignUp2.vue"),
    SignUp3: () => import("@/components/SignUp/SignUp3.vue"),
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  watch: {
    currentRouteName: function(newVal) {
      console.log(newVal);
      this.signUpPhase = 'SignUp1';
    },
  },
  data() {
    return {
      signUpPhase: 'SignUp1',
      lastName: "",
      firstName: "",
      patronymic: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    next(component) {
      this.signUpPhase = component;
    },
  },
};
</script>

<style scoped lang="scss">
.button:hover,
.button:hover .signup__button-svg {
  color: $color-accent;
  fill: $color-accent;
  transition: .1s all ease-in-out;
}

.signup {
  @include slide;
}
</style>
