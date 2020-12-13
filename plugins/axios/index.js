export default function({ $axios, redirect, store }) {
    // $axios.setHeader('Content-Type', 'application/json', ['post'])
    // $axios.setHeader('Authorization', store.state.token)
    $axios.onRequest()
    $axios.onResponse()
    $axios.onError()
  }