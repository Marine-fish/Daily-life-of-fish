<template>
<div class="tab-bar">
  <template v-for="(item, index) in info" ::key="">
    <div class="item" 
         :class="{active: activeIndex === index}"
         @click="changeActive(index)">
       <slot :item="item">{{ item }}</slot> 
    </div>
  </template>
</div>
</template>

<script>

export default {
    props: {
        info: {
            type: Array,
            default: () => []
        }
    },
    emits: ["changeIndex"],
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        changeActive(index) {
            this.activeIndex = index
            this.$emit("changeIndex", index)
        }
    }
}

</script>

<style lang="less" scoped>

.tab-bar {
    display: flex;
    justify-content: space-between;
       
        .active {
            color: #f00;
            border-bottom: 1px solid #f00;
            font-weight: 700;
        }
}
</style>