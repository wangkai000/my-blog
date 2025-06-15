<script setup>
import { ref } from 'vue'

const backgroundUrl = ref('https://picsum.photos/id/1039/1920/1080')
</script>

<template>
  <ShadowCard class="justify-between !p-[5px]">
    <div
      class="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <div class="absolute inset-0 bg-black/50" />
      <div class="relative text-center p-8 max-w-2xl mx-auto">
        <h1 class="text-[clamp(2rem,5vw,4rem)] font-bold text-white mb-4 leading-tight">
          探索无限可能
        </h1>
        <p class="text-[clamp(1rem,2vw,1.5rem)] text-white/90 mb-8">
          创新科技与设计的完美融合，开启未来生活新篇章
        </p>
        <button class="bg-white text-black hover:bg-black hover:text-white transition-colors px-8 py-3 rounded-full font-medium">
          了解更多
        </button>
      </div>
    </div>
  </ShadowCard>
</template>

<style scoped>
</style>
