<script setup lang="ts">
import BlurHashCanvas from '../lib/BlurHashCanvas.vue'
</script>

<template>
  <Story title="Blur Hash Canvas" :layout="{ type: 'grid', width: '164px' }">
    <Variant title="demo 1">
      <blur-hash-canvas hash="LEHV6nWB2yk8pyoJadR*.7kCMdnj" />
    </Variant>
    <Variant title="demo 2">
      <blur-hash-canvas hash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6." />
    </Variant>
    <Variant title="demo 3">
      <blur-hash-canvas hash="L6Pj0^i_.AyE_3t7t7R**0o#DgR4" />
    </Variant>
    <Variant title="demo 4">
      <blur-hash-canvas hash="LKO2?U%2Tw=w]~RBVZRi};RPxuwH" />
    </Variant>
  </Story>
</template>
