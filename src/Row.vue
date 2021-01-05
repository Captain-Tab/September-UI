<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Row"
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
}
</style>
