<template>
  <nav class="nav">
    <div
      class="nav-item"
      v-for="(item, index) in items" :key="index"
      @click="check(index)"
      :class="[item.checked ? 'checked' : '',
        items[index-1] && items[index-1].checked ? 'pre-checked' : '',
        items[index+1] && items[index+1].checked ? 'pre-checked' : '',
        items[index+2] && items[index+2].checked ? 'pre-pre-checked' : '',
        items[index-2] && items[index-2].checked ? 'pre-pre-checked' : '',
        items[index+3] && items[index+3].checked ? 'pre-pre-pre-checked' : '',
        items[index-3] && items[index-3].checked ? 'pre-pre-pre-checked' : '',
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
        { title: 'Оставить заявку', checked: true, },
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
  width: calc((100vw - 1440px) / 2 + 707px) !important;
  background: $color-block-dark !important;
}

.pre-checked {
  z-index: 3;
  width: calc((100vw - 1440px) / 2 + 633px) !important;
  background: $color-block-medium !important;
}

.pre-pre-checked {
  z-index: 2;
  width: calc((100vw - 1440px) / 2 + 507px) !important;
}

.pre-pre-pre-checked {
  z-index: 1;
  width: calc((100vw - 1440px) / 2 + 407px) !important;
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
    text-align: left;
    font: 18px/21px Play;

    margin-top: 32px;
    margin-left: 43px;
    padding-left: calc((100vw - 1440px) / 2 + 43px);

    height: 90px;

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

    background: $color-block-light;
    user-select: none;
    transition: all .3s ease-in-out;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.46);

    text-align: left;
    font: normal normal bold 24px/28px Play;

    &:hover {
      cursor: pointer;
      background: $color-accent;
      z-index: 5;
    }

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
</style>