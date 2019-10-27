<template>
<div class="nav-wrapper">
  <nav class="nav">
    <div
      class="nav-item"
      v-for="item in 3" :key="item"
      :class="[`nav-item${item}`,
        item == 1 ? 'checked' : '',
        item == propPhase && propPhase != 1 ? 'checked0' : '',
        propPhase == 1 && item == 2 ? 'checked12' : '',
        propPhase == 2 && item == 1 ? 'checked21' : '',
        propPhase == 2 && item == 2 ? 'checked22' : '',
        propPhase == 3 && item == 1 ? 'checked31' : '',
        propPhase == 3 && item == 2 ? 'checked32' : '',
        propPhase == 3 && item == 3 ? 'checked33' : '',]"
    >
    </div>
    <span 
      v-for="item in 3" :key="item + 100" 
      class="nav-text"
    >
      {{ item }}
    </span>
  </nav>
  
</div>
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
.checked {
  z-index: 6;
}

.checked0 {
  transform: translateY(-80px);
}

.checked12 {
  transform: translateY(-10px);
  z-index: 5;
}

.checked21 {
  transform: translateY(80px);
}

.checked22 {
  z-index: 5;
}

.checked31 {
  transform: translateY(153px);
}

.checked32 {
  transform: translateY(-10px);
}

.checked33 {
  transform: translateY(-150px);
}

.nav {
  position: absolute;
  right: 0;

  margin-top: 250px;

  height: min-content;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  color: $color-light;
  font: $font-nav;

  &-wrapper {
    //margin-top: -200px;
  }

  &-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: relative;
    top: -265px;

    margin-top: -11px;
    z-index: 7;
    height: 90px;
    user-select: none;

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
    transition: all .5s ease-in-out;

    text-align: left;

      &1 {
        width: calc((100vw - 1440px) / 2 + 168px);

        background: $color-block-dark;
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%), $color-block-dark;
        box-shadow: 0 4px 4px #00000095;
      } 

      &2 {
        width: calc((100vw - 1440px) / 2 + 148px);

        background: $color-block-medium; 
        background: 
          linear-gradient(270deg, #15172D -0.71%,rgba(61, 65, 104, 0) 100%), $color-block-medium;
        box-shadow: 0px 4px 4px #00000080;
      } 

      &3 {
        width: calc((100vw - 1440px) / 2 + 128px);

        background: $color-block-light; 
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          $color-block-light;
        box-shadow: 0px 4px 4px #00000060;
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
  
}

@media (max-width: 900px) {

  .nav {
    position: relative;
    margin-bottom: -180px;
    margin-top: 50px;
  }

  .nav-text {
    width: 100%;
    padding-left: calc(100% / 2 - 20px);
  }

  .nav-item {

    &1, &2, &3 {
      width: 100vw !important;
    }

  }
  
}
</style>