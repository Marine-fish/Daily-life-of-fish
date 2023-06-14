<template>
<div class="home">
  <h2>{{message}}</h2>
  <slot></slot>
</div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                default: "我是默认值"
            }
        }
    }
</script>

<style lang="less" scoped>
</style>