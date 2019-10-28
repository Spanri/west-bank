<template>
  <div class="signup">
    <NavPhases class="signup__nav" :phase="signUpPhase"/> 
    <transition name="slide" mode="out-in">
      <component
        :is="'SignUp' + signUpPhase" @next="next"
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
  data() {
    return {
      signUpPhase: 1,
      lastName: "",
      firstName: "",
      patronymic: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    next(val) {
      this.signUpPhase = val;
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

  &__nav {
    margin-top: 150px;
  }

}
</style>
