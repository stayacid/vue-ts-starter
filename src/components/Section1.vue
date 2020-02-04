<template lang="pug">
  section
    h1 {{ message }}
    img(src="assets/img/Screen1.png" alt="")
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
  @import '../scss/main.scss'; // be careful - this styles will overwrite styles below
  section {
    color: $black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>