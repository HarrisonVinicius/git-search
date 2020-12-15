<template>
    <!-- this is the appbar component that is being used in the default layout of the application -->
    <div class="bar-container">
      <div class="bar-container__title">
        <span class="bar-container__title__text-decoration"> Git Repository Search </span>
      </div>
      <div class="bar-container__logo">
        <img class="bar-container__logo__image" src="@/assets/index.png" alt="logo">
      </div>
    </div>
</template>

<script>
export default {
    name: 'AppBar',
}
</script>

<style lang="scss" scoped>
  .bar-container{
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    &__title{
      &__text-decoration{
        color: #ffffff;
        font-size: 22px;
        font-weight: 600;
      }
    }
    &__logo{
      height: 30px;
      width: 30px;
      background-color: #fff;
      border-radius: 25px;
      &__image{
        height: 100%;
        width: 100%;
      }
    }
  }
</style>