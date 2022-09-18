<template>
    <div class="page">
        <Search type="text" v-model="$store.state.searchValue" placeholder="Search for bookmarked shows" />
        <h1 class="page-title">Movies</h1>
        <p v-if="!bookmarkedMovies.length">There are no bookmarked movies!</p>
        <div class='page-content'>
            <Show v-for="(movie, index) in bookmarkedMovies" :key='index' :show="movie" />
        </div>

        <h1 class="page-title">TV Series</h1>
        <p v-if="!bookmarkedSeries.length">There are no bookmarked TV series!</p>
        <div class='page-content'>
            <Show v-for="(show, index) in bookmarkedSeries" :key='index' :show="show" />
        </div>
    </div>
</template>

<script>
import Show from '@/components/show.vue';
import Search from '@/components/search.vue';
export default {
    computed: {
        bookmarkedMovies() {
            return this.$store.getters.movies.filter(movie => {
                return movie.isBookmarked && 
                movie.title.toLowerCase().includes(this.$store.state.searchValue.toLowerCase());
            });
        },

        bookmarkedSeries() {
            return this.$store.getters.series.filter(show => {
                return show.isBookmarked &&
                show.title.toLowerCase().includes(this.$store.state.searchValue.toLowerCase());
            });
        }
    },
    components: { Show, Search }
}
</script>

<style scoped>
    .page-title:last-of-type {
        margin-top: 50px;
    }

    p {
        color: white;
        opacity: 0.7;
        font-size: 18px;
        letter-spacing: 0.3px;
    }
</style>