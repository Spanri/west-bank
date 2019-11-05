<template>
  <form
    class="signup" novalidate
    @submit.prevent="submit"
  >
    <NavPhases class="signup__nav" :phase="signUpPhase"/> 
    <transition name="slide" mode="out-in">
      <component
        :is="'SignUp' + signUpPhase" @next="next"
        class="signup__content" :dataOfPhase1="dataOfPhase1"
      />
    </transition>
  </form>
</template>

<script>
import { mapActions, } from "vuex";

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
      signUpPhase: '1',
      dataOfPhase1: {},
    };
  },

  methods: {
    ...mapActions('auth', [
      'logout',
    ]),

    next(data) {
      if (data.dataOfPhase1) {
        this.dataOfPhase1 = data.dataOfPhase1;
      }
      this.signUpPhase = data.val;
    },

    setInfo(valName, val) {
      console.log(valName, val);
      this[valName] = val;
    },
  },

  created() {
    /** 
     * сбросить login статус (он сбрасывается в Auth.vue, но тут 
     * на всякий случай)
    */
    this.logout();
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
