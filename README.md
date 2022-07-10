# another-vue3-blurhash

<p align="center">
  <img src="./vue-blurhash.jpg" alt="Blurhash vuejs plugin">
</p>

> VueJS components using the [blurhash algorithm](https://blurha.sh)

This package is a rewrite and maintened one of the original [vue-blurhash](https://github.com/damienroche/vue-blurhash).
Feel free to open an issue if there is a need for improvements 🦊

## Installation

You need [Vue.js](https://vuejs.org/) **version 3.0+**

### Use

1. Install the package
```bash
npm install vue-blurhash
yarn add vue-blurhash
```

2. Use the plugin
```javascript
import Vue from 'vue'
import VueBlurHash from 'another-vue3-blurhash'

...

Vue.use(VueBlurHash)
```

3. Use the components or the integrated blurhash library
```vue
<template>
  <blur-hash-image
    width="400"
    height="300"
    hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay"
    src="https://images.unsplash.com/photo-1545910684-8e7c081be9b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
    alt="green lawn grass during daytime"
  />
</template>
```
Check the examples: http://vue3-blurhash.vercel.app/


Or use it to generate a blurhash in the browser: 
```typescript
import { encode } from 'another-vue3-blurhash'

const BlurhashEncoding = {
  // blurhash encoding precision
  componentX: 4,
  componentY: 3

  // resize the image before encoding for performance
  maxWidth: 32,
  maxHeight: 32
}

const resizeDimensions = (image: HTMLImageElement, maxWidth: number, maxHeight: number) => {
  const { width, height } = image

  if (width > maxWidth && width > height) {
    return {
      width: maxWidth,
      height: height * (maxWidth / width)
    }
  } else if (height > maxHeight) {
    return {
      width: width * (maxHeight / height),
      height: maxHeight
    }
  } else {
    return { width, height }
  }
}

const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (...args) => reject(args)
    img.src = src
  })

const getImageData = (image: HTMLImageElement): ImageData => {
  const canvas = document.createElement('canvas')
  const { width, height } = resizeDimensions(image, BlurhashEncoding.maxWidth, BlurhashEncoding.maxHeight)
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  context.drawImage(image, 0, 0, width, height)
  return context.getImageData(0, 0, width, height)
}

export const useBlurhashEncode = async (url: string) => {
  const image = await loadImage(url)
  const imageData = getImageData(image)
  return encode(imageData.data, imageData.width, imageData.height, BlurhashEncoding.componentX, BlurhashEncoding.componentY)
}
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

