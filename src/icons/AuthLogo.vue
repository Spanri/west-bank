<template>
  <div class="logo">
    <svg
      width="24" height="26"
      viewBox="0 0 24 26" fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 21.16V25H23V1H7V5.8" :stroke="colorProp"
        stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="bevel"
      />
      <path 
        d="M1 12.25C0.585786 12.25 0.25 12.5858 0.25 13C0.25 13.4142 0.585786 13.75 1 13.75L1 12.25ZM17.5303 13.5303C17.8232 13.2374 17.8232 12.7626 17.5303 12.4697L12.7574 7.6967C12.4645 7.40381 11.9896 7.40381 11.6967 7.6967C11.4038 7.98959 11.4038 8.46447 11.6967 8.75736L15.9393 13L11.6967 17.2426C11.4038 17.5355 11.4038 18.0104 11.6967 18.3033C11.9896 18.5962 12.4645 18.5962 12.7574 18.3033L17.5303 13.5303ZM1 13.75L17 13.75V12.25L1 12.25L1 13.75Z" :fill="colorProp"
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