<template>
    <nav class='nav'>
        <img class='nav-logo' src='/assets/logo.svg' alt=''/>
        <div class='nav-links'>
            <router-link to="/"><img src="/assets/icon-nav-home.svg"/></router-link> 
            <router-link to="/movies"><img src="/assets/icon-nav-movies.svg"/></router-link>
            <router-link to="/series"><img src="/assets/icon-nav-tv-series.svg"/></router-link> 
            <router-link to="/bookmarks"><img src="/assets/icon-nav-bookmark.svg"/></router-link> 
        </div>
        <img class='nav-image' src='/assets/jas.jpg' alt=''/>
    </nav>
    <router-view/>
</template>

<script>
    export default {

        created() {
            this.$store.dispatch('fetchData')
        }
    }
</script>

<style lang='scss'>
   @import '../src/styles/colors.scss';

   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
   }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        // color: #2c3e50;
        background-color: $bgColor;
        height: 100vh;
        width: 100vw;
    }

    .nav {
        padding: 30px;
        position: relative;
        left: 32px;
        top: 32px;
        border-radius: 20px;
        width: 96px;
        height: 90%;
        background-color: $primaryColor;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 50px;

        &-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        a {
            & img {
                width: 20px;
                height: 20px;
            }
            &.router-link-exact-active {
                & img {
                    filter: $navActiveColor;
                }
            }
        }

        &-image {
            width: 48px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            bottom: 30px;
        }
    }
</style>
