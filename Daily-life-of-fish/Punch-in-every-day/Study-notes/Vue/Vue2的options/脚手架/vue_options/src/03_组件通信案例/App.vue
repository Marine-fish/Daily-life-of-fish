<template>
<div class="app">
    <About :info="['鞋子', '衣服', '帽子']" @activeIndex="activeIndex"></About>
    <h2>{{ infoContent[index] }}</h2>
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
            infoContent: ["衣服的页面", "裤子的页面", "鞋子的页面"],
            index: 0
        }
    },
    methods: {
        activeIndex(index) {
            this.index = index
        }
    }
}

</script>

<style lang="less" scoped>
   
</style>