<template>
    <div class="show">
        <Play />
        <img class='show-img' :src='show.thumbnail.regular.large' alt='' />
        <BookmarkIcon :isBookmarked='show.isBookmarked' @toggle-bookmark='toggleBookmark'/>
        <Description :year="show.year" :categoryImage="showCategoryImage" :category="show.category" :rating="show.rating"  />
        <h1 class="show-title">{{ show.title }}</h1>

    </div>
</template>

<script>
import BookmarkIcon from './bookmarkIcon.vue';
import Play from './play.vue';
import Description from './description.vue';
export default {
    components: { BookmarkIcon, Play, Description },
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
    }
}
</script>

<style lang="scss">
    .show {
        position: relative;
        width: 280px;
        height: 226px;
        color: white;
        margin: 15px;

        &:hover {
            opacity: 0.6;
            transition: 0.3s ease;

            .play {
                display: flex;
            }
        }

        &-img {
            width: 100%;
            height: 174px;
            border-radius: 8px;
        }

        &-title {
            font-size: 18px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
        }
    }

    @media only screen and (max-width: 992px) {
        .show {
            width: 220px;
            height: 192px;
        }
    }

    @media only screen and (max-width: 768px) {
        .show {
            width: 180px;
            height: 160px;
        }
    }
</style>

<style scoped>
    .play {
        transform: translate(-50%, -80%);
    }
</style>