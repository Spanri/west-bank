<template>
  <nav class="nav">
    <div
      class="nav-item"
      v-for="(item, index) in items" :key="index"
      @click="check(index)"
      :class="[item.checked ? 'checked' : '',
        items[index-1] && items[index-1].checked ? 'pre-checked' : '',
        items[index+1] && items[index+1].checked ? 'pre-checked' : '',
      ]"
      :style="{top: -index * 20 + 'px'}"
    >
      <span class="nav-text">{{ item.title }}</span>
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
      items: [
        { title: 'Оставить заявку', checked: false, },
        { title: 'Интернет Банкинг', checked: false, },
        { title: 'Тарифы', checked: false, },
        { title: 'Валютный контроль', checked: false, },
        { title: 'Рассчетно-кассовое обслуживание', checked: false, },
      ],
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
    },
  },
};
</script>

<style scoped lang="scss">
.checked {
  z-index: 5;
  width: 707px !important;
  background: $color-block-dark !important;
}

.pre-checked {
  z-index: 3;
  background: $color-block-medium !important;
}

.checked0 {
  transform: translateY(-80px);
}

.checked12 {
  transform: translateY(-10px);
  z-index: 3;
}

.checked21 {
  transform: translateY(80px);
}

.checked22 {
  z-index: 3;
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
  position: relative;
  left: 0;

  margin-top: 44px;

  display: flex;
  //align-items: flex-start;
  //justify-content: flex-start;
  flex-direction: column;

  color: $color-light;

  &-text {
    text-align: right;
    font: 18px/21px Play;

    margin-top: 32px;
    margin-left: 20px;
    height: 90px;
    user-select: none;
  }

  &-item {
    display: flex;
    //align-items: flex-end;
    //justify-content: flex-end;

    position: relative;

    height: 90px;
    width: 305px;

    background: $color-block-light;
    user-select: none;
    transition: all .3s ease-in-out;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);

    text-align: left;
    font: normal normal bold 24px/28px Play;

    &:hover {
      cursor: pointer;
      background: $color-accent;
      z-index: 5;
    }

      &1 {
        left: calc((100vw - 1440px) / 2);
        width: calc((100vw - 1440px) / 2 + 186px);

        background: $color-block-dark;
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%), $color-block-dark;
        box-shadow: 0 4px 4px #00000095;
      } 

      &2 {
        left: calc((100vw - 1440px) / 2);
        width: calc((100vw - 1440px) / 2 + 148px);

        background: $color-block-medium; 
        background: 
          linear-gradient(270deg, #15172D -0.71%,rgba(61, 65, 104, 0) 100%), $color-block-medium;
        box-shadow: 0px 4px 4px #00000080;
      } 

      &3 {
        left: calc((100vw - 1440px) / 2);
        width: calc((100vw - 1440px) / 2 + 128px);

        background: $color-block-light; 
        background: 
          linear-gradient(270deg, #15172D -0.71%, rgba(61, 65, 104, 0) 100%),
          $color-block-light;
        box-shadow: 0px 4px 4px #00000060;
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
</style>