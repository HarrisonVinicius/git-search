<template>
    <div class="button">
        <slot class="button__text" />
    </div>
</template>

<script>
export default {
    name: 'BasicButton'
}
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
}
.button:hover{
    opacity: 0.8;
}
</style>