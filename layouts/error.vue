<template>
  <!-- this is the basic application error layout. the user is redirected to it if there is an error in the application -->
  <div>
    <h1 v-if="error.statusCode === 404">
      sorry! {{ pageNotFound }} 
    </h1>
    <h1 v-else>
      sorry! {{ otherError }} :(
    </h1>
    <NuxtLink to="/">
      Clique aqui para voltar ao Inicio
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    // this property receives the details of the error that occurred
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    // here are some standard error feedback messages
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    // control of the messages that will be shown on the screen
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
