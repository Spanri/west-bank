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

  width: 100%;
  height: 65px;

  border: none;
  appearance: none;
  background-color: transparent;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  &__value {
    padding-top: 20px;
  }

  &__dropdown {
    position: absolute;

    color: $color-light;

    background: $color-block-medium;
    z-index: 10;
    margin-top: 10px;
    margin-left: -38px;
    
    &-item {
      padding: 10px 25px;

      &:hover {
        cursor: pointer;
        color: $color-accent;
      }
    }
  }
}
</style>