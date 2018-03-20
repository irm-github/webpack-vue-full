<template lang="html">
  <div class="app">
    <h1>App 组件</h1>
    <my-header></my-header>
  </div>
</template>

<script>
import Header from '@COMPONENTS/Header.vue';
export default {
  components: {
    MyHeader: Header,
  },
  mounted () {
  },
}
</script>

<style lang="less" scoped>
</style>
