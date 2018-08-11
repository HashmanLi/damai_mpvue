<template>
    <div>
        <search-bar/>
        <grid/>
    </div>
</template>

<script>
import SearchBar from "@/components/index/SearchBar"
import Grid from "@/components/index/Grid"
import Swipe from "@/components/index/Swipe"
import { mapActions } from "vuex"
export default {
    data() {
        return {}
    },

    components: {
        SearchBar,
        Grid
    },

    methods: {
        ...mapActions(["getSwipeAndGridData"])
    },

    created() {},
    mounted() {
        this.getSwipeAndGridData()
    }
}
</script>

<style scoped>
</style>
