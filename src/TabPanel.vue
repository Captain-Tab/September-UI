<template>
  <div class="tab-panel" :class="panelClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab-panel",
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    panelClass () {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name)=>{
      this.active = name === this.name
    })
  }
}
</script>

<style scoped lang="scss">
.tab-panel{
  &.active {
    background: red;
  }
}
</style>
