<template>
  <nav class="nav">
    <div
      class="nav-item"
      v-for="item in 3" :key="item"
      :class="`nav-item${item}_phase${propPhase}`"
    > 
    <!-- propPhase.substring(propPhase.length - 1) -->
      <span class="nav-text">{{ item }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavPhases",
  props: {
    phase: String,
  },
  watch: {
    phase: function(newVal) {
      this.propPhase = newVal;
    },
  },
  data() {
    return {
      propPhase: this.phase,
    };
  },
  methods: {
    next(val) {
      this.propPhase = val;
    },
  },
};
</script>

<style scoped lang="scss">

.nav {
  position: absolute;
  right: 0;

  margin-top: 353px;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  color: $color-light;

  &-text {
    width: calc((100vw - 1440px) / 2 + 84px);
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: relative;

    height: 90px;

    @include color-opacity(background, $color-block-light, .8);
    user-select: none;

    text-align: left;
    font: normal normal bold 24px/28px Play;

    &1_phase {

      &1 {
        width: calc((100vw - 1440px) / 2 + 168px);

        @include color-opacity(background, $color-block-dark, .95);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%), rgba(red($color-block-dark),
            green($color-block-dark),
            blue($color-block-dark),
            .95);
        box-shadow: 0 4px 4px #00000095;
        z-index: 3;
      } 

      &2 {
        width: calc((100vw - 1440px) / 2 + 148px);

        @include color-opacity(background, $color-block-light, .8); 
        background: 
          linear-gradient(270deg, #15172D -0.71%,rgba(61, 65, 104, 0) 100%), rgba(red($color-block-light), 
            green($color-block-light), 
            blue($color-block-light), 
            .8);
        box-shadow: 0px 4px 4px #00000080;
      } 

      &3 {
        width: calc((100vw - 1440px) / 2 + 128px);

        z-index: 3;
        @include color-opacity(background, $color-block-light, .6); 
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-light), 
            green($color-block-light), 
            blue($color-block-light), 
            .6);
        box-shadow: 0px 4px 4px #00000060;
      } 

    }

    &2_phase {

      &1 {
        width: calc((100vw - 1440px) / 2 + 148px);
        @include color-opacity(background, $color-block-medium, .9);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-medium), 
            green($color-block-medium), 
            blue($color-block-medium), 
            .9);
        box-shadow: 0 4px 4px #00000090;
      } 

      &2 {
        width: calc((100vw - 1440px) / 2 + 168px);
        
        @include color-opacity(background, $color-block-dark, .95);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-dark), 
            green($color-block-dark), 
            blue($color-block-dark), 
            .95); 
        box-shadow: 0 4px 4px #00000095;
        z-index: 3;
      } 

      &3 {
        width: calc((100vw - 1440px) / 2 + 148px);
        
        @include color-opacity(background, $color-block-medium, .8);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-medium), 
            green($color-block-medium), 
            blue($color-block-medium), 
            .8); 
        box-shadow: 0px 4px 4px #00000080;
      } 

    }

    &3_phase {

      &1 {
        width: calc((100vw - 1440px) / 2 + 128px);
        @include color-opacity(background, $color-block-light, .85);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-light), 
            green($color-block-light), 
            blue($color-block-light), 
            .85); 
        box-shadow: 0 4px 4px #00000085;
      } 

      &2 {
        width: calc((100vw - 1440px) / 2 + 128px);
        @include color-opacity(background, $color-block-medium, .6);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-medium), 
            green($color-block-medium), 
            blue($color-block-medium), 
            .6); 
        box-shadow: 0 4px 4px #00000060;
      } 

      &3 {
        width: calc((100vw - 1440px) / 2 + 168px);

        @include color-opacity(background, $color-block-dark, .95);
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          rgba(red($color-block-dark), 
            green($color-block-dark), 
            blue($color-block-dark), 
            .95); 
        box-shadow: 0 4px 4px #00000095;
        z-index: 3;
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

@media (max-width: 1440px) {

  .nav-text {
    width: 84px;
  }

  .nav-item {

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