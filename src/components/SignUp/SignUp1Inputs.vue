<template>
  <form class="input-block-wrapper" @submit.prevent="submit">
    <div 
      class="input-block" 
      v-for="(block, index) in blocks" :key="index"
    >
      <p class="input-block__title">
        {{ block.title }}
      </p>
      <input
        v-if="block.model != 'phone'"
        class="input-block__input"
        :class="{
          'input-error': $v[block.model].$invalid && $v[block.model].$dirty,
          'input-success': !$v[block.model].$invalid}"
        v-model="$v[block.model].$model"
        :placeholder="block.placeholder ? block.placeholder : ''"
        :type="block.type ? block.type : 'text'"
      />
      <!-- для телефона, с маской (v-mask) -->
      <input
        v-else class="input-block__input"
        :class="{
          'input-error': $v[block.model].$invalid && $v[block.model].$dirty,
          'input-success': !$v[block.model].$invalid}"
        v-model="$v[block.model].$model"
        :placeholder="block.placeholder ? block.placeholder : ''"
        :type="block.type ? block.type : 'text'"
        v-mask="'+7 (###) ###-##-##'"
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
    </div>
    <br />
  </form>
</template>

<script>
import { required, minLength, email, } from 'vuelidate/lib/validators';

export default {
  name: "SignUp1Inputs",

  data() {
    return {
      blocks: [
        {
          title: "Фамилия *",
          model: "lastName",
          error: "Обязательное поле.",
        },
        {
          title: "Имя *",
          model: "firstName",
          error: "Обязательное поле.",
        },
        {
          title: "Отчество *",
          model: "patronymic",
          error: "Обязательное поле.",
        },
        {
          title: "Телефон *",
          type: "tel",
          placeholder: "+7 (###) ###-##-##",
          model: "phone",
          error: "Обязательное поле, 10 цифр.",
        },
        { 
          title: "Email", 
          // type: "email",
          model: "email", 
          error: "Невалидный email.", 
        },
      ],
      lastName: null,
      firstName: null,
      patronymic: null,
      phone: null,
      email: null,
      errors: [],
    };
  },

  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    patronymic: {
      required,
    },
    phone: {
      required,
      minLength: minLength(18),
    },
    email: {
      email,
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("next");
      }
    },
    
    patternPhone(model, initial) {
      if (model == "phone") {
        initial = initial.replace(
          /[^0-9]/,
          initial.substring(0, initial.length - 2)
        );
        initial = initial.replace(/[0-9]{3}$/, " - ");
        console.log(initial);
        return initial;
      } else {
        return initial;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input-block-wrapper {
  @include error;
  @include input;
}
</style>