<template>
<div class="about">
  <h2 v-show="showType">about的内容</h2>
  <button @click="addBtn(1)">+1</button>
</div>
</template>

<script>
import eventBus from "./utils/event-bus"

export default {
  data() {
    return {
      showType: true
    }
  },
  methods: {
    addBtn(num) {
      eventBus.emit("aboutEvent", num)
    }
  },
  created() {
    eventBus.on("showType", (type) => {
      this.showType = !type
    })
  },
  unmounted() {
    eventBus.off("showType",)
  }
}
</script>

<style lang="less" scoped>
</style>