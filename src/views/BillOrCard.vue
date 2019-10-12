<template>
  <div class="bill-or-card">
    <ItemCardOrBill
      class="bill-or-card__item"
      type="bill"
      :item="item"
    />
    <div class="bill-or-card__item item">
      
    </div>
    <div class="bill-or-card__info">
      <p class="bill-or-card__info-item">
        <span class="bill-or-card__info-title">
          Статус:
        </span>
        <span class="bill-or-card__info-data">
          {{ item.status }}
        </span>
      </p>
      <p class="bill-or-card__info-item">
        <span class="bill-or-card__info-title">
          Вид:
        </span>
        <span class="bill-or-card__info-data">
          {{ item.type }}
        </span>
      </p>
      <p class="bill-or-card__info-item">
        <span class="bill-or-card__info-title">
          Ограничения:
        </span>
        <span class="bill-or-card__info-data">
          {{ item.constraints }}
        </span>
      </p>
    </div>
    <div class="bill-or-card__button">
      <div class="bill-or-card__excerpt">
        <span>Выписка</span>
        <div
          @click="goToExcerpt"
          class="button bill-or-card__excerpt-button"
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.952 35.094C5.82031 36.6809 2.12474 34.7029 2.1673 31.4627L2.49544 6.47833C2.53963 3.11435 6.55007 0.929276 9.64239 2.58435L33.4616 15.3329C36.5539 16.988 36.3506 21.2107 33.0993 22.8582L8.952 35.094Z"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
      <div class="button bill-or-card__lock-out">
        Заблокировать счёт
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "BillOrCard",
  components: {
    ItemCardOrBill: () => import("@/components/ItemCardOrBill.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  data() {
    return {
      item: {
        id: 0,
        number: "4560",
        money: "65.25",
        currency: 0,
        status: "Открыт",
        type: "Не персонализирован",
        constraints: "",
      },
    };
  },
  methods: {
    goToExcerpt() {
      this.$router.push({
        name: "excerpt",
        params: {
          id: this.item.id,
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  height: 62px;

  background: transparent;
  border: 0;
  user-select: none;
  margin: 0;
  padding: 0;
}

.bill-or-card {
  height: 100%;

  color: $color-light;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 43px;

  &__item {
    margin: 140px 0;
  }

  &__info {
    font-family: Play;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;

    flex-grow: 2;

    &-item {
      min-height: 80px;

      margin-top: 10px;

      &:nth-child(1) {
        margin-top: 50px;
      }

      &:nth-child(3) {
        min-height: 172px;
      }
    }

    &-title {
      color: $color-light;
      font-weight: bold;
    }

    &-data {
      color: $color-post-medium;
      font-weight: normal;
    }
  }

  &__button {
    margin-bottom: 150px;

    * {
      color: $color-light;
      text-align: left;
      font-family: Play;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;
      letter-spacing: 0.09em;
    }
  }

  &__excerpt {
    width: 1177.27px;

    background: transparent;
    margin-bottom: 50px;
    stroke: $color-light;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &-button {
      &:hover {
        stroke: $color-medium;
      }
    }
  }

  &__lock-out {
    width: 1122px;

    @include color-main(background, 0.2);

    &:hover {
      @include color-dark(background, 5);
    }
  }
}
</style>
