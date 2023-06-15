<template>
<div class="home">
  <h2>home-{{ name }}-{{ age }}</h2>
  <button @click="homeBtN">homeBtN</button>
</div>
</template>

<script >
export default {
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
    emits: ["homeBtN"],
    methods: {
        homeBtN() {
            this.$emit("homeBtN", 1)
        }
    }
}

</script>

<style lang="less" scoped>
</style>