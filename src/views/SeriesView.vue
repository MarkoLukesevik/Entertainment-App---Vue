<template>
    <div class="page">
        <Search type="text" v-model="$store.state.searchValue" placeholder="Search for TV series" />
        <h1 class="page-title">TV Series</h1>
        <div class='page-content'>
            <Show v-for="(show, index) in series" :key='index' :show="show" />
        </div>
    </div>
</template>

<script>
import Show from '@/components/show.vue';
import Search from '@/components/search.vue';
export default {
    computed: {
        series() {
            return this.$store.getters.series.filter(show => {
                return show.title.toLowerCase().includes(this.$store.state.searchValue.toLowerCase());
            });
        }
    },
    components: { Show, Search }
}
</script>