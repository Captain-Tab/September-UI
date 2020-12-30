<template>
  <div class="wrapper">
    <label>
      <input
          type="text"
          :value="value"
          :disabled="disabled"
      >
    </label>
  </div>
</template>

<script>
export default {
name: "s-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,0.5);
.wrapper {
  font-size: $font-size;
  display: inline-block;
  > label > input {
    height: 32px;
    border: 1px solid $border-color;
    padding: 0 8px;
    font-size: inherit;
    border-radius: $border-radius;
    &:hover {
      //border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
}
</style>
