<template>
<div class="about">
  <button @click="addBtn(1)">+1</button>
  <button @click="addBtn(5)">+5</button>
  <button @click="addBtn(10)">+10</button>
  <button @click="addBtn(20)">+20</button>
</div>
</template>

<script >
    export default {
        // emits: ["addBtn"], //指定由子组件发出的事件名称,在父组件使用时会有提示 数组语法
        emits: {
            // addBtn: null, //表示这个事件不用验证
            addBtn: function(num) {
                if (num <= 20) {
                    return true
                }
                return false
            }
        },
        methods: {
            addBtn(num) {
                this.$emit("addBtn", 50)
            }
        }
    }
</script>

<style lang="less" scoped>
</style>