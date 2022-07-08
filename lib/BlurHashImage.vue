<script setup lang="ts">
import { computed, ref } from 'vue'
import BlurHashCanvas from './BlurHashCanvas.vue'

type BlurHashCanvasProps = {
  hash: string
  width?: number
  height?: number
  punch?: number
  src: string
  srcset?: string | undefined
  transitionDuration?: number | string
}
const props = withDefaults(defineProps<BlurHashCanvasProps>(), {
  width: 128,
  height: 128,
  punch: 1,
  srcset: undefined,
  transitionDuration: 'none'
})

const imageLoaded = ref(false)
const cssVars = computed(() => ({
  transitionDuration: props.transitionDuration > 0 ? `${props.transitionDuration}s` : 'none'
}))
</script>
<template>
  <div style="position: relative;">
    <transition-group
      mode="in-out"
      name="fade"
      style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"
    >
      <blur-hash-canvas
        v-if="!imageLoaded"
        key="canvas"
        :hash="hash"
        :width="width"
        :height="height"
        :punch="punch"
        style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"
      />
      <img
        key="img"
        v-bind="$attrs"
        v-show="imageLoaded"
        :src="src"
        :srcset="srcset"
        @load="imageLoaded = true"
        style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"
      />
    </transition-group>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind("cssVars.transitionDuration");
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
