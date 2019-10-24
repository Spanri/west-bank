<template>
  <div class="checkbox">
    <input 
      @click="openMenu()" :checked="openProp"
      type="checkbox" id="checkbox2" 
      class="checkbox2 visuallyHidden"
    >
    <label for="checkbox2">
        <div class="hamburger hamburger2">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
        </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open(newVal) {
      this.openProp = newVal;
    },
  },
  data() {
    return {
      openProp: false,
    };
  },
  methods: {
    openMenu() {
      this.openProp = !this.openProp;
      this.$emit("openMenu", this.openProp);
    },
  },
};
</script>

<style lang="scss" scoped>
.visuallyHidden {
  position: absolute; 

  height: 1px; 
  width: 1px; 

  margin: -1px; 
  padding: 0; 
  border: 0; 
  overflow: hidden; 
  clip: rect(0 0 0 0); 
}

.hamburger {
  margin: 0 auto;

  width: 40px;
  height: 30px;

  position: relative;

  .bar {
    display: block;
    
    position: absolute; 
    
    width: 40px;
    height: 4px;

    background-color: $color-accent;
    padding: 0;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    .bar, .bar2, .bar3 {
      background-color: $color-light;
    }
  }
}

.checkbox:hover {
  .checkbox2:checked + label > .hamburger2 > .bar2,
  .checkbox2:checked + label > .hamburger2 > .bar3 {
    background-color: $color-light;
  }
}

.checkbox2:checked + label > .hamburger2 > .bar1 {
  transform: translateX(40px);
  background-color: transparent;
}
.checkbox2:checked + label > .hamburger2 > .bar2 {
  transform: translateX(-3px) translateY(-8px) rotate(45deg);
  width: 28.34px;
}
.checkbox2:checked + label > .hamburger2 > .bar3 {
  transform: translateX(-15px) translateY(-8px) rotate(-45deg);
  width: 28.34px;
}
.checkbox2:checked + label > .hamburger2 > .bar4 {
  transform: translateX(-40px);
  background-color: transparent;
}

.bar1 {
  top: 0;
}

.bar2, .bar3 {
  top: 13.5px;
}

.bar3 {
  right: 0;
}

.bar4 {
  bottom: 0;
}
</style>