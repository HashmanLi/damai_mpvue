<style lang="scss">
</style>

<template>
    <list-view/>
</template>

<script>
import ListView from "@/components/list/ListView"
export default {
    components: {
        ListView
    },
    onPullDownRefresh(e) {
        setTimeout(() => {
            wx.stopPullDownRefresh()
        }, 1000)
    },
    onReachBottom() {
        console.log(1)
    },
    mounted() {
        let arr = [
            "演唱会",
            "话剧歌剧",
            "音乐会",
            "体育",
            "曲苑杂坛",
            "亲子",
            "展览休闲",
            "电影"
        ]
        let title = arr[+this.$root.$mp.query.class - 1]
        wx.setNavigationBarTitle({
            title
        })
    }
}
</script>
