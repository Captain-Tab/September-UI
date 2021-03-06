<template>
    <div>
      <s-button>默认按钮</s-button>
      <s-button icon="setting">默认按钮</s-button>
      <s-button loading="true">默认按钮</s-button>

      <pre>
        <code>{{content}}</code>
      </pre>
    </div>
</template>

<script>
import Button from "../../../src/Button";
export default {
  name: "button-demo.vue",
  components: {
    's-button': Button
  },
  data () {
    return {
      content: `
        <s-button>默认按钮</s-button>
        <s-button icon="setting">默认按钮</s-button>
        <s-button loading="true">默认按钮</s-button>
      `
    }
  }
}
</script>

<style scoped>

</style>
