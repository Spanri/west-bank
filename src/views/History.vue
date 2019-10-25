<template>
  <div class="history">
    <p class="history__title">История</p>
    <div
      class="history__day-block"
      v-for="(item, index) in items" :key="index"
    >
      <div class="history__day-header">
        <span class="history__day-title">{{ item.date }}</span>
        <span class="history__day-amount">4560</span>
      </div>
      <div 
        class="history__action"
        v-for="(action, index) in item.actions" :key="index"
      >
        <p class="history__action-title">{{ action.description }}</p>
        <p class="history__action-amount">{{ action.amount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Excerpt",
  data() {
    return {
      items: [
        {
          date: '12 октября, пн',
          actions: [
            {
              description: 'Перевод на карту ***4567',
              amount: 5500,
            },
            {
              description: '***1234 Зачисление',
              amount: 5500,
            },
          ],
        },
        {
          date: '11 октября, вс',
          actions: [
            {
              description: '***1234 Зачисление Перевод на карту ***4567 ***1234 Зачисление',
              amount: 500,
            },
            {
              description: '***1234 Зачисление',
              amount: 2000,
            },
            {
              description: '***1234 Зачисление',
              amount: 5500,
            },
          ],
        },
        {
          date: '10 октября, сб',
          actions: [
            {
              description: 'чето',
              amount: 5500,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.history {
  color: $color-light;
  font: 24px/28px Play;
  text-align: left;

  padding-left: 190px;
  margin-bottom: 167px;

  &__title {
    margin-top: 36px;
  }

  &__day-header {
    width: 654px;

    margin: 36px 0;

    display: flex;
    justify-content: space-between;
  }

  &__day-title {
    font: 18px/21px Play;
  }

  &__action {
    width: 654px;
    height: 92px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @include color-opacity(background, $color-block-light, .2);
    padding: 10px 26px 10px 16px;
    overflow: hidden;

    & > * {
      margin: 0;
    }

    & + & {
      margin-top: 36px;
    }
  }

}
</style>