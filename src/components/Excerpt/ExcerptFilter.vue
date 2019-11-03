<template>
  <div class="filter">
    <div class="filter__title">Выписка за период</div>
    <div />
    <span>с</span>
    <datepicker 
      class="date-picker" :language="ru"
      v-model="date.start" name="dateStart"
      calendar-class="date-picker__calendar" 
      input-class="date-picker__input"
    />
    <span>по</span>
    <datepicker 
      class="date-picker" :language="ru"
      v-model="date.end" name="dateEnd"
      calendar-class="date-picker__calendar" 
      input-class="date-picker__input"
    />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { ru, } from 'vuejs-datepicker/dist/locale';

export default {
  name: "ExcerptFilter",

  components: {
    Datepicker,
  },

  data() {
    return {
      date: {
        start: '',
        end: '',
      },
      ru: ru,
    };
  },
  
  methods: {
    filter() {
      this.$emit("filter", {
        start: this.date.start, 
        end: this.date.end,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  color: $color-light;
  font: $font-header;
  text-align: left;
  letter-spacing: .09em;

  span {
    line-height: 60px;
  }
  
}
</style>