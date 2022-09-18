<template>
    <div class="page">
        <Search type="text" v-model="$store.state.searchValue" placeholder="Search for movies or TV series" />
        <h1 class="page-title">Trending</h1>
        <div class="trending">
            <Trending v-for="(show, index) in trending" :show="show" :key="index"  />
        </div>
        <h1 class="page-title">Recommended for you</h1>
        <div class="page-content">
            <Show v-for="(show, index) in allShows" :show="show" :key="index" />
        </div>
    </div>
</template>

<script>
import Show from '@/components/show.vue';
import Trending from '@/components/trending.vue';
import Search from '@/components/search.vue';

export default {

    computed: {
        allShows() {
            return this.$store.state.data.filter(show => {
                return show.title.toLowerCase().includes(this.$store.state.searchValue.toLowerCase());
            });
        },

        trending() {
            return this.$store.getters.trending;
        }
    },

    components: { Show, Trending, Search }
}
</script>


<style lang="scss">
    .page {
        padding: 50px 0px 50px 200px;
        width: 100%;
        min-height: 100vh;

        &-title {
            font-size: 32px;
            font-weight: 300;
            line-height: 40px;
            letter-spacing: -0.5px;
            text-align: left;
            color: #ffffff;
            margin-bottom: 30px;
        }

        &-content {
            display: flex;
            flex-wrap: wrap;
            gap: 20px 0px;
        }
    }

    .trending {
        height: 230px;
        display: flex;
        overflow-y: auto;
        margin-bottom: 40px;
    }

    @media only screen and (max-width: 992px) {
            .page {
                padding: 140px 0px 140px 30px;

                &-content {
                    gap: 40px 5px;
                }
            }
        }

        @media only screen and (max-width: 768px) {
            .page {
                padding: 100px 0px 140px 20px;
                &-content {
                    gap: 80px 5px;
                }
            }

            .trending {
                height: 140px;
            }
        }

</style>
