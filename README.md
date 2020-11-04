# Vue-starter with TS, SCSS and PUG

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Project Structure:
* `public` - index.pug, sitemap and favicons. Everithing from this folder will be copied right into `dist` folder after `yarn build`. Index.pug will be converted in index.html
* `src/assets` - images and SVG
  * `src/assets/icons` - put SVG here. Use with SvgIcon component like in HelloWorld.vue. All icons will be compressed into 1 big SVG - `dist/img/icons.[hash].svg`
  * `src/assets/img` - put images here. Images will be compressed and copied in `dist/img`
* `src/components` - folder with custom `.vue` components
* `src/router` - Vue router

* `src/scss` - put custom app SCSS styles here. Variables and mixins imported in `vue.config.js`. Other common styles imported in `App.vue` (note that `<style>` in App.vue shouldn't be scoped)
  * `src/scss/components` - common styles for buttons, input, components, container, typography, etc
  * `src/scss/helpers` - variables, normalize.scss, basic styles, font-face
  * `src/scss/libs` - import styles from libs here
  * `src/scss/mixins` - scss mixins
* `src/store` - app store for vue
* `src/views` - pages

* `src/ts` - put custom app scripts here
