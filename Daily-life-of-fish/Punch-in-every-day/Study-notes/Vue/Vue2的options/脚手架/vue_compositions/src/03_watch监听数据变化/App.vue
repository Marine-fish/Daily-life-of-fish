<template>
<div class="app">
  <h2>{{ message }}</h2>
  <button @click="changeMessage">切换message</button>
</div>
</template>

<script setup>
    import { ref, watch } from "vue"
    const message = ref("Hello Word")
    const changeMessage = () => message.value = "你好 文档"
    watch(message , (newValue, oldValue) => console.log(newValue, oldValue))
</script>

<style lang="less" scoped>
</style>