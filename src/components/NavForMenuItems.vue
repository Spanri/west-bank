<template>
  <nav class="nav">
    <div
      class="nav-item"
      v-for="(item, index) in itemsProp" :key="index"
      @click="check(index)"
      :class="[item.checked ? 'checked' : '',
        itemsProp[index-1] && itemsProp[index-1].checked ? 'pre-checked' : '',
        itemsProp[index+1] && itemsProp[index+1].checked ? 'pre-checked' : '',
        itemsProp[index+2] && itemsProp[index+2].checked ? 'pre-pre-checked' : '',
        itemsProp[index-2] && itemsProp[index-2].checked ? 'pre-pre-checked' : '',
        itemsProp[index+3] && itemsProp[index+3].checked ? 'pre-pre-pre-checked' : '',
        itemsProp[index-3] && itemsProp[index-3].checked ? 'pre-pre-pre-checked' : '',
      ]"
      :style="{top: currentWidth > 748 ? 
        -index * 20 + 'px' : +index * 20 + 'px' }"
    >
      <p class="nav-text">{{ item.title }}</p>
      <p class="nav-details">Подробнее...</p>
    </div>
  </nav>
</template>

<script>
import { mapGetters, } from "vuex";

export default {
  name: "NavPhases",

  props: {
    phase: String,
    items: Array,
  },

  watch: {
    phase: function(newVal) {
      this.propPhase = newVal;
    },
  },

  computed: {
    ...mapGetters('general', [ 'currentWidth', ]),
  },

  data() {
    return {
      propPhase: this.phase,
      itemsProp: this.items,
    };
  },

  methods: {
    next(val) {
      this.propPhase = val;
    },
    
    check(index) {
      this.items.forEach(item => {
        item.checked = false;
      });
      this.items[index].checked = true;
      this.$emit("description", this.items[index].description);
    },
  },
};
</script>

<style scoped lang="scss">
.checked {
  z-index: 6;
  width: calc((100vw - 1440px) / 2 + 707px) !important;
  background: $color-block-dark !important;
  background: 
    linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
    $color-block-dark !important; 
}

.pre-checked {
  z-index: 5;
  width: calc((100vw - 1440px) / 2 + 633px) !important;
  background: $color-block-medium !important;
  background: 
    linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
    $color-block-medium !important;
}

.pre-pre-checked {
  z-index: 4;
  width: calc((100vw - 1440px) / 2 + 507px) !important;
}

.pre-pre-pre-checked {
  z-index: 3;
  width: calc((100vw - 1440px) / 2 + 407px) !important;
}

.nav {
  position: relative;
  left: 0;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  color: $color-light;

  min-height: 550px;

  &-details {
    display: none;
  }

  &-text {
    text-align: left;
    font: $font-nav;

    margin-top: 28px;
    margin-left: 43px;
    user-select: none;
    
    //height: 90px;
    width: 100%;    
  }

  &-item {
    display: flex;
    flex-wrap: wrap;
    //align-items: flex-end;
    //justify-content: flex-end;

    position: relative;

    height: 90px;
    width: calc(1440px - 100vw / 2 - 305px);

    left: calc((100vw - 1440px) / 2 * (-1));
    width: calc((100vw - 1440px) / 2 + 305px);

    padding-left: calc((100vw - 1440px) / 2);

    background: $color-block-light;
    background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      $color-block-light;
    user-select: none;
    transition: all .3s ease-in-out;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.46);

    text-align: left;
    font: normal normal bold 24px/28px Play, sans-serif;

    &:hover {
      cursor: pointer;
      background: $color-accent !important;
      background: 
        linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
        $color-accent !important;
      z-index: 7;

      .nav-details {
        color: $color-light;
      }
      
    }

  }

}

@media (min-width: 1440px) {
  
  .checked {
    background: $color-block-dark !important;
    background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      $color-block-dark !important;
  }

  .pre-checked {
    background: $color-block-medium !important;
    background: 
      linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
      $color-block-medium !important;
  }

}

@media (max-width: 1440px) {

  .nav-item {
    left: 0;
    width: 305px;
  }

  .checked {
    width: 707px !important;
  }

  .pre-checked {
    width: 633px !important;
  }

  .pre-pre-checked {
    width: 507px !important;
  }

  .pre-pre-pre-checked {
    width: 407px !important;
  }
  
}

@media (max-width: 748px) {

  .nav-item, .checked, .pre-checked, 
  .pre-pre-checked, .pre-pre-pre-checked {
    width: calc(100% - 42px) !important;
    height: 55px;
  }

  .nav-details {
    display: block;

    align-self: flex-end;

    color: $color-accent;
    font: 14px/16px Play, sans-serif;

    padding: 0 27px 0px 20px;
    margin: auto 0;
  }

  .nav-item {
    height: 70px;
    margin: 0 21px;
    justify-content: space-between;

    &:last-child {
      margin-bottom: 100px;
    }
  }

  .nav-text {
    text-align: left;
    margin: auto 10px auto 20px;
    max-width: max-content;
    max-width: 400px;
  }

}

@media (max-width: 600px) {

  .nav-item, .checked, .pre-checked, 
  .pre-pre-checked, .pre-pre-pre-checked {
    height: 90px;
  }

  .nav-details {
    padding: 0 27px 0px 20px;
    margin: auto 0;
  }

  .nav-item {
    height: 95px;
    width: calc(100% - 42px) !important;
    //flex-wrap: nowrap;
    word-wrap: break-word;
  }

  .nav-text {
    width: auto;
    width: calc(100% - 42px) !important;
    word-wrap: break-word;
    // flex-basis: 100%;
    // min-width: 400px;
  }

}

// для IE
@media (max-width: 1440px) and 
  (-ms-high-contrast: none), 
  (-ms-high-contrast: active) {

  .nav-text {
    margin-left: calc((100vw - 1440px) / 2 * (-1) + 43px);
  }

}

</style>