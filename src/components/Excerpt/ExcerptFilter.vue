<template>
  <div class="filter">
    <div class="filter__title">Выписка за период</div>
    <div />
    <span>с</span>
    <!-- <datepicker :value="dateStart"/> -->
    {{ dateStart }}
    <input
      @change="filter"
      class="filter__input"
      type="date"
      v-model="dateStart" />
    <span>по</span>
    <input
      @change="filter"
      class="filter__input"
      type="date"
      v-model="dateEnd" />
  </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker';

export default {
  name: "ExcerptFilter",
  // components: {
  //   Datepicker,
  // },
  data() {
    return {
      dateStart: null,
      dateEnd: null,
    };
  },
  methods: {
    filter() {
      this.$emit("filter", {
        dateStart: this.dateStart, 
        dateEnd: this.dateEnd,
      });
    },
  },
};
</script>

<style scoped lang="scss">
[type="date"] {
  padding-left: 60px;
  font: 24px/28px Play;
  background: $color-pre-light url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}

[type="date"]::-webkit-inner-spin-button {
  display: none;
}

[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

.filter {
  color: $color-light;
  font: 24px/28px Play;
  text-align: left;
  letter-spacing: .09em;

  span {
    line-height: 60px;
  }

  &__input {
    height: 37px;
    width: 281px;

    background: $color-medium;
    border: 0;
    border-radius: 10px;
    margin: 0 42px;
    padding: 0 auto;

    color: $color-light;
    font: 26px/28px Play;
    vertical-align: middle;
  }
  
}
</style>