<template>
  <div class="col"
       :class="[span && `col-${span}`, offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"
  >
     <div style="border: 1px solid green; height: 100px">
       <slot></slot>
     </div>
  </div>
</template>

<script>
export default {
  name: "Col",
  data () {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  }
}
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  width: 50%;

  $prefix: col-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      margin-left: ($n/24) * 100%;;
    }
  }
}
</style>
