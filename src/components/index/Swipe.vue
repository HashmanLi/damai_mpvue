<style lang="scss">
</style>

<template>

    <swiper 
        :indicator-dots="true"
        :autoplay="true" 
        :interval="5000" 
        :duration="1000">
        <swiper-item  v-for="(item, index) in mySwipe" :key="index">
            <image :src="item.pic" width="375" height="150"/>
        </swiper-item>
    </swiper>
</template>

<script>
/* 因接口 问题 暂停开发 */
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters(["mySwipe"])
    }
}
</script>

