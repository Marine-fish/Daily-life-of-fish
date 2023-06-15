<template>
<div class="home">
  <h2>home-{{ name }}-{{ age }}</h2>
  <h1>{{ mum }}</h1>
  <button @click="addNum">home+1</button>
  <button @click="homeBtN">homeBtN</button>
</div>
</template>

<script >
export default {
    name: 'home',
    props: {
        name: {
            type: String,
            default: "我是默认值"
        },
        age: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            mum: 0
        }
    },
    emits: ["homeBtN"],
    methods: {
        homeBtN() {
            this.$emit("homeBtN", 1)
        },
        addNum() {
            this.mum++
        }
    },
     //专门针对keep-alive组件创建了两个生命周期函数用来监听离开和进入
     activated() {
        console.log("进入")
    },
    deactivated() {
        console.log("离开")
    }
}

</script>

<style lang="less" scoped>
</style>