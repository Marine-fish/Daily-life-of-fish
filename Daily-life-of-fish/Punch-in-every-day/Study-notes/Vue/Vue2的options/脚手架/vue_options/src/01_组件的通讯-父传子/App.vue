<template>
<div class="app">
  <!-- 引入子组件 -->
  <!-- 在父组件填写属性 -->
  <Show-Info name="mike" age="16"></Show-Info>
  <Show-Info name="jack" age="20"></Show-Info>
  <Show-Info ></Show-Info>
</div>
</template>

<script>
    import ShowInfo from "./ShowInfo.vue";

    export default {
      components: {
    ShowInfo,
    ShowInfo
}
    }
</script>

<style lang="less" scoped>
</style>