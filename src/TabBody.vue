<template>
  <div class="tab-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab-body",
  inject: ['eventBus']
}
</script>

<style scoped lang="scss">
.tab-body {

}
</style>
