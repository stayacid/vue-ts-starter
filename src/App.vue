<template lang="pug">
  div#app
    main
      example-page
</template>

<script>
  import Example from './components/pages/Example.vue'
  export default {
    components: {
      ExamplePage: Example
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }
</style>