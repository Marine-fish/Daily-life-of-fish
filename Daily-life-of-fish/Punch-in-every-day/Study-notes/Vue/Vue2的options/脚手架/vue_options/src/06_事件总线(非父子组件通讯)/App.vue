<template>
<div class="app">
  <h2>app</h2>
  <h1>{{ num }}</h1>
  <button @click="showType">显示or隐藏About组件的内容</button>
  <Home></Home>
</div>
</template>

<script >
/**
 * hy-event-store事件总线的使用
 */
import eventBus from "./utils/event-bus"
import Home from './Home.vue';
export default {
    components: {
        Home,
    },
    data() {
      return {
        num: 0,
        type: true
      }
    },
   created() {
      //发送网络请求

      //事件监听
      eventBus.on("aboutEvent", this.aboutEvent)
   },
   methods: {
    showType() {
      eventBus.emit("showType", this.type)
    },
    aboutEvent() {

    }
   },
   unmounted() {
    eventBus.off("aboutEvent")
   }
}
</script>

<style lang="less" scoped>
</style>