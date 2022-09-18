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
   @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');

   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
   }

    #app {
        font-family: Outfit;
        background-color: $bgColor;
    }

    .nav {
        padding: 30px;
        position: absolute;
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

    ::-webkit-scrollbar{
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: $primaryColor;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #5A698F;
        border-radius: 8px;
    }

    @media only screen and (max-width: 992px) {
        .nav {
            width: 90%;
            height: 72px;
            flex-direction: row;
            justify-content: center;

            &-logo {
                position: absolute;
                left: 10px;
                top: 22px;
            }

            &-links {
                flex-direction: row;
            }

            &-image {
                right: 10px;
                top: 15px;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .nav {
            width: 100%;
            left: 0;
            top: 0;
            border-radius: 0px;
        }
    }

</style>
