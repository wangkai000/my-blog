import { defineStore } from "pinia";
import { ref } from "vue";
import { Howl } from "howler";

export const useMusicPlayerStore = defineStore("musicPlayer", () => {
    const isPlaying = ref(false);
    const currentTrack = ref(0);
    const volume = ref(0.5);

    // 音乐列表 - 使用本地音乐文件
    const tracks = ref([
        {
            title: "甘露花海",
            artist: "翔宇Tristan/骅骅Garvino",
            url: "/music/_翔宇Tristan骅骅Garvino甘露花海花与树的女儿们人声竖琴低音长笛.mp3",
        },
        {
            title: "云海之上",
            artist: "陈致逸/HOYO-MiX",
            url: "/music/_陈致逸HOYOMiX云海之上AbovetheSeaofClouds.mp3",
        },
    ]);

    // 确保 currentTrack 的值在有效范围内
    if (currentTrack.value >= tracks.value.length) {
        currentTrack.value = 0;
    }

    // Howler实例
    let sound: Howl | null = null;

    // 初始化播放器
    function initPlayer() {
        // 如果已有sound实例，先停止并卸载
        if (sound) {
            sound.stop();
            sound.unload();
            sound = null;
        }

        sound = new Howl({
            src: [tracks.value[currentTrack.value].url],
            html5: true,
            volume: volume.value,
            onplay: () => {
                isPlaying.value = true;
            },
            onpause: () => {
                isPlaying.value = false;
            },
            onstop: () => {
                isPlaying.value = false;
            },
            onend: () => {
                // 歌曲播放完成，自动播放下一首
                isPlaying.value = false;
                // 使用 setTimeout 避免在回调中直接清理 sound 实例
                setTimeout(() => {
                    nextTrack();
                }, 100);
            },
            onloaderror: (id, error) => {
                console.error(
                    "音乐加载失败:",
                    error,
                    "当前曲目:",
                    currentTrack.value,
                );
                isPlaying.value = false;
            },
            onplayerror: (id, error) => {
                console.error(
                    "音乐播放失败:",
                    error,
                    "当前曲目:",
                    currentTrack.value,
                );
                isPlaying.value = false;
            },
        });
    }

    // 播放/暂停
    function togglePlay() {
        // 确保播放器已初始化
        ensureInitialized();

        // 如果当前没有sound实例或者当前sound实例不是针对当前曲目的，则重新初始化
        if (!sound) {
            initPlayer();
        }

        // 确保sound对象有效
        if (sound) {
            if (isPlaying.value) {
                sound.pause();
            } else {
                // 在播放前确保音量设置正确
                sound.volume(volume.value);
                sound.play();
            }
        }
    }

    // 下一首
    function nextTrack() {
        currentTrack.value = (currentTrack.value + 1) % tracks.value.length;
        // 确保总是停止并清理当前播放
        if (sound) {
            sound.stop();
            sound.unload();
            sound = null;
        }
        initPlayer();
        // 无论之前是否在播放，点击下一首都应该播放
        if (sound) {
            sound.volume(volume.value);
            sound.play();
            isPlaying.value = true;
        }
    }

    // 上一首
    function prevTrack() {
        currentTrack.value =
            (currentTrack.value - 1 + tracks.value.length) %
            tracks.value.length;
        // 确保总是停止并清理当前播放
        if (sound) {
            sound.stop();
            sound.unload();
            sound = null;
        }
        initPlayer();
        // 无论之前是否在播放，点击上一首都应该播放
        if (sound) {
            sound.volume(volume.value);
            sound.play();
            isPlaying.value = true;
        }
    }

    // 增加音量
    function increaseVolume() {
        volume.value = Math.min(1, volume.value + 0.1);
        sound?.volume(volume.value);
    }

    // 减少音量
    function decreaseVolume() {
        volume.value = Math.max(0, volume.value - 0.1);
        sound?.volume(volume.value);
    }

    // 设置音量
    function setVolume(vol: number) {
        volume.value = vol;
        sound?.volume(vol);
    }

    // 初始化标志，确保只初始化一次
    let isInitialized = false;

    // 确保播放器已初始化（只在首次使用时初始化空的播放器状态）
    function ensureInitialized() {
        if (!isInitialized) {
            // 只标记为已初始化，不实际初始化播放器
            // 播放器会在第一次播放时才真正初始化
            isInitialized = true;
        }
    }

    return {
        isPlaying,
        currentTrack,
        volume,
        tracks,
        togglePlay,
        nextTrack,
        prevTrack,
        increaseVolume,
        decreaseVolume,
        setVolume,
        ensureInitialized,
    };
});
