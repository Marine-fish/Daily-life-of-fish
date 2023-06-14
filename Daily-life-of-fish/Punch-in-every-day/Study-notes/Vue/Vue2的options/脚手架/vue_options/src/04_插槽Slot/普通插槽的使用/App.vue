<template>
<div class="app">
  <Home :message="say">
    <button>我在使用插槽</button>
    <h1>我在使用插槽1</h1>
  </Home>
</div>
</template>

<script>
import Home from "./Home.vue";

export default {
    components: {
        Home
    },
    data() {
        return {
            say: "Hello"
        }
    },
}

</script>

<style lang="less" scoped>
</style>