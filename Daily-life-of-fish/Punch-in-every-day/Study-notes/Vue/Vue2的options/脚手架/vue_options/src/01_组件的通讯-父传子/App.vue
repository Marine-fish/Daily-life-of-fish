<template>
<div class="app">
  <!-- 引入子组件 -->
  <!-- 
      在父组件填写属性 
      在父组件写的属性没在子组件定义, 那么定义的属性会在子组件的根元素上常见的class, style id
  -->
  <Show-Info name="mike" age="16" abc="哈哈哈"></Show-Info>
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