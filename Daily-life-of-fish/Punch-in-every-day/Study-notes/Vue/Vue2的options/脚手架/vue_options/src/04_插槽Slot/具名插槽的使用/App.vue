<template>
<div class="app">
    <!-- 
        插槽的存在是定义好一个架构 
        内容由外界来决定
    -->
  <Home>
    <!-- <template v-slot:left>
        我是左边导航
    </template>
    <template v-slot:center>
        我是中间导航
    </template>
    <template v-slot:right>
        我是右边导航
    </template> -->
    <!-- 简写 -->
    <template #left>
        我是左边导航
    </template>
    <template #center>
        我是中间导航
    </template>
    <template #right>
        我是右边导航
    </template>
  </Home>
  <Home>
    <!-- 
        动态插槽
        插槽的名字是动态的
     -->
    <template v-slot:[info]>
        <a href="#">嘻嘻</a>
    </template>
    <button @click="info = 'left'">左</button>
    <button  @click="info = 'center'">中</button>
    <button  @click="info = 'right'">右</button>
  </Home>
</div>
</template>

<script>
import Home from './Home.vue';

export default {
    components: {
        Home
    },
    data() {
        return {
            info: "center"
        }
    }
}

</script>

<style lang="less" scoped>
</style>