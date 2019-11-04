<template>
  <div class="for-private-clients">
    <NavForMenuItems 
      class="for-private-clients__menu"
      :items="items" @description="setDescription"
    />
    <div class="for-private-clients__description" ref="description">
      <p class="for-private-clients__title">Описание</p>
      <p class="for-private-clients__text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, } from "vuex";

export default {
  name: "ForPrivateClients",

  components: {
    NavForMenuItems: () => import("@/components/NavForMenuItems.vue"),
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

  computed: {
    ...mapGetters('general', [ 'currentWidth', ]),
  },

  created() {
    this.description = this.items[0].description;
  },
  
  methods: {
    setDescription(val) {
      this.description = val;
      if (this.currentWidth < 1080) {
        this.$refs.description.scrollIntoView({
          behavior: "smooth", 
          block: "center",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.for-private-clients {
  margin: 44px auto auto;

  display: flex;
  flex-direction: row;

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
    font: 18px/20px Play, sans-serif;
  }
}

@media (min-width: 1440px) {

  .for-private-clients {

    &__description {
      margin-left: calc((100vw - 1440px) / 2 * (-1) + 30px);
    }
    
  }

}

@media (max-width: 1200px) {

  .for-private-clients {
    flex-direction: column;
  }

}

</style>