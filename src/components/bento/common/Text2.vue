<script setup>
import { ref } from 'vue'

const backgroundUrl = ref('https://s21.ax1x.com/2024/12/22/pAXtJat.jpg')
</script>

<template>
  <ShadowCard class="justify-between !p-[5px]">
    <div
      class="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
      style="background-position: revert;
    background-repeat: no-repeat;
    background-size: contain;"
    >
      <div class="absolute inset-0" />
      <div class="relative text-center p-8 max-w-2xl mx-auto" />
    </div>
  </ShadowCard>
</template>

<style scoped></style>
