<script setup lang="ts">
import BlurHashCanvas from '../lib/BlurHashCanvas.vue'

const props = [
  { hash: 'LEHV6nWB2yk8pyoJadR*.7kCMdnj', width: 269, height: 173 },
  { hash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.', width: 301, height: 193  },
  { hash: 'L6Pj0^i_.AyE_3t7t7R**0o#DgR4', width: 242, height: 172  },
  { hash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH', width: 187, height: 120 }
]

const layoutDimensions = {
  width: Math.max(...props.map(({width}) => width)) + 40,
  height: Math.max(...props.map(({height}) => height))
}

</script>

<template>
  <Story title="Blur Hash Canvas" :layout="{ type: 'grid', ...layoutDimensions }">
    <Variant v-for="(prop, index) in props" :key="prop.hash" :title="`demo ${index + 1}`">
        <blur-hash-canvas :src="`/img${index + 1}.jpg`" v-bind="prop" />
    </Variant>
  </Story>
</template>
