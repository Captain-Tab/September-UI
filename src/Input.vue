<template>
  <div class="wrapper" :class="[errorText? 'error': '']" >
    <label>
      <input
          type="text"
          :value="value"
          :disabled="disabled">
    </label>
    <template v-if="errorText">
      <icon name="error" class="icon"></icon>
      <span class="message">{{ errorText }}</span>
    </template>

  </div>
</template>

<script>
import Icon from "./Icon";
export default {
name: "s-input",
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: ''
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
$red: #F1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: .5em;
  }
  > label > input {
    height: 32px;
    border: 1px solid $border-color;
    padding: 0 8px;
    font-size: inherit;
    border-radius: $border-radius;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled], &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  .icon {
    fill: $red;
  }
  .message {
    color: $red;
  }
}
.error {
  > label > input {
    border: 1px solid $red;
  }
}
</style>
