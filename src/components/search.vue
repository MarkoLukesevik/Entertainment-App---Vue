<template>
    <div class="input-div">
        <img src='/assets/icon-search.svg' alt='' />
        <input v-bind="$attrs" class='search' :placeholder='placeholder' :value='modelValue' @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ''
        },

        modelValue: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
    .input-div {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 30px;
    }

    .search {
        background-color: transparent;
        border: none;
        padding: 10px;
        width: 80%;
        color: white;
        font-family: Outfit;
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
    }
</style>