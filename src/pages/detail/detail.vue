<style lang="scss" scoped>
</style>

<template>
    <detail-view ref="detail_view"/>
</template>

<script>
import DetailView from "@/components/detail/DetailView"
export default {
    components: {
        DetailView
    },

    mounted() {
        this.$refs.detail_view.getData()
    },
    beforeDestroy() {
        console.log(1)
    },
    deactivated() {
        console.log(1)
    },
    onHide() {
        console.log(1)
    },
    // onLoad() {
    //     console.log(1)
    //     this.$refs.showData = {}
    // },
    onUnload() {
        this.$refs.detail_view.showData = {}
        this.$refs.detail_view.isLoaded = false
        /* 组件最好不要有生命周期函数 */
        /* 这样就可以返回清空缓存了 */
    }
}
</script>
