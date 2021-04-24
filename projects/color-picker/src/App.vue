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
