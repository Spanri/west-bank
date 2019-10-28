<template>
  <table class="table">
    <tr class="table__header">
      <th class="table__header-item table__header-item_first">Дата</th>
      <th class="table__header-item">Сумма</th>
      <th class="table__header-item">Статус</th>
      <th class="table__header-item">Куда</th>
    </tr>
    <tr 
      class="table__item-row"
      v-for="(item, index) in items" :key="index"
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
  max-width: 1033px;

  &__header {
    color: $color-light;
    font: 18px/21px Play;
    text-align: left;

    height: 72px;

    /* фон заголовка */
    &::after {
      content: '';
      z-index: 0;
      @include color-opacity(background, $color-block-light, .2);
      background: 
        linear-gradient(90deg, #15172D 0%, rgba(61, 65, 104, 0) 10%),
        rgba(red($color-block-light), 
          green($color-block-light), 
          blue($color-block-light),
          .2);

      position: absolute;
      left: 0;

      width: calc((100vw - 1440px) / 2 + 1033px);
      height: 72px;
    }

    &-item {
      height: 72px;
      font-weight: normal;
      padding-top: 9px;
      z-index: 5;
      
      &_first {
        padding-left: 48px;
      }

    }

  }

  &__item {
    color: $color-light;
    font: 18px/21px Play;
    text-align: left;

    padding: 0.75rem;

    &-row {
      margin-top: 30px;
    }

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

@media (min-width: 1440px) {
  
  .table__header::after {
    background: 
      linear-gradient(90deg, #15172D -70.71%, rgba(61, 65, 104, 0) 100%),
      rgba(red($color-block-light), 
        green($color-block-light), 
        blue($color-block-light),
        .2);
  }

}

@media (max-width: 1440px) {
  
  .table__header::after {
    width: 1033px;
    left: 0;
  }

}
</style>