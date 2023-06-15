<template>
<div class="app">
  <h2>app</h2>
</div>
</template>

<script setup>
    /**
     * defineProps来替代了props属性
     * defineEmits替代了emit属性
     * 接收 emit没有this.$emit
     * defineExpose({要暴露出来的值或者方法})
     * 这样通过拿到组件实例就去取调用实例上的方法了
     */
    const props = defineProps({

    })
    const mix = defineEmits(["事件名字"])
    defineExpose({})
</script>

<style lang="less" scoped>
</style>