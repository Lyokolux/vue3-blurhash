<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { HstCheckbox } from 'histoire/dist/controls' 
import BlurHashImage from '../lib/BlurHashImage.vue'

const props = [
  { hash: 'LEHV6nWB2yk8pyoJadR*.7kCMdnj' },
  { hash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.' },
  { hash: 'L6Pj0^i_.AyE_3t7t7R**0o#DgR4' },
  { hash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH' }
]

const blurhashRef = ref<InstanceType<typeof BlurHashImage>>()
const imageLoadedRef = ref(true)

watchEffect(() => {
  if (blurhashRef.value) {
    blurhashRef.value.imageLoaded  = imageLoadedRef.value
  }
})  

</script>

<template>
  <Story title="Blur Hash Image" :layout="{ type: 'grid', width: '300px' }">
    <Variant v-for="(prop, index) in props" :key="prop.hash" :title="`demo ${index + 1}`">
        <blur-hash-image :src="`/img${index + 1}.jpg`" v-bind="prop" />
    </Variant>
    <Variant title="Control Loading">
      <blur-hash-image ref="blurhashRef" :src="`/img1.jpg`" :hash="props[0].hash" :width="100" :height="100"  />
      <HstCheckbox title="Trigger Loading" v-model="imageLoadedRef" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# 
</docs>
