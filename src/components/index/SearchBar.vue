<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100rpx;
    background: rgb(242, 243, 244);
    display: flex;
    align-items: center;
    font-size: 14px;
    .city {
        padding: 0 40rpx 0 34rpx;
    }
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
}
</style>
<template>
    <view class = 'header'>
            <view class="city">
            {{location}}<view class= 'iconfont' style = "margin-left:8px;">&#xe632;</view>
            </view>
            <view @click = "handleInputClick">
                <search-basic />
            </view>
            <view class="city"></view>
    </view>
</template>
<script>
import SearchBasic from "./SearchBasic"
export default {
    data() {
        return {
            location: "美国"
        }
    },
    components: {
        SearchBasic
    },
    methods: {
        handleInputClick() {
            wx.navigateTo({
                url: "/pages/search/main"
            })
        }
    },
    mounted() {
        let self = this
        wx.getLocation({
            type: "wgs84",
            success: function(res) {
                wx.request({
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: {
                        key: "FMRBZ-Z4UCG-7CTQ3-I5U2Y-T65G5-VPFBT",
                        location: res.latitude + "," + res.longitude
                    },
                    success: res => {
                        let city = res.data.result.address_component.city || ""
                        self.location = city.substr(0, city.length - 1)
                    },
                    fail: err => console.log(err)
                })
            }
        })
    }
}
</script>
