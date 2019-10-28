<template>
  <div class="transfers2-without-opening-an-account">
    <form class="input-block-wrapper" @submit.prevent="submit">
      <p class="input-block-wrapper__title">
        Перевод без открытия счета в рублях
      </p>
      <div
        class="input-block" 
        v-for="(block, index) in blocks" :key="index"
      >
        <p class="input-block__title" v-html="block.title"/>
        <input
          class="input-block__input"
          :class="{
            'input-error': $v[block.model].$invalid && $v[block.model].$dirty,
            'input-success': !$v[block.model].$invalid}"
          v-model="$v[block.model].$model"
          :placeholder="block.placeholder ? block.placeholder : ''"
          :type="block.type ? block.type : 'text'"
        />
        <div
          class="error" 
          v-if="$v[block.model].$invalid && $v[block.model].$dirty"
        >
          {{ block.error }}
        </div>
      </div>
      <div class="input-block__submit">
        <button type="submit" class="input-block__submit-inner">
          <span class="input-block__submit-text">Перевести </span>
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
      </div>
      <br />
    </form>
  </div>
</template>

<script>
import { required, minLength, maxLength, } from 'vuelidate/lib/validators';

export default {
  name: "TransfersInputs",
  data() {
    return {
      blocks: [
        {
          title: "Сумма",
          model: "amount",
          error: "Обязательное поле, минимум 100.",
        },
        {
          title: "БИК Банка",
          model: "BIK",
          error: "Обязательное поле, 9 цифр.",
        },
        {
          title: "ИНН</br>получателя",
          model: "INN",
          error: "Обязательное поле, 10-12 цифр.",
        },
        {
          title: "КПП получателя",
          model: "KPP",
          error: "Обязательное поле, 10 цифр.",
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
    };
  },
  validations: {
    amount: {
      type: Number,
      required,
      minValue: (value) => value >= 100,
      isNumber: (value) => /[0-9]/i.test(value),
    },
    BIK: {
      type: Number,
      required,
      minLength: minLength(9),
      maxLength: maxLength(9),
    },
    INN: {
      type: Number,
      required,
      minLength: minLength(10),
      maxLength: maxLength(12),
    },
    KPP: {
      type: Number,
      required,
      minLength: minLength(9),
      maxLength: maxLength(9),
    },
    nameOfRecipient: {
      // required,
    },
    accountOfRecipient: {
      // required,
    },
    nameOfPayment: {
      // required,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$router.push('/transfers/success');
      }
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

.transfers2-without-opening-an-account {
  @include transfers2;

  .input-block-wrapper {

    .input-block__submit {
      padding-left: 0;
    }

  }

}

</style>