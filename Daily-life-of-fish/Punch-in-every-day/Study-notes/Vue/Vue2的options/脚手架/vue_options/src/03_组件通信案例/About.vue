<template>
<div class="about">
       <template v-for="(item, index) in info" ::key="index">
        <div class="box" @click="active">
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
        data() {
            return {
               activeIndex: 0
            }
        },
        methods: {
            active() {
                
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
        }
    }
</style>