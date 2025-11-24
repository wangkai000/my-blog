<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import { useMusicPlayerStore } from "@/stores/musicPlayer";

const musicStore = useMusicPlayerStore();
const isInitialized = ref(false);
const error = ref<string | null>(null);

// 初始化播放器
function initializePlayer() {
    try {
        // 调用 store 的初始化方法，确保全局只有一个音频实例
        if (!isInitialized.value) {
            musicStore.ensureInitialized();
            isInitialized.value = true;
        }
        error.value = null;
    } catch (err) {
        error.value = "播放器初始化失败";
        console.error("Music player initialization error:", err);
    }
}

onMounted(() => {
    initializePlayer();
});

// 添加一个方法来处理播放错误
function handlePlayError() {
    error.value = "播放失败，请检查网络连接";
}
</script>

<template>
    <div class="music-bento-component p-3 h-full flex flex-col justify-center">
        <h3 class="text-sm font-bold mb-3 text-center">音乐播放器</h3>
        <div v-if="error" class="text-red-500 text-xs text-center mb-2">
            {{ error }}
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
                <button class="control-btn" @click="musicStore.prevTrack">
                    <Icon icon="carbon:caret-left" width="16" height="16" />
                </button>
                <button
                    class="play-btn flex-shrink-0"
                    @click="musicStore.togglePlay"
                    @error="handlePlayError"
                >
                    <div :class="{ 'animate-slow-spin': musicStore.isPlaying }">
                        <Icon
                            v-if="musicStore.isPlaying"
                            icon="carbon:stop-filled"
                            width="20"
                            height="20"
                        />
                        <Icon
                            v-else
                            icon="carbon:play-filled"
                            width="20"
                            height="20"
                        />
                    </div>
                </button>
                <button class="control-btn" @click="musicStore.nextTrack">
                    <Icon icon="carbon:caret-right" width="16" height="16" />
                </button>
            </div>
            <div
                class="track-title text-sm whitespace-nowrap overflow-hidden text-ellipsis text-center"
            >
                {{
                    musicStore.tracks[musicStore.currentTrack]?.title ||
                    "未知曲目"
                }}
                <div
                    v-if="musicStore.tracks[musicStore.currentTrack]?.artist"
                    class="track-artist text-xs text-gray-300"
                >
                    {{ musicStore.tracks[musicStore.currentTrack].artist }}
                </div>
            </div>
            <div class="flex items-center justify-between">
                <button class="volume-btn" @click="musicStore.decreaseVolume">
                    <Icon icon="carbon:volume-down" width="16" height="16" />
                </button>
                <div class="w-24 h-1 bg-gray-600 rounded-full overflow-hidden">
                    <div
                        class="h-full bg-pink-500"
                        :style="{ width: `${musicStore.volume * 100}%` }"
                    />
                </div>
                <button class="volume-btn" @click="musicStore.increaseVolume">
                    <Icon icon="carbon:volume-up" width="16" height="16" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.music-bento-component {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.music-bento-component h3 {
    color: white;
    text-shadow: 0 0 10px rgba(239, 119, 235, 0.7);
}

.control-btn,
.play-btn,
.volume-btn {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.play-btn {
    background: #ef77eb;
    width: 30px;
    height: 30px;
}

.control-btn:hover,
.play-btn:hover,
.volume-btn:hover {
    opacity: 0.8;
}

.track-title {
    color: white;
    font-size: 12px;
}

.track-artist {
    color: #ccc;
    font-size: 10px;
    margin-top: 2px;
}

.volume-btn {
    width: 20px;
    height: 20px;
}

/* 添加旋转动画 */
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
