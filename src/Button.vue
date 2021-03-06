<template>
  <button class="s-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <s-icon class="icon"  v-if="icon && !loading" :name="icon"></s-icon>
    <s-icon class="loading icon" v-if="loading"  name="loading"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from 'vue'
import Icon from "./Icon";
export default {
  components: {
    's-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition:{
      type: String,
      default: 'left',
      validator (value) { // 属性检查器
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>

<style scoped lang="scss">
$button-height: 32px;
$font-size: 14px;
$button-bg: #FFFFFF;
$button-active-bg: #007bff;
$border-radius: 4px;
$color: #007bff;
$border-color: #007bff;;
$border-color-hover: #666;
$box-show: 0 0 0 0.2rem rgba(0, 123, 255, .5);

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.s-button {
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  color: $color;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: $border-color;
  }

  &:active {
    background-color: $button-active-bg;
    box-shadow: $box-show;
    color: #FFFFFF;
  }

  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }
  .loading{
    animation: spin 2s infinite linear;
  }
}
</style>
