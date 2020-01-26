<template>
  <section>
    <h1>Webpack {{ message }}</h1>
    <img src="assets/img/Screen1.png" alt="">
  </section>
</template>

<script>
  export default {
    data() {
      return {
        message: null
      }
    },
    created() {
      this.message = this.$store.getters.getMessage
    }
  }
</script>

<style lang="scss">
  @import '../scss/main.scss'; // or just vars 
  section {
    background-color: $black;
    color: $white;
  }
</style>