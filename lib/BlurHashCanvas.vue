<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { decode } from 'blurhash'

type BlurHashCanvasProps = {
  hash: string
  width?: number
  height?: number
  punch?: number
}
const props = withDefaults(defineProps<BlurHashCanvasProps>(), {
  width: 128,
  height: 128,
  punch: 1
})

const canvas = ref<HTMLCanvasElement>()

const draw = () => {
  const pixels = decode(props.hash, props.width, props.height, props.punch)
  const ctx = (canvas.value as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D
  const imageData = ctx.createImageData(props.width, props.height)
  imageData.data.set(pixels)
  ctx.putImageData(imageData, 0, 0)
}

onMounted(draw)
</script>

<template>
  <canvas ref="canvas" :width="width" :height="height" />
</template>
