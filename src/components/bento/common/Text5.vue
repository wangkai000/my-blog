<script setup>
import { ref } from 'vue'

const backgroundUrl = ref('https://s21.ax1x.com/2025/06/25/pVeUGLj.jpg')
</script>

<template>
  <ShadowCard class="justify-between !p-[5px]">
    <!-- 1:1比例的正方形容器 -->
    <div class="relative aspect-square overflow-hidden">
      <!-- 图片容器 - 使用flex确保居中 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img
          :src="backgroundUrl"
          alt="居中图片"
          class="object-cover w-full h-full"
        >
      </div>

      <!-- 黑色遮罩层 -->
      <div class="absolute inset-0 " />

      <!-- 文字容器 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- <h1 class="text-white text-1xl md:text-1xl font-bold px-4 text-center leading-relaxed">
          吃苦改变不了命运，吃人caineng...
        </h1> -->
      </div>
    </div>
  </ShadowCard>
</template>

<style scoped>
/* 确保图片完全填充容器 */
img {
  min-width: 100%;
  min-height: 100%;
}

/* 文字阴影增强可读性 */
h1 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
