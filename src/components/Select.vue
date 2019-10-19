<template>
  <div class="select">
    <div 
      class="select__value" @click="opened = !opened"
      v-click-outside="hide"
    >
      {{ value }}
    </div>
    <transition name="fade">
      <div v-if="opened" class="select__dropdown">
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

  &__value {
    padding-top: 20px;
  }

  &__dropdown {
    position: absolute;

    color: $color-light;

    background: $color-block-medium;
    margin: 10px 0 0 -38px;
    z-index: 10;
    
    &-item {
      padding: 10px 25px;

      &:hover {
        color: $color-accent;
        cursor: pointer;
      }

    }

  }
  
}
</style>