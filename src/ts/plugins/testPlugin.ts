// example of global vue plugin for my custom methods
export default {
  install: function (Vue: any, options: any) {
    // return '' or (1)/(2)/(3) etc
    Vue.prototype.countSelectedFilter = (checked: number) => {
      if (checked > 0) {
        return ` (${checked})`;
      }
      return '';
    }
  },
}
