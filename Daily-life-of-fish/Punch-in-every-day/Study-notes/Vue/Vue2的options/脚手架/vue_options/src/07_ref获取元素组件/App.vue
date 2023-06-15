<template>
<div class="app">
  <h2 ref="h2">app</h2>
  <span ref="span">你好</span>
  <button @click="btn">获取元素</button>
  <Home ref="home"></Home>
</div>
</template>

<script>
import Home from './Home.vue';
    export default {
        components: {
            Home
        },
        methods: {
            btn() {
                //通过$ref对象获取元素
                console.log(this.$refs.h2)
                console.log(this.$refs.span)

                //获取组件实例 就可以操作这个组件里的方法
                console.log(this.$refs.home)
                //获取组件里的元素
                console.log(this.$refs.home.$el)
            }
        }
    }
</script>

<style lang="less" scoped>
</style>