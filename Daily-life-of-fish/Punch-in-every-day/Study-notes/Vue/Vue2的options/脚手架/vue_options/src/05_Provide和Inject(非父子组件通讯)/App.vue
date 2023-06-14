<template>
<div class="app">
  <h2>app下面的home</h2>
  <h3>{{ message }}</h3>
  <button @click="message='哈哈哈'">修改message</button>
  <Home></Home>
</div>
</template>

<script >
import { computed } from "vue"
import Home from './Home.vue';
export default {
    components: {
        Home
    },
    data() {
        return {
            message: "我是data里的内容"
        }
       
    },
    // provide: { //向组件传递的数据
    //     name: 'per',
    //     age: 23
    // }
    // provide() {
    //     return {
    //         name: 'jack',
    //         age: 25,
    //         message: this.message
    //     }
    // }
    //解决祖先组件修改数据,但是无法修改子组件的内容
    provide() {
        return {
            name: 'jack',
            age: 25,
            message: computed(() => this.message)
        }
    }
}

</script>

<style lang="less" scoped>
</style>