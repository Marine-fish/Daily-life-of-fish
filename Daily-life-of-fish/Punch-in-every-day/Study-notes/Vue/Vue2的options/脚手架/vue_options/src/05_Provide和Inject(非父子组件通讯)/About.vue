<template>
<div class="about">
  <span>about-{{ name }}--{{ age }}-{{ message }}</span>
</div>
</template>

<script>
    export default {
        inject: ["name", "age", "message"] //将祖先组件的数据进行接收
    }
</script>

<style lang="less" scoped>
</style>