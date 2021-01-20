<template>
  <div class="tab-item" :class="itemClass" @click="switchTab" :data-name="name">
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
      if(this.disabled){return }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  computed: {
    itemClass () {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    if(this.eventBus) {
      this.eventBus.$on('update:selected', (name)=>{
        this.active = name === this.name
      })
    }
  }
}
</script>

<style scoped lang="scss">
$blue: blue;
$disabled-text-color: grey;

.tab-item {
  flex-shrink: 0;
  padding: 0 1.5em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active{
    color: $blue;
    font-weight: bold;
  }
  &.disabled{
    color: $disabled-text-color;
    cursor: not-allowed;
}
}
</style>
