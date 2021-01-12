<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
       <slot></slot>
  </div>
</template>

<script>
let validator = (props) => {
  let keys = Object.keys(props)
  let isValid = true
  keys.forEach((item)=>{
    if(!['span', 'offset'].includes(item)){
      isValid = false
    }
  })
  return isValid
}

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
    phone: {
      type: Object,
      validator
    },
    pad: {
      type: Object,
      validator
    },
    smallPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator
    },
    largePc: {
      type: Object,
      validator
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
      let { span, offset, phone, pad, smallPc, pc, largePc } = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone && [`col-phone-${phone.span}`]),
        ...(pad && [`col-pad-${pad.span}`]),
        ...(smallPc && [`col-small-pc-${smallPc.span}`]),
        ...(pc && [`col-pc-${pc.span}`]),
        ...(largePc && [`col-large-pc-${largePc.span}`]),
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

  // autofill in size of phone
  @media (max-width: 576px) {
    $prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n/24) * 100%;;
      }
    }
  }

  // autofill in size of pad
  @media  (min-width: 577px) and (max-width: 768px) {
    $prefix: col-pad-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $prefix: offset-pad-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n/24) * 100%;;
      }
    }
  }


  // autofill in size of small monitor
  @media  (min-width: 769px) and (max-width: 992px) {
    $prefix: col-small-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $prefix: offset-small-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n/24) * 100%;;
      }
    }
  }

  // autofill in size of normal monitor
  @media  (min-width: 993px) and (max-width: 1200px) {
    $prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n/24) * 100%;;
      }
    }
  }

  // autofill in size of large monitor
  @media  (min-width: 1201px) {
    $prefix: col-large-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $prefix: offset-large-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n/24) * 100%;;
      }
    }
  }
}
</style>
