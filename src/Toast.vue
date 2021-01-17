<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
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
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClose () {
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(()=>{
        this.close()
      },this.duration * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.50) ;
  color: #FFFFFF;
  padding:  0 16px;
}
.closeButton {
  padding-left: 16px;
}
.line {
  height: 100%;
  border-left: 1px solid #aaa;
  margin-left: 16px;
}
</style>
