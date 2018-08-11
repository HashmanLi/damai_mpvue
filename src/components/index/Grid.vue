<style lang="scss" scoped>
nav {
    height: 214rpx;
    padding-top: 28rpx;
    background: #fff;
    width: 100%;
    // background: tomato;
    ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 25%;
            height: 88rpx;
            text-align: center;
            font-size: 12px;
            margin-bottom: 20px;
        }
    }
    .img {
        height: 60rpx;
        width: 100rpx;
        display: inline-block;
        text-align: center;
    }
}
</style>
<template>
   <nav>
        <ul>
            <li v-for="(item, index) in grid" :key="index"
            @click="handleItemClick(index + 1)"
            >
                <img :src="item.pic" alt="" class="img">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </nav>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters(["grid"])
    },
    methods: {
        handleItemClick(index) {
            wx.navigateTo({
                url: "/pages/list/main?class=" + index
            })
        }
    }
}
</script>
