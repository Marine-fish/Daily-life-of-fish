<template>
<div class="home">
  <h2>计数器:{{ num }}</h2>
  <button @click="addNum(1)">+1</button>
  <button @click="subNum(-1)">-1</button>

  <input type="text" v-model="from.username">
  <input type="password" v-model="from.password">
  <h1>{{ from.username }}--{{ from.password }}</h1>
</div>
</template>

<script setup>
  import { ref, reactive } from "vue"
  let num = ref(0)
  const addNum = (nums) => num.value+=nums
  const subNum = (nums) => num.value+=nums

  const from = reactive({
    username: '',
    password: ''
  })
</script>

<style lang="less" scoped>
</style>