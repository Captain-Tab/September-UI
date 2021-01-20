<template>
  <div class="tab-item" :class="itemClass" @click="switchTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab-item",
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  methods:{
    switchTab () {
      this.eventBus.$emit('update:selected', this.name)
    }
  },
  computed: {
    itemClass () {
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
.tab-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
    background: red;
  }
}
</style>
