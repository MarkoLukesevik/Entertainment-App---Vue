<template>
    <div class="bookmark" @click="$emit('toggleBookmark')">
        <img :src="isBookmarked ? '/assets/icon-bookmark-full.svg' : '/assets/icon-bookmark-empty.svg'" />
    </div>
</template>

<script>

export default {
    props: {
        isBookmarked: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/colors.scss';

    .bookmark {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: $primaryColor;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>