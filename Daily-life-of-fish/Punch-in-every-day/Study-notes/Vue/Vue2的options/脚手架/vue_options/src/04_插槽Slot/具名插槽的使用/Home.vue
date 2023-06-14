<template>
<div class="home">
  <div class="tab-bar">
    <span class="left item" slot="left">
        <slot name="left">1</slot>
    </span>
    <span class="center" slot="center">
        <slot name="center">2</slot>
    </span>
    <span class="right item" slot="right">
        <slot name="right">3</slot>
    </span>
    
  </div>
  <div>
        <slot name="default"></slot>
    </div>
</div>
</template>

<script>

export default {

}

</script>

<style lang="less" scoped>
    .tab-bar {
        display: flex;

        .item {
            width: 200px;
            height: 100px;
        }

        .left {
            background-color: #f00;
        }

        .center {
            flex: 1;
            background-color: orange;
            width: 300px;
            height: 100px;
        }

        .right {
            background-color: hotpink;
        }
    }

</style>