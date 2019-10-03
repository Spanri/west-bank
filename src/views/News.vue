<template>
	<div class="home">
		<div class="rectangles-and-card">
			<div class="rectangles-and-card__first"></div>
			<div class="rectangles-and-card__second"></div>
			<Ad class="rectangles-and-card__ad"/>
			<img src="../assets/card.svg" alt="Банковская карта" width="384" height="220" class="rectangles-and-card__card">
		</div>
		<div class="currency">
			<table class="currency__rates">
				<tr class="currency__title">
					<th colspan="4">Курсы</th>
				</tr>
				<tr>
					<td class="currency__subtitle"></td>
					<td class="currency__subtitle">Покупка</td>
					<td class="currency__subtitle">Продажа</td>
				</tr>
				<tr>
					<td class="currency__type">
						<select class="select currency__type-select">
							<option class="select__item">USD</option>
							<option selected class="select__item">EUR</option>
							<option class="select__item">GBP</option>
							<option class="select__item">CHF</option>
						</select>
					</td>
					<td class="currency__value">65,66</td>
					<td class="currency__value">67,85</td>
				</tr>
				<tr>
					<td class="currency__type">
						<select class="select currency__type-select">
							<option class="select__item">USD</option>
							<option class="select__item">EUR</option>
							<option selected class="select__item">GBP</option>
							<option class="select__item">CHF</option>
						</select>
					</td>
					<td class="currency__value">72,12</td>
					<td class="currency__value">74,57</td>
				</tr>
			</table>
			<table class="currency__converter">
				<tr class="currency__title">
					<th colspan="2">Конвертер</th>
				</tr>
				<tr>
					<td class="currency__value">10000</td>
					<td class="currency__symbol">
						<select class="select currency__symbol-select">
							<option class="select__item">$</option>
							<option class="select__item">₽</option>
							<option selected class="select__item">€</option>
							<option class="select__item">£</option>
							<option class="select__item">CHf</option>
						</select>
					</td>
				</tr>
				<tr>
					<td class="currency__value">134,10</td>
					<td class="currency__symbol">
						<select class="select currency__symbol-select">
							<option class="select__item">$</option>
							<option class="select__item">₽</option>
							<option selected class="select__item">€</option>
							<option class="select__item">£</option>
							<option class="select__item">CHf</option>
						</select>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Ad from '@/components/Ad.vue'

export default {
	name: 'news',
	components: {
		Ad
	}
}
</script>

<style scoped lang="scss">
.home {
	height: auto;
	color: white;
	position: relative;
}

.rectangles-and-card {
	// position: relative;
	height: 603px;

	&__first {
		position: absolute;
		top: 65px;
		left: calc((100vw - 1440px)/2 * (-1));
		width: calc((100vw - 1440px)/2 + 720px);
		height: 220px;
		background: rgba(45, 155, 219, 0.5);
	}

	&__second {
		position: absolute;
		top: 150px;
		left: calc((100vw - 1440px)/2 * (-1));
		width: calc((100vw - 1440px)/2 + 908px);
		height: 257px;
		background: rgba(45, 155, 219, 0.8);
	}

	&__ad {
		position: absolute;
		top: 267px;
		left: calc((100vw - 1440px)/2 * (-1));
		width: calc((100vw - 1440px)/2 + 1166px);
	}

	&__card {
		position: absolute;
		top: 289px;
		left: 650px;
		margin-bottom: -220px;
		transform: rotate(-15deg);
		box-shadow: 3px 6px 4px rgba(0, 0, 0, 0.3), inset -2px -4px 0px rgba(0, 0, 0, 0.25);
	}
}

.currency {
	margin-bottom: 158px;
	display: flex;
	justify-content: center;
	color: #F2F2F2;
	text-align: left;

	&__rates {
		margin-right: 221px;
		margin-left: 232px;
		width: 431px;
	}

	&__converter {
		width: 232px;
	}

	&__title {
		height: 65px;
		vertical-align: top;
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 28px;
	}

	&__subtitle {
		height: 65px;
		vertical-align: top;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 28px;
	}

	&__value {
		height: 65px;
		font-family: Play;
		font-style: normal;
		font-weight: normal;
		font-size: 36px;
		line-height: 42px;
	}

	&__type {
		position: relative;

		&-select {
			color: #6FCF97;
		}

		&::before{
			content: "▼";
			color: #F2F2F2;
			position: absolute;
			left: 0;
			top: 25px;
			pointer-events: none;
			display: inline-block;
			width: 24px;
			height: 24px;
		}
	}

	&__symbol {
		position: relative;

		&-select {
			color: #F2F2F2;
		}

		&::before{
			content: "▼";
			color: #F2F2F2;
			position: absolute;
			left: 35px;
			top: 50px;
			pointer-events: none;
			display: inline-block;
			width: 24px;
			height: 24px;
		}
	}
}

.select {
	display: block;
	width: 100%;
	height: 65px;
	box-sizing: border-box;
	padding-left: 26px;
	border: none;
	appearance: none;
	background-color: transparent;
	margin-right: 53px;

	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 42px;

	&__item {
		background: #F2F2F2;
		border: 0;
		color: black;
	}

	&::-ms-expand {
		display: none;
	}

	&:active {
		transition: all ease-in-out 1s;
		transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
		transition-duration: 0.15s, 0.15s;
		transition-timing-function: ease-in-out, ease-in-out;
		transition-delay: 0s, 0s;
	}
}

@media (max-width: 1440px) {
	.rectangles-and-card {

		&__first {
			left: 0;
			width: 720px;
		}

		&__second {
			left: 0;
			width: 908px;
		}

		&__ad {
			left: 0;
			width: 1166px;
		}
	}
}
</style>
