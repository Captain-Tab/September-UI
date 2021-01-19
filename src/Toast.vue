<template>
  <div class="wrapper" ref="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="closeButton" @click="onClose">
      {{closeButton.text}}
      </span>
    </div>
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
        this.$refs.line.style.height  = `${this.$refs.toast.getBoundingClientRect().height}px`
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
$toast-bg: #ffffff;
$animation-duration: 300ms;
$font-color: #007bff;

@keyframes fade-in {
  0% { opacity: 0 }
  100% { opacity: 1}
}

@keyframes slide-up {
  0% {opacity: 0; transform: translateY(100%);}
  100% {opacity: 1;transform: translateY(0%);}
}

@keyframes slide-down {
  0% {opacity: 0; transform: translateY(-100%);}
  100% {opacity: 1;transform: translateY(0%);}
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  .toast {
    font-size: $font-size;
    min-height: $toast-height;
    background: $toast-bg;
    border-radius: 4px;
    line-height: 1.8;
    display: flex;
    color: $font-color;
    align-items: center;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
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
  }

  &.position-top {
    top: 0;
    .toast {
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
</style>
