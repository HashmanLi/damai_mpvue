<style lang="scss" scoped>
// .header {
//   width: 100%;
//   height: 100rpx;
//   background: rgb(242, 243, 244);
//   display: flex;
//   align-items: center;
//   font-size: 28rpx;
// .city {
//     padding: 0 40rpx 0 34rpx;
// }
.wrap {
    height: 58rpx;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 14px;
    padding-left: 15px;
    background: #fff;
    input {
        width: 100%;
        height: 100%;
        margin-right: 30px;
        height: 100%;
        flex: 1;
    }
    .srch {
        width: 60rpx;
    }
}
// }
</style>
<template>
  <view class="wrap" >
    <view class="srch iconfont">&#xe639;</view>
    <input type="text" placeholder="搜索明星、演唱会、场馆" :disabled= 'isDisable'/>
  </view>
</template>

<script>
export default {
    props: {
        isDisable: {
            type: Boolean,
            default: true
        }
    }
}
</script>
