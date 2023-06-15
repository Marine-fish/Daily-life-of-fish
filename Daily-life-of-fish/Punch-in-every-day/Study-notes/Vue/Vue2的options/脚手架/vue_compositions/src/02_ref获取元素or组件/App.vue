<template>
<div class="app">
  <h2 ref="h2">app</h2>
  <button ref="btn" @click="getGItem">获取元素</button>
</div>
</template>

<script setup>
import { ref, onMounted} from "vue"
    const h2 = ref()
    const btn = ref()
    const getGItem = () => console.log(h2.value, btn.value)
</script>

<style lang="less" scoped>
</style>