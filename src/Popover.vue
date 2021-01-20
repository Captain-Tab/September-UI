<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Popover",
  data () {
    return {
      visible: false
    }
  },
  methods: {
    computePosition () {
      console.log('computePosition');
      document.body.appendChild(this.$refs.contentWrapper)
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.screenY + 'px'
    },
    clickDocument(e) {
      console.log('clickDocument');
      if( this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return
      }
      this.close()
    },
    open () {
      console.log('open');
      this.visible = true
      this.$nextTick( ()=>{
        this.computePosition()
        document.addEventListener('click', this.clickDocument)
      })
    },
    close() {
      console.log('close');
      this.visible = false
      document.removeEventListener('click', this.clickDocument)
    },
    onClick (e) {
      console.log('onClick');
      if (this.$refs.triggerWrapper.contains(e.target)) {
        this.visible === true ? this.close() : this.open()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper{
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  transform: translateY(-100%);
}
</style>
