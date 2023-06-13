<template>
<div class="home">
  <button @click="subBtn(-5)">-5</button>
  <button @click="subBtn(-10)">-10</button>
  <button @click="subBtn(-15)">-15</button>
  <button @click="subBtn(-20)">-20</button>
</div>
</template>

<script>
    export default {
        methods: {
            subBtn(num) {
                this.$emit("subBtn", num)
            }
        },
    }
</script>

<style lang="less" scoped>
</style>