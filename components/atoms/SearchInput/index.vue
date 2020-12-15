<template>
  <!-- this is the input component that is being used in the application. -->
  <div class="search-input">
    <!-- this component has a dynamic style class that is controlled by a prop -->
    <input v-model="inputData" :class="rootClasses" class="search-input__input" :placeholder="placeHolder" type="text" name="search">
  </div>
</template>

<script>
export default {
    name: 'SearchInput',
    data: () => ({
      // here the user input is stored
      inputData: null
    }),
    props: {
      // this prop is responsible for controlling the component's light or dark style
      dark: {
        type: Boolean,
        default: false
      },
      // this prop receives the placeholder that will be displayed in the input
      placeHolder: {
        type: String,
        default: 'placeholder'
      }
    },
    computed: {
      // this computed data adds the dark class to the component if the prop is activated
      rootClasses(){
        return [
          'search-input__input',
          {
            'search-input__input--dark': this.dark
          }
        ]
      }
    },
    watch: {
      // this watcher listens to the user's input and sends the data to the parent component
      inputData: {
        handler(){
          this.$emit('input', this.inputData)
        }
      }
    }
}
</script>

<style lang="scss" scoped>
// the BEM CSS methodology was used here for example
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