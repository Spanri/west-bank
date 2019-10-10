<template>
  <div class="bill-or-card">
    <h1>{{ $route.params.id }}</h1>
    <div class="item bill-or-card__item">
      <div class="item-without-currency">
        <svg class="item__number-svg" width="112" height="73" viewBox="0 0 112 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z" stroke="#2094E8" stroke-width="2"/>
          <path d="M3.65456 1H108.345C109.805 1 111 2.1931 111 3.67882V69.3212C111 70.8069 109.805 72 108.345 72H3.65456C2.19471 72 1 70.8069 1 69.3212V3.67882C1 2.1931 2.19471 1 3.65456 1Z" stroke="url(#paint0_linear)" stroke-opacity="0.65" stroke-width="2"/>
          <defs>
          <linearGradient id="paint0_linear" x1="17.7561" y1="-8.73788" x2="64.0132" y2="68.1811" gradientUnits="userSpaceOnUse">
          <stop offset="0.0208333" stop-color="white" stop-opacity="0.4"/>
          <stop offset="0.494792" stop-color="white" stop-opacity="0.78"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
        <span class="item__number">
          <svg class="item__number-svg" width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37.7731" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
            <circle cx="22.0841" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
            <circle cx="6.39518" cy="6.9235" r="6.10123" fill="#F2F2F2"/>
            <rect y="1" width="44" height="30" fill="none"/>
          </svg>
          {{ item.number }} 
        </span>
        <span class="item__money">
          {{ item.money }}
        </span>
      </div>
      <span class="item__currency">
        {{ 
          item.currency == 0 ? '₽' :
          item.currency == 1 ? 'долларов' :
          item.currency == 2 ? 'евро' :
          'че'
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillOrCard',
  data() {
    return {
      item: {
        
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bill-or-card {

}
</style>