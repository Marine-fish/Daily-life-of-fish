<template>
<div class="app">
    <h2>当前计数:{{num}}</h2>
    <home @subBtn="addBtn"></home>
    <about @addBtn="subBtn"></about>
</div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
    export default {
        components: {
            Home,
            About
        },
        data() {
            return {
                num: 0
            }
        },
        methods: {
            addBtn(num) {
                this.num+=num
            },
            subBtn(num) {
                this.num+=num
            }
        }
    }
</script>

<style lang="less" scoped>
</style>