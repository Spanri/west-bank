<template>
  <form class="input-block-wrapper" @submit.prevent="submit">
    <p class="input-block-wrapper__title">Переводы</p>
    <div
      class="input-block" 
      v-for="(block, index) in blocks" :key="index"
    >
      <span class="input-block__title" v-html="block.title"/>
      <b-form-input
        class="input-block__input"
        v-model="$v[block.model].$model"
        :placeholder="block.placeholder ? block.placeholder : ''"
        :state="$v[block.model].$dirty ? !$v[block.model].$error : null"
        :aria-describedby="`input-block__invalid-feedback-${block.model}`"
      />
      <b-form-invalid-feedback
        :id="`input-block__invalid-feedback-${block.model}`"
      >
        {{ block.error }}
      </b-form-invalid-feedback>
    </div>
    <button
      type="submit" :class="{ invalid: $v.$invalid }"
      class="button input-block__submit"
    >
      <span class="input-block__submit-text">Далее </span>
      <svg
        class="input-block__submit-svg"
        width="27" height="16"
        viewBox="0 0 27 16" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z"
        />
      </svg>
    </button>
    <br />
  </form>
</template>

<script>
// import { required, minLength, email, } from 'vuelidate/lib/validators';

export default {
  name: "TransfersInputs",
  data() {
    return {
      blocks: [
        {
          title: "Сумма",
          model: "amount",
          error: "Обязательное поле, только цифры.",
        },
        {
          title: "БИК Банка",
          model: "BIK",
          error: "Обязательное поле, только цифры.",
        },
        {
          title: "ИНН</br>получателя",
          model: "INN",
          error: "Обязательное поле, только цифры.",
        },
        {
          title: "КПП получателя",
          model: "KPP",
          error: "Обязательное поле, только цифры.",
        },
        {
          title: "Наименование получателя",
          model: "nameOfRecipient",
          error: "Обязательное поле.",
        },
        {
          title: "Счет в банке получателя",
          model: "accountOfRecipient",
          error: "Обязательное поле, только цифры.",
        },
        {
          title: "Название платежа",
          model: "nameOfPayment",
          error: "Обязательное поле.",
        },
      ],
      amount: null,
      BIK: null,
      INN: null,
      KPP: null,
      nameOfRecipient: null,
      accountOfRecipient: null,
      nameOfPayment: null,
      errors: [],
    };
  },
  validations: {
    amount: {
      // type: Number,
      // required,
    },
    BIK: {
      // required,
    },
    INN: {
      // type: Number,
      // required,
    },
    KPP: {
      // type: Number,
      // required,
    },
    nameOfRecipient: {
      // required,
    },
    accountOfRecipient: {
      // required,
    },
    nameOfPayment: {

    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("next", 'Transfers3');
      }
    },
    goToExcerpt() {
      this.$router.push({
        name: "excerpt",
        params: {
          id: this.item.id,
        },
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.$route.params.type == undefined) {
      next();
    } else {
      const answer = window.confirm('Вы точно хотите уйти?');
      if (answer) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style scoped lang="scss">
.button:hover,
.button:hover .input-block__submit-svg {

  color: darken($color: $color-light, $amount: 40);
  fill: darken($color: $color-light, $amount: 40);
  transition: .1s all ease-in-out;

}

.input-block {

  &-wrapper {

    @include input;
    margin-left: 41px;

    .input-block + .input-block {
      margin-top: 74px;
    }

    /* переопределение стилей */
    .input-block {
      
      flex-shrink: 2;
      margin: 0;
      width: 808px;

      &__title {
        width: 487px;
        font-weight: normal;
      }

      &__input {
        width: 321px;
      }

    }

    .invalid-feedback {
      flex-basis: 487px;
      margin: 10px 0 -31px;
      width: 587px;
    }

    &__title {
      margin: 137px 0 34px 0;
    }

  }

  &__submit {

    background: transparent;
    border: 0;
    margin: 69px auto 78px;
    user-select: none;

    display: block;

    color: $color-pre-light;
    font: normal normal normal 36px/144.2% Play;
    text-align: center;

    &-svg {
      fill: $color-light;
    }

    .invalid {
      color: $color-medium;
      pointer-events: none;
    }

  }

}
</style>