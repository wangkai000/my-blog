<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useMusicPlayerStore } from '@/stores/musicPlayer'

const musicStore = useMusicPlayerStore()
</script>

<template>
  <div class="simple-music-player">
    <div class="player-controls">
      <button class="play-btn" @click="musicStore.togglePlay">
        <div :class="{ 'animate-slow-spin': musicStore.isPlaying }">
          <Icon
            icon="carbon:music"
            width="16"
            height="16"
          />
        </div>
      </button>
      <div class="track-info">
        <div class="track-title">
          {{ musicStore.tracks[musicStore.currentTrack]?.title || '未知曲目' }}
        </div>
        <div v-if="musicStore.tracks[musicStore.currentTrack]?.artist" class="track-artist">
          {{ musicStore.tracks[musicStore.currentTrack].artist }}
        </div>
      </div>
      <button class="next-btn" @click="musicStore.nextTrack">
        ⏭
      </button>
    </div>
  </div>
</template>

<style scoped>
.simple-music-player {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 12px;
  color: white;
  min-width: 250px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.play-btn,
.next-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-btn {
  background: #ef77eb;
  font-size: 18px;
  width: 40px;
  height: 40px;
}

.play-btn:hover,
.next-btn:hover {
  opacity: 0.8;
}

.track-info {
  flex: 1;
  min-width: 0;
}

.track-title {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-artist {
  font-size: 12px;
  color: #ccc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 修改旋转动画 */
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
