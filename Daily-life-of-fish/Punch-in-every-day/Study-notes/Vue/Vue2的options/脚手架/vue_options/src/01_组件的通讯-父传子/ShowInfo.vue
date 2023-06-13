<template>
<div class="info">
  <!-- 在  inheritAttrs: false, 情况下想要拿可以通过-->
  <h2 :class="$attrs.abc">个人info</h2>
  <span>年龄: {{ age }}</span>
  <span>性别: {{ name }}</span>
  <span>身高</span>
  <span>体重</span>
</div>
</template>

<script >
  export default {
    //props接收父组件传来的属性 []写法
    // props: ["name", "age"]
    inheritAttrs: false, //表示父组件传来的非props属性不能再子组件根元素显示
    //props对象语法 required表示必传
    props: {
      name: {
        type: String,
        default: 0,
        required: true
      },
      age: {
        type: [String, Number], //字符或则数字
        default: 0
      },
      friend: {
        type: Object,
        default: () => ({name: "james"})
      }
    }
  }
</script>

<style lang="less" scoped>
</style>