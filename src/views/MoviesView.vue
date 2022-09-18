<template>
    <div class="page">
        <Search type="text" v-model="$store.state.searchValue" placeholder="Search for movies" />
        <h1 class="page-title">Movies</h1>
        <div class='page-content'>
            <Show v-for="(movie, index) in movies" :key='index' :show="movie" />
        </div>
    </div>
</template>

<script>
import Show from '@/components/show.vue';
import Search from '@/components/search.vue';
export default {
    computed: {
        movies() {
            return this.$store.getters.movies.filter(movie => {
                return movie.title.toLowerCase().includes(this.$store.state.searchValue.toLowerCase());
            });
        }
    },
    components: { Show, Search }
}
</script>