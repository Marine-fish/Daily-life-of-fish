<template>
<div class="app">
    <!-- 
        <router-link ></router-link> 
        里的to属性对应的router里的path
        to属性对象写法 :to="{path: '/home'}"
        replace属性是决定来回跳转是否保存前进后退历史
    -->
    <button @click="changeRouter" :class="{active: activeIndex === 0}">home</button>
    <button @click="changeRouter1" :class="{active: activeIndex === 1}">about</button>
 <router-view></router-view>
</div>
</template>

<script setup>
    import { useRouter } from "vue-router"
    import { ref } from "vue";
    const router = useRouter()
    const activeIndex = ref(0)
    const changeRouter = () => {
        router.push({
            path: "/about/123",
        })
        activeIndex.value = 0
    }
    const changeRouter1 = () => {
        //动态路由
        router.push({
            path: "/home/321",
        })
        activeIndex.value = 1
    }
 

</script>

<style lang="less" scoped>
    .active {
        color: #f00;
    }
</style>