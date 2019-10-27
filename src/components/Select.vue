<template>
  <div class="select">
    <div 
      class="select__value select__icon" 
      :class="[opened ? 'select__opened' : '',
        icon ? 'select__icon_right' : 'select__icon_left',]"
      @click="opened = !opened" v-click-outside="hide"
    >
      {{ value }}
    </div>
    <transition name="fade">
      <div 
        v-if="opened" class="select__dropdown"
        :class="icon ? 'select__dropdown_right' : 'select__dropdown_left'"
      >
        <div
          v-for="(item, index) in items" :key="index"
          class="select__dropdown-item"
          @click="selectVal(item)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  props: {
    default: String,
    model: String,
    items: Array,
    icon: {
      type: Boolean, // 1 - справа, 0 - слева
      default: true,
    },
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      opened: false,
      value: this.default,
    };
  },
  methods: {
    hide() {
      this.opened = false;
    },
    selectVal(val) {
      this.value = val;
      this.$emit("select", val, this.model);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.select {
  display: block;

  height: 65px;
  width: 100%;

  appearance: none;
  background-color: transparent;
  border: none;

  font: 24px/28px Roboto;

  &__opened {

    &.select__value, 
    &.select__icon_left::before,  
    &.select__icon_right::after {
      color: $color-accent;
    }

  }

  &__icon {

    &_left::before, &_right::after {
      content: "▼";
      transition: all .2s ease;

      display: inline-block;

      height: 24px;
      width: 24px;

      color: $color-light;
      font: 18px;
    }

    &_left:hover::before,  &_right:hover::after {
      color: $color-accent;
      cursor: pointer;
    }

    &_left::before {
      position: absolute;
      left: -3px;
      top: 25px;
    }

    &_right::after {
      margin: -30px 15px 0 0;
    
      position: relative;
      left: 18px;
      top: -3px;
    }

  }

  &__value {
    padding-top: 20px;
    transition: all .2s ease;
    user-select: none;

    &:hover {
      color: $color-accent;
      cursor: pointer;
    }

  }

  &__dropdown {
    position: absolute;

    color: $color-light;

    background: $color-block-medium;
    
    z-index: 7;

    &_left {
      margin: 10px 0 0 -38px;
    }

    &_right {
      margin: 10px 0 0 -15px;
      min-width: 30px;
    }
    
    &-item {
      padding: 10px 25px;
      min-width: 80px;
      text-align: center;
      user-select: none;

      &:hover {
        background: $color-accent;
        cursor: pointer;
      }

    }

  }
  
}
</style>