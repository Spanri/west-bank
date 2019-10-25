<template>
  <form class="input-block-wrapper" @submit.prevent="submit">
    <p class="input-block-wrapper__title">Перевод на электронный кошелек</p>
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
    <button
      type="submit" :class="{ invalid: $v.$invalid }"
      class="button input-block__submit"
    >
      <span class="input-block__submit-text">Перевести </span>
      <svg 
        class="input-block__submit-svg"
        width="16" height="8" 
        viewBox="0 0 16 8" fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM1 4.5L15 4.5L15 3.5L1 3.5L1 4.5Z" fill="#F2F2F2"
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
          title: "Выбор поставщика",
          model: "provider",
          error: "Обязательное поле.",
        },
        {
          title: "Сумма",
          model: "amount",
          error: "Обязательное поле, только цифры.",
        },
      ],
      provider: null,
      amount: null,
    };
  },
  validations: {
    provider: {
      // type: Number,
      // required,
    },
    amount: {
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
.button:hover,
.button:hover .input-block__submit-svg {

  color: darken($color: $color-light, $amount: 40);
  fill: darken($color: $color-light, $amount: 40);
  transition: .1s all ease-in-out;

}

.input-block {

  & + & {
    margin-top: 83px;
  }

  &-wrapper {
    @include error;
    @include input;
    margin-left: 41px;

    max-width: 808px;

    /* переопределение стилей */
    /deep/.input-block {
      
      flex-shrink: 2;
      width: 808px;

      &__title {
        width: 487px;
        font-weight: normal;
        font: 24px/28px Play;
      }

      &__input {
        width: 321px;
      }

    }

    &__title {
      margin: 0 0 45px;
      padding-top: 39px;
      font: 18px/21px Play;
    }

  }

  &__submit {

    background: transparent;
    border: 0;
    margin: 69px auto 78px;
    user-select: none;

    display: block;

    color: $color-pre-light;
    font: 18px/21px Play;
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

@media (max-width: 950px) {

  .input-block-wrapper {
    // @include error;
    // @include input;
    // margin-left: 41px;

    max-width: 508px;

    /* переопределение стилей */
    /deep/.input-block {
      display: block;
      width: 808px;

      &__input {
        width: 351px;
      }

    }

  }

}
</style>