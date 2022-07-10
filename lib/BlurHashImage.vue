<script setup lang="ts">
import { ref } from 'vue'
import BlurHashCanvas from './BlurHashCanvas.vue'

type BlurHashCanvasProps = {
  hash: string
  width?: number
  height?: number
  punch?: number
  src: string
  srcset?: string | undefined
}
withDefaults(defineProps<BlurHashCanvasProps>(), {
  width: 128,
  height: 128,
  punch: 1,
  srcset: undefined,
  transitionDuration: 'none'
})

const imageLoaded = ref(false)

defineExpose({
  imageLoaded,
})
</script>
<template>
  <div class="parent">
    <blur-hash-canvas
      v-show="!imageLoaded"
      class="child"
      key="canvas"
      :hash="hash"
      :width="width"
      :height="height"
      :punch="punch"
    />
    <img
      key="img"
      v-bind="$attrs"
      v-show="imageLoaded"
      class="child"
      :width="width"
      :height="height"
      :src="src"
      :srcset="srcset"
      @load="imageLoaded = true"
    />
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template: 1fr / 1fr;
}

.child {
  grid-area: 1 / 1 / 2 / 2;
}
</style>
