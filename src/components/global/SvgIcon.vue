<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg" :fill="fill" :stroke="stroke">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SvgIcon extends Vue {
  // props
  @Prop({ default: 'svg-icon' }) readonly name!: string;
  @Prop() readonly fill: string | undefined;
  @Prop() readonly stroke: string | undefined;

  //  computed
  get iconPath() {
    let icon = require(`@/assets/icons/${this.name}.svg`)
    if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      icon = icon.default
    }
    return icon.url
  }

  get className() {
    return 'svg-icon svg-icon__' + this.name
  }
}
</script>

<style>
  .svg-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
</style>
