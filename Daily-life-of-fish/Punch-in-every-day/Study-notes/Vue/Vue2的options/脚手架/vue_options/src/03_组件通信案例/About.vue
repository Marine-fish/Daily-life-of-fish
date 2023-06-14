<template>
<div class="about">
       <template v-for="(item, index) in info" ::key="index">
        <!-- <div class="box" :class="activeIndex === index ? 'active': ''" @click="active(index)">
            {{ item }}
        </div> -->
         <div class="box" :class="{active: index === activeIndex}" @click="active(index)">
            {{ item }}
        </div>
       </template>
</div>
</template>

<script >
    export default {
        props: {
            info: {
                type: Array,
                default: () => []
            }
        },
        emits: ["activeIndex"],
        data() {
            return {
               activeIndex: 0
            }
        },
        methods: {
            active(index) {
                this.activeIndex = index
                this.$emit("activeIndex", index)
            }
        }
    }
</script>

<style lang="less" scoped>
 .about {
        display: flex;
        justify-content: space-between;

        .active {
            color: #f00;
            border-bottom: 1px solid #f00;
            font-weight: 700;
        }
    }
</style>