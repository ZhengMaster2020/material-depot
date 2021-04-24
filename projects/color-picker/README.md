# color-picker

这是一个基于 Vue 单文件实现的颜色选择器组件.

## Usage

- `v-model` 绑定的颜色值

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <ColorPicker v-model="color" />
  </div>
</template>

<script>
import ColorPicker from './components/ColorPicker'

export default {
  components: {
    ColorPicker,
  },
  data() {
    return { color: undefined }
  },
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 10%;
}
</style>
```

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
