<template lang="pug">
  div#app
    main
      Section1
</template>

<script>
  import Section1 from './components/Section1.vue'
  export default {
    components: {
      Section1
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