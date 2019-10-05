<template>
  <div class="input-block-wrapper">
    <div
      class="input-block"
      v-for="(block, index) in blocks"
      :key="index"
    >
      <span class="input-block__title">{{block.title}}</span>
      <input
        class="input-block__input" 
        :v-model="block.model"
        :required="block.required"
        :type="block.type"
        :class="{invalid: block.model.$invalid}"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    blocks: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-block {
  width: 714px;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-top: 45px;

  &:last-child {
    margin-bottom: 69px;
  }

  &__input {
    width: 529px;
    height: 26px;

    background: #4F4F4F;
    border-radius: 10px;
    border: 0;
    padding: 8px 15px;

    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__title {
    align-self: flex-end;

    color: $color-light;
    font-family: Play;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.08em;
  }
}
</style>
