<template>
    <main>
    <header>
        <open-data type="userAvatarUrl" class="logo"></open-data>
        <open-data type="userNickName" class="sign"></open-data>
        <!-- <div class="logo"><img src="http://gw.alicdn.com/tfs/TB1o4Bodr_I8KJjy1XaXXbsxpXa-150-150.png" alt=""></div> -->
        <!-- <div class="sign">登录/注册</div> -->
    </header>
    <section>
        <div class="first">
            <view class="p" to="/emoji">
                <i>&#xe652;</i>&nbsp;我的订单<i class="arrow">&#xe631;</i>
            </view>
            <view class="p" to="/emoji">
                <i style="display: inline-block;transform: scale(0.8)">&#xe653;</i>&nbsp;优惠券<i class="arrow">&#xe631;</i>
            </view>
            <view class="p" to="/emoji">
                <i>&#xe634;</i>&nbsp;我的票<i class="arrow">&#xe631;</i>
            </view>
        </div>
        <div class="second">
            <view class="p" to="/emoji">
                <i style="display: inline-block;transform: scale(0.8)">&#xe62e;</i>&nbsp;我想看的<i class="arrow">&#xe631;</i>
            </view>
        </div>
        <div class="third">
            <view class="p" to="/emoji"> 
                <i>&#xe645;</i>&nbsp;收货地址<i class="arrow">&#xe631;</i>
                </view>
            <view class="p" to="/emoji">
                👪&nbsp;常用购票人<i class="arrow">&#xe631;</i>
                </view>
            <view class="p" to="/emoji">
                <i>&#xe651;</i>&nbsp;意见反馈<i class="arrow">&#xe631;</i>
            </view>
        </div>
    </section>
</main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
    text-align: center;
    display: flex;
    width: 100%;
    flex-direction: column;
    header {
        height: 190rpx;
        width: 100%;
        background: #ff1268;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.2 * 200rpx;
        padding-left: 0.2 * 200rpx;
        .logo {
            height: 0.63 * 200rpx;
            width: 0.63 * 200rpx;
            margin: 0 0.12 * 200rpx 0 0.12 * 200rpx;
            border-radius: 50%;
            overflow: hidden;
            img {
                height: 0.63 * 200rpx;
                width: 0.63 * 200rpx;
            }
        }
        .sign {
            font-size: 16px;
            color: white;
            margin-left: 28rpx;
        }
    }
    section {
        .first,
        .third,
        .second {
            margin-bottom: 0.1 * 200rpx;
            font-size: 0.16 * 200rpx;
            border-top: 1rpx solid #eee;
            // padding-right: 40rpx;
            // border-bottom: 1px solid #f2f3f4;
            i {
                color: #bbb;
                font-family: "iconfont";
            }
            .arrow {
                position: absolute;
                right: 0.2 * 200rpx;
                top: 0;
                bottom: 0;
                line-height: 104rpx;
            }
        }
        .p {
            padding-left: 0.13 * 200rpx;
            display: flex;
            flex-direction: row;
            height: 104rpx;
            border-bottom: 1rpx solid #eee;
            align-items: center;
            position: relative;
        }
        .p:active {
            background-color: #f2f3f4;
        }
        // .first,
        // .third {
        //     height: 1.66 * 200rpx;
        //     background: #fff;
        //     p {
        //         height: 0.56 * 200rpx;
        //         border-bottom: 1px solid #f2f3f4;
        //         // @include border(0 0 1px 0);
        //         line-height: 0.56 * 200rpx;
        //         text-align: left;
        //         position: relative;
        //     }
        //     p:nth-child(3) {
        //         border: 0;
        //     }
        // }
        // .second {
        //     height: 0.55 * 200rpx;
        //     background: #fff;
        //     text-align: left;
        //     height: 0.56 * 200rpx;
        //     line-height: 0.56 * 200rpx;
        // }
    }
}

// }
</style>