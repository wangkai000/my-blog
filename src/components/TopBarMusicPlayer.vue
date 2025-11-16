<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { useMusicPlayerStore } from '@/stores/musicPlayer'

const musicStore = useMusicPlayerStore()
const error = ref<string | null>(null)

// 确保播放器初始化
async function initializePlayer() {
  try {
    error.value = null
  }
  catch (err) {
    error.value = '播放器初始化失败'
    console.error('Top bar music player initialization error:', err)
  }
}

onMounted(() => {
  initializePlayer()
})

defineExpose({
  togglePlay: musicStore.togglePlay,
})
</script>

<template>
  <div class="top-bar-music-player">
    <div v-if="error" class="text-red-500 text-xs absolute top-10 left-0">
      {{ error }}
    </div>
    <button class="play-btn !outline-none" @click="musicStore.togglePlay">
      <div class="flex items-center" :class="{ 'animate-slow-spin': musicStore.isPlaying }">
        <Icon
          icon="carbon:music"
          width="16"
          height="16"
        />
      </div>
    </button>
  </div>
</template>

<style scoped>
.top-bar-music-player {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.play-btn {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-btn:hover {
  opacity: 0.8;
}

/* 添加慢速旋转动画 */
@keyframes slow-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-slow-spin {
  animation: slow-spin 2s linear infinite;
}
</style>
