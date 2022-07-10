import type { Plugin } from 'vue'
import { encode, decode } from 'blurhash'
import BlurHashCanvas from './BlurHashCanvas.vue'
import BlurhashImage from './BlurHashImage.vue'

const plugin: Plugin = {
  install(Vue) {
    Vue.component('blur-hash-canvas', BlurHashCanvas)
    Vue.component('blur-hash-image', BlurhashImage)
  }
}

export {
  plugin as default,
  BlurHashCanvas,
  BlurhashImage,
  encode,
  decode
}
