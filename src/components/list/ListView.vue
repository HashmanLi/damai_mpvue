<template>
    <div class="list_view">
        <ul >
            <li v-for="(item, index) in listInfo" :key="index" 
            @click="handleItemClick(item.id)"
            class="li"
            >
                <div class="content">
                    <div class="left"><img :src="item.verticalPic" alt="" ></div>
                    <div class="right">
                        <p class="title">{{item.name}}</p>
                        <p class="location">{{item.showTime}}| {{item.venueName}}</p>
                        <p class="seat"><span>可选座 </span></p>
                        <p class="price"> <span>{{item.formattedPriceStr}}</span>&nbsp;元</p>
                        <p class="description">{{item.subHead}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listInfo: [],
            index: 1
        }
    },
    methods: {
        handleItemClick(id) {
            wx.navigateTo({
                url: "/pages/detail/main?id=" + id
            })
        }
    },
    computed: {},
    mounted() {
        wx.showNavigationBarLoading()
        wx.request({
            url: this.$host + "/projectInfo",
            success: res => {
                wx.hideNavigationBarLoading()
                this.listInfo = res.data
            }
        })
    },
    beforeDestroy() {}
}
</script>

<style lang="scss" scoped>
@import "@/style/utils.scss";
view {
    box-sizing: border-box;
}
.list_view {
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    overflow-y: scroll;
    ul {
        width: 100%;
        overflow-y: scroll;
        .li {
            // height: 360rpx;
            padding-top: 28rpx;
            padding-right: 28rpx;
            font-size: 24rpx;
            // border:1px solid purple;
            .content {
                margin-left: 30rpx;
                // @include retina-one-px-bg(bottom);
                border-bottom: 1rpx solid #ccc;
                height: 100%;
                display: flex;
                flex-direction: row;
                // width: max-content;
                .left {
                    width: 132rpx;
                    // height: 1.47rem;
                    img {
                        width: 132rpx;
                        height: 178rpx;
                    }
                }
                .right {
                    flex: 1;
                    margin-left: 24rpx;
                    // background: red;
                    // height: 1.47rem;
                    .title {
                        // height: .44rem;
                        font-size: 15px;
                        @include ellipsis-lines();
                    }
                    .location {
                        height: 32rpx;
                        padding-top: 14rpx;
                        box-sizing: content-box;
                        font-size: 24rpx;
                        color: #999;
                    }
                    .seat {
                        height: 56rpx;
                        // line-height: .28rem;
                        color: #999;
                        font-size: 26rpx;
                        padding-top: 20rpx;
                        span {
                            // @include border(1px);
                            border: 1rpx solid #ccc;
                            // display: inline-block;
                            // box-sizing: content-box;
                            padding: 8rpx 6rpx 8rpx 6rpx;
                            border-radius: 8rpx;
                        }
                    }
                    .price {
                        height: 32rpx;
                        margin-top: 20rpx;
                        // font-size: .16rem;
                        span {
                            font-size: 32rpx;
                            color: #ff1268;
                        }
                    }
                    .description {
                        // line-height: .16rem;
                        padding-top: 14rpx;
                        margin-top: 20rpx;
                        box-sizing: content-box;
                        border-top: 1rpx solid #ccc;
                        // @include retina-one-px-bg(top, #ccc);
                        font-size: 24rpx;
                        color: #999;
                        margin-bottom: 12rpx;
                        @include ellipsis-lines();
                    }
                }
            }
        }
    }
}
</style>