<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { HstCheckbox } from 'histoire/dist/controls' 
import BlurHashImage from '../lib/BlurHashImage.vue'

const WIDTH_STORY_SHIFT = 2

const props = [
  { hash: 'LEHV6nWB2yk8pyoJadR*.7kCMdnj', width: 269, height: 173 },
  { hash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.', width: 301, height: 193  },
  { hash: 'L6Pj0^i_.AyE_3t7t7R**0o#DgR4', width: 242, height: 172  },
  { hash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH', width: 187, height: 120 }
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
  <Story title="Blur Hash Image" :layout="{ type: 'grid', width: Math.max(...props.map(({width}) => width)) + WIDTH_STORY_SHIFT }">
    <Variant v-for="(prop, index) in props" :key="prop.hash" :title="`demo ${index + 1}`">
        <blur-hash-image :src="`/img${index + 1}.jpg`" v-bind="prop" />
    </Variant>
    <Variant title="Control Loading">
      <blur-hash-image ref="blurhashRef" :src="`/img1.jpg`" v-bind="props[0]" />
      <template #controls>
      <HstCheckbox title="isLoading" v-model="imageLoadedRef" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# 
</docs>
