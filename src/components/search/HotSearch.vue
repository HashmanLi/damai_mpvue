<style lang="scss" scoped>
.wrapper {
    width: 100%;
    padding: 0 26rpx 0 26rpx;
    margin-bottom: 40rpx;
    margin-top: 20rpx;
    font-size: 12px;
    .top {
        color: #999;
    }
    .list {
        margin-top: 30rpx;
        .item {
            border: 1rpx solid rgb(231, 231, 231);
            padding: 14rpx 30rpx 14rpx 30rpx;
            margin: 0 20rpx 18rpx 0;
            float: left;
            border-radius: 51rpx;
        }
        .item:active {
            background: rgb(231, 231, 231);
        }
    }
}
</style>

<template>
    <div class="wrapper">
        <div class="top">
            <div class="hot">热搜</div>
        </div>
        <div class="list" >
            <!-- v-for 用括号 括 item 编译报错！！！ -->
            <div class="item" v-for="item in list" :key="item.word">{{item.word}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.$http(this.$host + "/api/hotSearch")
            .then(res => {
                this.list = res.data.data.result.data
            })
            .catch(err => console.log(err))
    }
}
</script>

