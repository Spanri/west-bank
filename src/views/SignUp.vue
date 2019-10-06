<template>
  <div class="signup">
    <nav class="signup__nav">
      <span class="signup__nav-item">1</span>
      <span class="signup__nav-item">2</span>
      <span class="signup__nav-item">3</span>
    </nav>
    <component :is="signUpPhase" @next="next"></component>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  components: {
    SignUp1: () => import('@/components/SignUp1.vue'),
    SignUp2: () => import('@/components/SignUp2.vue'),
    SignUp3: () => import('@/components/SignUp3.vue'),
  },
  props: {
    phase: {
      type: String,
      default: 'SignUp1'
    }
  },
  data() {
    return {
      signUpPhase: this.phase,
      lastName: '',
      firstName: '',
      patronymic: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    next(component) {
      this.signUpPhase = component;
    }
  }
}
</script>

<style scoped lang="scss">
.button:hover, .button:hover .signup__button-svg {
  color: $color-main;
  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.signup {

  &__nav {
    // height: 100%;

    position: absolute;
    right: 0;
    top: calc(100vh/2 - 141px);

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // justify-content: center;

    color: $color-light;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      height: 90px;
      width: 128px;

      background: rgba(45, 155, 219, 0.692);
      box-shadow: 0px 4px 4px #000000;
      
      font-family: Play;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      &:nth-child(1) {
        width: 168px;
      }
      
      &:nth-child(2) {
        width: 148px;
        top: -7px;
      }

      &:nth-child(3) {
        width: 128px;
        top: -29px;
      }
    }
  }
}
</style>
