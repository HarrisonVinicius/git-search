<template>
  <div class="app">
    <app-bar/>
    <div class="app__container">
      <nuxt/>
    </div>
    <div class="app__footer">
      <span class="app__footer__text">&copy; 2020 Dasa </span>
    </div>
  </div>
</template>

<script>
import { AppBar } from "@/components/molecules";
export default {
  components: {
    AppBar
  },
  data () {
    return {
      clipped: false,
      fixed: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.app{
  &__container{
    padding-left: 30px;
    padding-right: 30px;
  }
  &__footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    &__text{
      margin-left: 15px;
    }
  }
}
</style>
