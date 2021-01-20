<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Tab",
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      console.warn('Warning: You should create Tab-head and Tab-body as children component')
    }
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'Tab-head') {
        const TabHead = vm.$children
        TabHead.forEach((childVm)=>{
          if(childVm.$options.name === 'Tab-item' && childVm['name'] === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">
.tab{

}
</style>
