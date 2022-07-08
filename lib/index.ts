import type { Plugin } from 'vue'
import BlurHashCanvas from './BlurHashCanvas.vue'

const plugin: Plugin = {
  install(Vue) {
    Vue.component('blur-hash-canvas', BlurHashCanvas)
  }
}

export default plugin
export {
  BlurHashCanvas,
}
