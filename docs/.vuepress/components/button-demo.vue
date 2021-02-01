<template>
    <div>
      <s-button>默认按钮</s-button>
      <s-button icon="setting">默认按钮</s-button>
    </div>
</template>

<script>
import Button from "../../../src/Button";
export default {
  name: "button-demo.vue",
  components: {
    's-button': Button
  }
}
</script>

<style scoped>

</style>
