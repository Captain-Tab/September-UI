<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Tab",
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
  methods: {
    checkChildren () {
      if(this.$children.length === 0) {
        console.warn('Warning: You should create Tab-head and Tab-body as children component')
      }
    },
    selectTab () {
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
  },
  mounted() {
     this.checkChildren();
     this.selectTab()
  }
}
</script>

<style scoped lang="scss">
.tab{

}
</style>
