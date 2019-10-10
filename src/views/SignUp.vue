<template>
  <div class="signup">
    <nav class="signup__nav">
      <span
        class="signup__nav-item"
        v-for="item in 3"
        :key="item"
        :class="[
          signUpPhase == `SignUp${item}` ? 'signup__nav-item_selected' : '',
          signUpPhase == `SignUp${item+1}` ? 'signup__nav-item_preselected' : '',
          signUpPhase == 'SignUp1' && item == 2 ? 'signup__nav-item_preselected' : '',
        ]"
      >
        {{ item }}
      </span>
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
      default: 'SignUp1',
    },
  },
  data() {
    return {
      signUpPhase: this.phase,
      lastName: '',
      firstName: '',
      patronymic: '',
      phone: '',
      email: '',
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
.button:hover, .button:hover .signup__button-svg {
  color: $color-main;
  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.signup {
  // position: relative;

  &__nav {
    position: absolute;
    right: 0;
    margin-top: calc(100%/2 - 550px);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    color: $color-light;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      height: 90px;
      width: 128px;

      @include color-main(background, 0.6);
      box-shadow: 0px 4px 4px #000000;
      user-select: none;
      
      font-family: Play;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      &_selected {
        z-index: 3;
        @include color-main(background, 0.95);
      }

      &_preselected {
        @include color-main(background, 0.8);
      }

      &:nth-child(1) {
        width: 168px;
      }
      
      &:nth-child(2) {
        width: 148px;
        top: -7px;
        z-index: 2;
        // @include color-main(background, 0.8);
      }

      &:nth-child(3) {
        width: 128px;
        top: -29px;
      }
    }
  }
}
</style>
