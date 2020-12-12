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
    cursor: pointer;
}
.button:hover{
    opacity: 0.8;
}
</style>