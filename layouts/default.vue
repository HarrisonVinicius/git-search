<template>
  <v-app class="app">
    <app-bar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; Dasa {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
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
}
</style>
