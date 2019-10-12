<template>
  <table class="table">
    <tr class="table__header">
      <th class="table__header-item table__header-item_first">Дата</th>
      <th class="table__header-item">Сумма</th>
      <th class="table__header-item">Статус</th>
      <th class="table__header-item">Куда</th>
    </tr>
    <tr
      v-for="(item, index) in items"
      :key="index"
    >
      <td class="table__item table__item_first">{{ item.date }}</td>
      <td 
        class="table__item"
        :class="item.type ? 'table__item_up' : 'table__item_down'"
      >
        {{ item.amount }}
      </td>
      <td class="table__item">{{ item.status }}</td>
      <td class="table__item">{{ item.where }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ExcerptTable",
  data() {
    return {
      items: [
        { date: '123', amount: '+456', type: 1, status: '789', where: '012', },
        { date: '123', amount: '+456', type: 1, status: '789', where: '012', },
        { date: '123', amount: '-456', type: 0, status: '789', where: '012', },
        { date: '123', amount: '+456', type: 1, status: '789', where: '012', },
        { date: '123', amount: '-456', type: 0, status: '789', where: '012', },
      ],
      dateStart: null,
      dateEnd: null,
    };
  },
  filters: {
    excerptFilter(value) {
      if (!value) return this.items;
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    filter(data) {
      console.log('Данные поменялись', data);
    },
  },
};
</script>

<style scoped lang="scss">
.table th, .table td {
  border: 0;
}

.table {
  max-width: 1165px;

  &__header {
    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: left;

    height: 47px;

    @include color-opacity(background, $color-block-light, 0.2);

    &-item {
      font-weight: normal;

      &_first {
        padding-left: 48px;
      }
    }
  }

  &__item {
    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: left;

    &_first {
      padding-left: 48px;
    }

    &_up {
      color: $success;
    }

    &_down {
      color: $error;
    }
  }
}
</style>