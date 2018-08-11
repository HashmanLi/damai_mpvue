<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100rpx;
    background: rgb(242, 243, 244);
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 28rpx 0 28rpx;
    .cancel {
        margin-left: 20rpx;
    }
}
</style>

<template>
    <div class="wrapper">
        <search-basic :isDisable = "false"/>
        <div class="cancel" @click="handleCancelClick">取消</div>
    </div>
</template>

<script>
import SearchBasic from "@/components/index/SearchBasic"
export default {
    components: {
        SearchBasic
    },
    methods: {
        handleCancelClick() {
            wx.navigateBack()
        }
    }
}
</script>
