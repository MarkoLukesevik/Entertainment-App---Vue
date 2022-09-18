<template>
    <div class="description">
        {{ year }} <span>•</span> <img class="description__img" :src="categoryImage" /> {{ category }} <span>•</span> {{ rating }}
    </div>
</template>

<script>
export default {
    props: {
        year: {
            type: Number,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        rating: {
            type: String,
            required: true
        },

        categoryImage: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .description {
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0.75;
            font-size: 13px;
            font-weight: 300;
            line-height: 16px;
            letter-spacing: 0px;
            text-align: left;
            margin: 5px 0px;

            &__img {
                width: 12px;
                height: 12px;
            }
        }
</style>