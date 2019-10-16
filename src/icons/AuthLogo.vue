<template>
  <div class="logo">
    <svg 
      width="24" height="26" 
      viewBox="0 0 24 26" fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M7 21.16V25H23V1H7V5.8" :stroke="colorProp" 
        stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="bevel"
      />
      <path 
        d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L1 12ZM17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929L11.3431 5.92893C10.9526 5.53841 10.3195 5.53841 9.92893 5.92893C9.53841 6.31946 9.53841 6.95262 9.92893 7.34315L15.5858 13L9.92893 18.6569C9.53841 19.0474 9.53841 19.6805 9.92893 20.0711C10.3195 20.4616 10.9526 20.4616 11.3431 20.0711L17.7071 13.7071ZM1 14L17 14V12L1 12L1 14Z" 
        :fill="colorProp"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white",
    },
  },
  watch: {
    color(newVal) {
      this.colorProp = newVal;
    },
  },
  data() {
    return {
      colorProp: this.color,
    };
  },
};
</script>