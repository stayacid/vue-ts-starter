<template lang="pug">
  svg(
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewbox"
    :aria-labelledby="iconName"
    role="presentation")
    g(:fill="iconColor")
      slot
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    viewbox: {
      type: [String],
      default: '0 0 18 18',
    },
    iconColor: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style lang="scss" scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
  }
</style>
