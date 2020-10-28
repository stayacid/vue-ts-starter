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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IconBase extends Vue {
  iconName = 'box';
  width: number | string = 18;
  height: number | string = 18;
  viewbox = '0 0 18 18'
  iconColor = 'white'
}
</script>

<style lang="scss" scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
  }
</style>
