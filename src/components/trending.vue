<template>
    <div class="trending-show">
        <Play />
        <BookmarkIcon :isBookmarked='show.isBookmarked' @toggle-bookmark='toggleBookmark'/>
        <img class='trending-show__img' :src='show.thumbnail.trending.large' alt='' />
        <Description :year="show.year" :categoryImage="showCategoryImage" :category="show.category" :rating="show.rating" />
        <h1 class="trending-show__title">{{ show.title }}</h1>
    </div> 
</template>

<script>
import Play from './play.vue';
import BookmarkIcon from './bookmarkIcon.vue';
import Description from './description.vue';
export default {
    props: {
        show: {
            type: Object,
            required: true
        }
    },

    methods: {
        toggleBookmark() {
            this.$store.commit('toggleBookmark', this.show.title)
        }
    },

    computed: {
        showCategoryImage() {
            return this.show.category === 'Movie' ? '/assets/icon-nav-movies.svg' : '/assets/icon-nav-tv-series.svg';
        }
    },

    components: { Play, BookmarkIcon, Description }
}
</script>

<style lang="scss" scoped>
    .trending-show {
        width: 470px;
        height: 98%;
        position: relative;
        color: white;

        &:hover {
            opacity: 0.6;
            transition: 0.3s ease;

            .play {
                display: flex;
            }
        }

        &__img {
            height: 100%;
        }

        &__title {
            font-size: 24px;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 0px;
            text-align: left;
            position: absolute;
            bottom: 20px;
            left: 20px;
        }

        .description {
            position: absolute;
            bottom: 50px;
            left: 20px;
            font-size: 15px;
            line-height: 19px;
        }

    }

    @media only screen and (max-width: 768px) {
        .trending-show {
            width: 240px;
            height: 97%;
        }
    }

</style>