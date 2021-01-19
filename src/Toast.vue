<template>
  <div class="toast" ref="wrapper" :class="toastClass">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="closeButton" @click="onClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 5
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >=0
      }
    },
    closeButton :{
      type: Object,
      default () {
        return {
          text:'关闭',
          callback: undefined
        }
      }
    }
  },
  computed: {
    toastClass () {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClose () {
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    updateStyles () {
      this.$nextTick( ()=> {
        this.$refs.line.style.height  = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    closeTab () {
      if (this.autoClose) {
        setTimeout(()=>{
          this.close()
        },this.duration * 1000)
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.closeTab()
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-height;
  line-height: 1.8;
  display: flex;
  position: fixed;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  left: 50%;
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }

  .closeButton {
    padding-left: 16px;
    flex-shrink: 0;
  }

  .line {
    height: 100%;
    border-left: 1px solid #aaa;
    margin-left: 16px;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
