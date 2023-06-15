<template>
<div class="app">
  <h2>app</h2>
  <template v-for="(item, index) in tabs" :key="index">
    <button 
    :class="{active: tabsIndex === index}"
    @click="changeNnm(index)"
    >{{ item }}
    </button>
  </template>
  <KeepAlive :include="['home', 'about']">
    <component 
     :is="tabs[tabsIndex]" 
     name="per" 
     :age="18"
     @homeBtN="changeN">
  </component>
  </KeepAlive>
  
</div>
</template>

<script >
import Home from './Home.vue';
import About from "./About.vue"
export default {
    components: {
        Home,
        About
    },
    data() {
        return {
            tabs: ["Home", "About"],
            tabsIndex: 0
        }
    },
    methods: {
        changeNnm(type) {
            this.tabsIndex = type
        },
        changeN(num) {
            this.tabsIndex = num
        }
    },
   
}
</script>

<style lang="less" scoped>

.active {
    color: #f00;
}
</style>