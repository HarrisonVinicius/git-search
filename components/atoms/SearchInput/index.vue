<template>
  <div class="search-input">
    <input :class="rootClasses" class="search-input__input" type="text" name="search">
    <button>
      <!-- obs: o vuetify esta sendo utilizado aqui apenas para o uso de icones -->
      <v-icon v-if="!hideButton" color="darkIcon">mdi-magnify</v-icon>
    </button>
  </div>
</template>

<script>
export default {
    name: 'SearchInput',
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      hideButton: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      rootClasses(){
        return [
          'search-input__input',
          {
            'search-input__input--dark': this.dark
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
.search-input{
  display: flex;
  justify-content: center;
  &__input{
    border-bottom: 1px solid aliceblue;
    color: white;
    width: 85%;
    &--dark{
      border-bottom: 1px solid black;
      color: black
    }
  }
}
</style>