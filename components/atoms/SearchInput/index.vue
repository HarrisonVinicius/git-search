<template>
  <div class="search-input">
    <input class="search-input__input" type="text" name="search">
    <button>
      <!-- obs: o vuetify esta sendo utilizado aqui apenas para o uso de icones -->
      <v-icon>mdi-magnify</v-icon>
    </button>
  </div>
</template>

<script>
export default {
    name: 'SearchInput'
}
</script>

<style lang="scss" scoped>
.search-input{
  &__input{
    border-bottom: 1px solid aliceblue;
    color: white;
  }
}
</style>