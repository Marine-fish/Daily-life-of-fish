<template>
<div class="app">
    <About :info="['鞋子', '衣服', '帽子']"></About>
</div>
</template>

<script>
import About from "./About.vue"
export default {
    components: {
        About
    },
    data() {
        return {
            activeIndex: 0
        }
    }
}

</script>

<style lang="less" scoped>
   
</style>