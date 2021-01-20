<template>
  <div class="tab-head">
    <slot></slot>
    <div class="wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab-head",
  inject: ['eventBus'],
  // created() {
  //   this.$emit('update:selected', 'head抛出的数据')
  // }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;

.tab-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  >.wrapper {
    margin-left: auto;
  }
}
</style>
