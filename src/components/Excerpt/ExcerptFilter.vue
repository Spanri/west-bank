<template>
  <div class="filter">
    <div class="filter__title">Выписка за период</div>
    <div />
    <span>с</span>
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
export default {
  name: "ExcerptFilter",
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
.filter {
  margin-top: 87px;

  color: $color-light;
  font: 36px/42px Play;
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