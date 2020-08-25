<template lang="pug">
  section
    h1 {{ message }}
    icon-base(iconColor="white" viewBox="0 0 18 22" height="22" width="24")
      icon-burger
    img(src="assets/img/Screen1.png" alt="")
</template>

<script>
import IconBase from '../global/IconBase.vue';
import IconBurger from '../icons/IconBurger.vue';

export default {
  components: {
    IconBase,
    IconBurger,
  },
  data() {
    return {
      message: null,
    };
  },
  created() {
    this.message = this.$store.getters.getMessage;
  },
};
</script>

<style lang="scss" scoped>
  section {
    color: $black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };

  img {
    margin: 1rem 0;
  }
</style>
