<template>
    <div class="bar-container">
      <div class="bar-container__title">
        <span class="bar-container__title__text-decoration"> Git Repository Search </span>
      </div>
      <div class="bar-container__search">
        <search-input class="bar-container__search-input"/>
      </div>
    </div>
</template>

<script>
import { SearchInput } from "@/components/atoms";
export default {
    name: 'AppBar',
    components: {
        SearchInput
    }
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
  }
</style>