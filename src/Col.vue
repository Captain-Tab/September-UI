<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
       <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Col",
  data () {
    return {
      gutter: 0,
    }
  },
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  computed: {
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    },
    colClass () {
      let { span, offset } = this
      return [
          span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  height: 100px;
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
