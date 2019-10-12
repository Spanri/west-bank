<template>
  <div class="signup">
    <nav class="signup__nav">
      <div
        class="signup__nav-item"
        v-for="item in 3"
        :key="item"
        :class="`signup__nav-item${item}_phase${
          signUpPhase.substring(signUpPhase.length - 1)
        }`"
      >
        <span class="signup__nav-text">{{ item }}</span>
      </div>
    </nav>    
    <component
      :is="signUpPhase"
      @next="next"
      class="signup__content" 
    />
  </div>
</template>

<script>
export default {
  name: "SignUp",
  components: {
    SignUp1: () => import("@/components/SignUp1.vue"),
    SignUp2: () => import("@/components/SignUp2.vue"),
    SignUp3: () => import("@/components/SignUp3.vue"),
  },
  props: {
    phase: {
      type: String,
      default: "SignUp1",
    },
  },
  data() {
    return {
      signUpPhase: this.phase,
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
  color: $color-main;
  fill: $color-main;
  transition: 0.1s all ease-in-out;
}

.signup {
  &__nav {
    position: absolute;
    right: 0;
    margin-top: 353px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    color: $color-light;

    &-text {
      width: calc((100vw - 1440px) / 2 + 84px);
    }

    &-item {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      position: relative;

      height: 90px;

      @include color-opacity(background, $color-block-light, 0.8);
      user-select: none;

      text-align: left;
      font-family: Play;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      &1_phase {
        &1 {
          width: calc((100vw - 1440px) / 2 + 168px);

          z-index: 3;
          @include color-opacity(background, $color-block-dark, 0.95);
          box-shadow: 0px 4px 4px #00000095;
        } 

        &2 {
          width: calc((100vw - 1440px) / 2 + 148px);

          @include color-opacity(background, $color-block-light, 0.8); 
          box-shadow: 0px 4px 4px #00000080;
        } 

        &3 {
          width: calc((100vw - 1440px) / 2 + 128px);

          z-index: 3;
          @include color-opacity(background, $color-block-light, 0.6); 
          box-shadow: 0px 4px 4px #00000060;
        } 
      }

      &2_phase {
        &1 {
          width: calc((100vw - 1440px) / 2 + 148px);

          @include color-opacity(background, $color-block-medium, 0.9);
          box-shadow: 0px 4px 4px #00000090;
        } 

        &2 {
          width: calc((100vw - 1440px) / 2 + 168px);

          z-index: 3;
          @include color-opacity(background, $color-block-dark, 0.95); 
          box-shadow: 0px 4px 4px #00000095;
        } 

        &3 {
          width: calc((100vw - 1440px) / 2 + 148px);
          
          @include color-opacity(background, $color-block-medium, 0.8); 
          box-shadow: 0px 4px 4px #00000080;
        } 
      }

      &3_phase {
        &1 {
          width: calc((100vw - 1440px) / 2 + 128px);

          @include color-opacity(background, $color-block-light, 0.85);
          box-shadow: 0px 4px 4px #00000085;
        } 

        &2 {
          width: calc((100vw - 1440px) / 2 + 128px);

          @include color-opacity(background, $color-block-medium, 0.6); 
          box-shadow: 0px 4px 4px #00000060;
        } 

        &3 {
          width: calc((100vw - 1440px) / 2 + 168px);

          z-index: 3;
          @include color-opacity(background, $color-block-dark, 0.95); 
          box-shadow: 0px 4px 4px #00000095;
        } 
      }

      &:nth-child(2) {
        top: -7px;
      }

      &:nth-child(3) {
        top: -29px;
      }
    }
  }
}

@media (max-width: 1440px) {
  .signup__nav-text {
    width: 84px;
  }

  .signup__nav-item {
    &1_phase {
      &1 {
        width: 168px;
      } 

      &2 {
        width: 148px;
      } 

      &3 {
        width: 128px;
      } 
    }

    &2_phase {
      &1 {
        width: 148px;
      } 

      &2 {
        width: 168px;
      } 

      &3 {
        width: 148px;
      } 
    }

    &3_phase {
      &1 {
        width: 128px;
      } 

      &2 {
        width: 128px;
      } 

      &3 {
        width: 168px;
      } 
    }
  }
}
</style>
