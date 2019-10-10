<template>
	<form
		class="signup2"
		@submit.prevent="submit"
	>
		<p class="signup2__title">Регистрация</p>
		<div class="input-block-wrapper">
			<div
				class="input-block"
				v-for="(block, index) in blocks"
				:key="index"
			>
				<span class="input-block__title" :class="block.model == 'passwordRepeat' ? 'input-block__title-password' : ''" v-html="block.title"></span>
				<b-form-input
					class="input-block__input"
					:type="(block.model == 'password' || block.model == 'passwordRepeat') ? 'password' : 'text'"
					v-model="$v[block.model].$model"
					:state="$v[block.model].$dirty ? !$v[block.model].$error : null"
					:aria-describedby="`input-block__invalid-feedback-${block.model}`"
				></b-form-input>
				<b-form-invalid-feedback :id="`input-block__invalid-feedback-${block.model}`">
					{{ block.error }}
				</b-form-invalid-feedback>
				<p v-if="block.model == 'password'" class="input-block__description">
					Пароль должен содержать не менее 8 символов, должны присутствовать 
					строчные и заглавные буквы, должен присутствовать один из символов 
					!»№;%:?*?(), должны присутствовать цифры, не должны присутствовать 
					повторяющиеся символы в нижнем и верхнем регистре.
				</p>
			</div>
		</div>
		<button type="submit" class="button signup2__button">
			Зарегистрироваться
		</button>
		<br>
		<p class="signup2__login">
			Уже есть аккаунт?<br>
			<router-link to="login" class="button signup2__login-button">Войти</router-link>
		</p>
	</form>
</template>

<script>
// import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
	name: 'SignUp2',
	data() {
		return {
			blocks: [
				{title: 'Логин *', model: 'login', error: 'Обязательное поле, минимум 4 символа.',},
				{title:'Пароль *', model: 'password', error: 'Пароль не соответствует правилам.',},
				{title:'Повторите<br>пароль *', model: 'passwordRepeat', error: 'Пароли должны совпадать.',},
			],
			login: '',
			password: '',
			passwordRepeat: '',
		};
	},
	validations: {
		login: {
			// required,
			// minLength: minLength(4)
		},
		password: {
			// required,
			// goodPassword:(password) => {
			// 	return password.length >= 8 &&
			// 	/[a-z]/.test(password) &&
			// 	/[A-Z]/.test(password) &&
			// 	/[0-9]/.test(password) &&
			// 	/[!»№;%:?*?()]/.test(password)
			// }
		},
		passwordRepeat: {
			// required,
			// sameAsPassword: sameAs('password')
		},
	},
	methods: {
		submit(){
			this.$v.$touch();
			if(!this.$v.$invalid){
				this.$store.dispatch('register')
				.then(() => {
					this.$emit('next', 'SignUp3');
				});				
			}
		},
	},
};
</script>

<style scoped lang="scss">
.button:hover, .button:hover .signup1__button-svg {
	color: darken($color: $color-light, $amount: 40);
	fill: darken($color: $color-light, $amount: 40);
	transition: 0.1s all ease-in-out;
}

.signup2 {
	height: auto;
	
	color: $color-light;

	&__title {
		color: white;
		margin: 88px 0 111px 155px;

		font-family: Play;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 28px;
	}

	&__button {
		background: transparent;
		border: 0;
		margin-left: 155px;
		margin-top: 90px;
		margin-bottom: 80px;

		color: $color-main;
		font-family: Play;
		font-style: normal;
		font-weight: normal;
		font-size: 36px;
		line-height: 144.2%;
		text-align: center;

		&:hover {
			color: darken($color: $color-main, $amount: 20);
			transition: 0.1s all ease-in-out;
		}
	}

	&__login {
		font-family: Play;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 35px;
		text-align: center;

		margin-left: 155px;
		margin-bottom: 348px;

		&-button {
			font-size: 36px;
			line-height: 144.2%;
			color: $color-light;
			text-decoration: none;			
		}
	}
}
</style>
