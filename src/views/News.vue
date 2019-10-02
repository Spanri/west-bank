<template>
  <div class="home">
    <div class="rectangles-and-card">
      <div class="rectangles-and-card__first"></div>
      <div class="rectangles-and-card__second"></div>
      <Ad class="rectangles-and-card__ad"/>
      <img src="../assets/card.svg" alt="Банковская карта" width="384" height="220" class="rectangles-and-card__card">
    </div>
    <div class="currency">
      <table class="currency_rates">
        <tr>
          <th class="tg-0lax" colspan="4">Курсы</th>
        </tr>
        <tr>
          <td class="tg-0lax"></td>
          <td class="tg-0lax">Покупка</td>
          <td class="tg-0lax">Продажа</td>
        </tr>
        <tr>
          <td class="tg-0lax">fg</td>
          <td class="tg-0lax">fg</td>
          <td class="tg-0lax">fg</td>
        </tr>
        <tr>
          <td class="tg-0lax">fg</td>
          <td class="tg-0lax">fg</td>
          <td class="tg-0lax">fg</td>
        </tr>
      </table>
      <table class="currency__converter">
        <tr>
          <th class="tg-0lax" colspan="2">Конвертер</th>
        </tr>
        <tr>
          <td class="tg-0lax">10000</td>
          <td class="tg-0lax">Р</td>
        </tr>
        <tr>
          <td class="tg-0lax">134</td>
          <td class="tg-0lax">Е</td>
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
  &__first {
    position: relative;
    right: 1500px;
    width: calc(720px + 1500px);
    height: 220px;
    background: rgba(45, 155, 219, 0.5);
    margin-top: 65px;
  }

  &__second {
    position: relative;
    top: -85px;
    right: 1500px;
    width: calc(968px + 1500px);
    height: 257px;
    background: rgba(45, 155, 219, 0.8);
  }

  &__ad {
    position: relative;
    top: -117px;
    right: 1500px;
    width: 2666px;
    margin-bottom: 73px;
  }

  &__card {
    overflow: hidden;
    position: absolute;
    bottom: 590px;
    left: 700px;
    margin-bottom: -220px;
    transform: rotate(-15deg);
    box-shadow: 3px 6px 4px rgba(0, 0, 0, 0.3), inset -2px -4px 0px rgba(0, 0, 0, 0.25);
  }
}

.currency {
  margin-bottom: 50px;
}
</style>
