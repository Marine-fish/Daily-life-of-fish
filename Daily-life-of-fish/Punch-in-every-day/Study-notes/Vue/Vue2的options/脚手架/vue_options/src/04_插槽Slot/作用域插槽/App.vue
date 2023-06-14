<template>
<div class="app">
  <home :info="info" @changeIndex="changeIndex">
    <!-- 子组件传来的属性全部传入props里 -->
    <template v-slot:default="props">
        <button>{{ props.item }}</button>
    </template>
  </home>
  <home :info="info" @changeIndex="changeIndex">
    <template v-slot:default="props">
        <h1>{{ props.item }}</h1>
    </template>
  </home>
  <h1>{{ info[index] }}</h1>
</div>
</template>

<script>
import Home from './Home.vue';
export default {
    components: {
    Home,
    Home
},
    data() {
        return {
            info: ["帽子", "衣服", "裤子"],
            index: 0,
        }
    },
    methods: {
        changeIndex(index) {
            this.index = index
        }
    }
}

</script>

<style lang="less" scoped>
</style>