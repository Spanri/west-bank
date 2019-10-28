<template>
  <div class="for-business-wrapper">
    <div class="for-business">
      <NavForMenuItems 
        class="for-business__menu"
        :items="items" @description="setDescription"
      />
      <div class="for-business__description" ref="description">
        <p class="for-business__title">Описание</p>
        <p class="for-business__text">{{ description }}</p>
      </div>
    </div>
    <Block class="for-business__block"/>
  </div>
</template>

<script>
export default {
  name: "ForBusiness",
  components: {
    NavForMenuItems: () => import("@/components/NavForMenuItems.vue"),
    Block: () => import("@/components/Block.vue"),
  },
  data() {
    return {
      items: [
        { 
          title: 'Оставить заявку', 
          checked: true,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa, totam architecto voluptas recusandae earum aliquid libero minima assumenda ullam mollitia esse dolorem! Et provident corrupti libero enim eaque! Delectus?",
        },
        { 
          title: 'Интернет Банкинг', 
          checked: false,
          description: "ipsum dolor sit amet consectetur adipisicing elit. Illo culpa, totam architecto voluptas recusandae earum aliquid libero minima assumenda ullam mollitia esse dolorem! Et provident corrupti libero enim eaque! Delectus?",
        },
        { 
          title: 'Тарифы', 
          checked: false,
          description: "dolor sit amet consectetur adipisicing elit. Illo culpa, totam architecto voluptas recusandae earum aliquid libero minima assumenda ullam mollitia esse dolorem! Et provident corrupti libero enim eaque! Delectus?",
        },
        { 
          title: 'Валютный контроль', 
          checked: false,
          description: "amet consectetur adipisicing elit. Illo culpa, totam architecto voluptas recusandae earum aliquid libero minima assumenda ullam mollitia esse dolorem! Et provident corrupti libero enim eaque! Delectus?",
        },
        {
          title: 'Рассчетно-кассовое обслуживание',
          checked: false,
          description: "adipisicing elit. Illo culpa, totam architecto voluptas recusandae earum aliquid libero minima assumenda ullam mollitia esse dolorem! Et provident corrupti libero enim eaque! Delectus?",
        },
      ],
      description: '',
    };
  },
  created() {
    this.description = this.items[0].description;
  },
  methods: {
    setDescription(val) {
      this.description = val;
      this.$refs.description.scrollIntoView({
        behavior: "smooth", 
        block: "center",
      });
    },
  },
};
</script>

<style scoped lang="scss">
* {
  transition: all 1s ease-in-out;
}

.for-business {
  margin: 44px auto auto;

  display: flex;
  flex-direction: row;

  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }

  &__title {
    color: $color-light;
    font: $font-header;
    margin-bottom: 50px;
  }

  &__description {
    padding: 0 30px 30px;
  }

  &__text {
    color: $color-light;
    font: 18px/20px Play;
  }

  &__block {
    margin-bottom: 150px;
    align-self: flex-start;
  }

}

@media (min-width: 1440px) {

  .for-business {

    &__description {
      margin-left: calc((100vw - 1440px) / 2 * (-1) + 30px);
    }
    
  }

}

@media (max-width: 1200px) {

  .for-business {
    flex-direction: column;
  }

}

@media (max-width: 1166px) {

  .for-business {

    &-wrapper {
      align-items: inherit;
    }

    &__block {
      align-self: auto;
    }

  }

}

</style>