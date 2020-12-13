<template>
  <div class="app">
    <app-bar />
    <div class="app__content">
      <nuxt />
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
  background-color: #fff;
  &__content{
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
