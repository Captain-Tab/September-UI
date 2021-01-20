<template>
  <div class="popover" @click.stop="showUp">
    <div class="wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
    showUp() {
      this.visible = !this.visible

      console.log('visible', this.visible)
      if(this.visible === true) {
        const a = () =>{
          console.log('tss')
        }
         this.$nextTick(()=>{
          let eventHandler = () =>{
            this.visible = false
            console.log('在这里')
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
      } else {
        console.log('隐藏popover了')
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
  .wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
}
</style>
