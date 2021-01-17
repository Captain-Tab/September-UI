<template>
  <div class="toast"></div>
</template>

<script>
import  Vue from 'vue'
Vue.prototype.$toast = function () {
  console.log('我是一个toast')
}
export default {
  name: "Toast"
}
</script>

<style lang="scss" scoped>

</style>
