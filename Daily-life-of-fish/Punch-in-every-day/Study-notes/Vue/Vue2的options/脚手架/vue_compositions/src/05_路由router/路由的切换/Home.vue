<template>
<div class="home">
      <!-- 在模板中获取路由id -->
  <h2>home-{{$route.params.id}}</h2>
</div>
</template>

<script setup>
  // //代码 Vue2
  // this.$route.params.id

  //但在路由切换的时候这样发那个是无法拿到params
   //解决方式一 失败
   import { watch } from 'vue';
   //方式二 路由守卫
  import { useRoute, onBeforeRouteUpdate } from 'vue-router';
  // const route = useRoute()
  // console.log(route.params.id)

  watch(route, (newValue, oldVue) => {
    console.log(newValue, oldVue)
  })

  onBeforeRouteUpdate(() => {
    const route = useRoute()
  console.log('路由守卫',route.params.id)
  })
</script>

<style lang="less" scoped>
</style>