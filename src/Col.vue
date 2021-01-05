<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    span: [Number, String]
  }
}
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background: gray;
  width: 50%;
  border: 1px solid red;
  flex-shrink: 0;

  $prefix: col-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>
