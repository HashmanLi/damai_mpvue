<style lang="scss" scoped>
</style>

<template>
    <div>
        <search-search/>
        <hot-search></hot-search>
    </div>
</template>

<script>
import HotSearch from "@/components/search/HotSearch"
import SearchSearch from "@/components/search/SearchSearch"
export default {
    components: {
        HotSearch,
        SearchSearch
    }
}
</script>
