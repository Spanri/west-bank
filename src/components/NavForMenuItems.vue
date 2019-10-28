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
    currentWidth() {
      return this.$store.getters.getCurrentWidth;
    },
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
  //align-items: flex-start;
  //justify-content: flex-start;
  flex-direction: column;

  color: $color-light;

  &-details {
    display: none;
  }

  &-text {
    text-align: left;
    font: $font-nav;

    margin-top: 32px;
    margin-left: 43px;
    

    height: 90px;
    width: 100%;
    text-align: left;

    user-select: none;
  }

  &-item {
    display: flex;
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
    font: normal normal bold 24px/28px Play;

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
    height: 176px;
  }

  .nav-details {
    display: block;

    align-self: flex-end;

    color: $color-accent;
    font: 14px/16px Play;

    padding: 0 27px 22px;
    margin: 0;
  }

  .nav-item {
    height: 176px;
    margin: 0 21px;

    &:last-child {
      margin-bottom: 100px;
    }
  }

  .nav-text {
    text-align: left;
    margin-left: 0;
    margin-top: 10px;
  }

}

</style>