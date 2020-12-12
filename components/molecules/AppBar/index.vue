<template>
    <div class="bar-container">
      <v-app-bar
        class="bar-container__app-bar"
        dark
      >
        <v-toolbar-title class="bar-container__app-bar__title">Git Search</v-toolbar-title>
        <v-spacer v-for="(space, index) in spaces" :key="index"></v-spacer>
        <search-input class="bar-container__app-bar__search-input"/>
      </v-app-bar>
    </div>
</template>

<script>
import { SearchInput } from "@/components/atoms";
export default {
    name: 'AppBar',
    components: {
        SearchInput
    },
    data () {
        return {
            spaces: [1, 2, 3, 4]
        }
    }
}
</script>

<style lang="scss" scoped>
  .bar-container{
    &__app-bar{
      &__title {
        font-weight: 600;
      }
    }
  }
</style>