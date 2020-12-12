<template>
    <div class="logo">
      <img class="logo__image" src="@/assets/index.png" alt="logo">
    </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style lang="scss" scoped>
  .logo{
    background-color: #fff;
    height: 200px;
    width: 200px;
    &__image{
      height: 100%;
      width: 100%;
    }
  }
</style>