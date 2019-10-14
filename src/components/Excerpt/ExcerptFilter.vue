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
  text-align: left;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.09em;

  span {
    line-height: 60px;
  }

  &__input {
    width: 281px;
    height: 37px;

    background: $color-medium;
    border: 0;
    border-radius: 10px;
    margin: 0 42px;
    padding: 0 auto;

    color: $color-light;
    vertical-align: middle;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
  }
}
</style>