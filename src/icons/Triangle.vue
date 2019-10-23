<template>
  <div class="triangle">
    <svg
      width="24" height="23" 
      viewBox="0 0 24 23" fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M8.4189 20.757C5.2872 22.3439 1.59163 20.3659 1.63419 17.1257L1.77981 6.03791C1.824 2.67393 5.83445 0.488847 8.92676 2.14392L19.4975 7.80159C22.5898 9.45666 22.3865 13.6794 19.1352 15.3269L8.4189 20.757Z" 
        :stroke="colorProp" stroke-width="3"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Triangle",
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