import { defineStore } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { Howl } from 'howler'

export const useMusicPlayerStore = defineStore('musicPlayer', () => {
  const isPlaying = ref(false)
  const currentTrack = ref(0)
  const volume = ref(0.5)

  // 音乐列表 - 使用网络音乐链接
  const tracks = ref([
    {
      title: '甘露花海',
      artist: '翔宇Tristan/骅骅Garvino',
      url: '/music/_翔宇Tristan骅骅Garvino甘露花海花与树的女儿们人声竖琴低音长笛.mp3',
    },
    {
      title: '云海之上',
      artist: '陈致逸/HOYO-MiX',
      url: '/music/_陈致逸HOYOMiX云海之上AbovetheSeaofClouds.mp3',
    },
    // {
    //   title: '永恒绿洲-媲美原版的翻唱（人声+竖琴+长笛）',
    //   artist: '翔宇Tristan',
    //   url: 'https://m704.music.126.net/20251116150017/a29b6018f540362701795194d0a28d30/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/25283889809/093f/a4bc/bc89/cd1ff39a51b72c34341a8541753aabed.m4a?vuutv=/cRNzqCndzDdf2FlHE7BrOOywPCZFoJIAy2Ry6FhJb/a9UE4WyVOF8wbYPWb90Z8TO4ik4UFKDHVJidDzXOgfQtWJkcdVlRMkimIihYFlpM=&authSecret=0000019a8b6005fd1b310a3b1dce16c3',
    // },
    // {
    //   title: '时暮的思眷',
    //   artist: 'HOYO-MiX',
    //   url: 'https://m804.music.126.net/20251116144956/3a5348a8861514fac8298c84df148b3d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/30605255274/a072/4965/99c6/61d6f4735d687855dd335a24241444b7.m4a?vuutv=GZL1++1X9dQ+B/osxjapIN61kTgygl7yaAS6y4S2QAKFlyFb3Hi1RQ23C4vZwpCuGkkSTIbSpp4TqSnnmDUwUIPT9jIvb0zFPaY/B498nRo=&authSecret=0000019a8b568b3215490aaf623e0006',
    // },
  ])

  // Howler实例
  let sound: Howl | null = null

  // 初始化播放器
  function initPlayer() {
    // 如果已有sound实例，先停止并卸载
    if (sound) {
      sound.stop()
      sound.unload()
      sound = null
    }

    sound = new Howl({
      src: [tracks.value[currentTrack.value].url],
      html5: true,
      volume: volume.value,
      onplay: () => {
        isPlaying.value = true
      },
      onpause: () => {
        isPlaying.value = false
      },
      onstop: () => {
        isPlaying.value = false
      },
      onend: () => {
        isPlaying.value = false
        // 自动播放下一首
        nextTrack()
      },
    })
  }

  // 播放/暂停
  function togglePlay() {
    // 如果当前没有sound实例或者当前sound实例不是针对当前曲目的，则重新初始化
    if (!sound || !sound.playing()) {
      initPlayer()
    }

    // 确保sound对象有效
    if (sound) {
      if (isPlaying.value) {
        sound.pause()
      }
      else {
        // 在播放前确保音量设置正确
        sound.volume(volume.value)
        sound.play()
      }
    }
  }

  // 下一首
  function nextTrack() {
    currentTrack.value = (currentTrack.value + 1) % tracks.value.length
    // 先停止当前播放
    if (sound && isPlaying.value) {
      sound.stop()
    }
    initPlayer()
    if (isPlaying.value && sound) {
      sound.volume(volume.value)
      sound.play()
    }
  }

  // 上一首
  function prevTrack() {
    currentTrack.value = (currentTrack.value - 1 + tracks.value.length) % tracks.value.length
    // 先停止当前播放
    if (sound && isPlaying.value) {
      sound.stop()
    }
    initPlayer()
    if (isPlaying.value && sound) {
      sound.volume(volume.value)
      sound.play()
    }
  }

  // 增加音量
  function increaseVolume() {
    volume.value = Math.min(1, volume.value + 0.1)
    sound?.volume(volume.value)
  }

  // 减少音量
  function decreaseVolume() {
    volume.value = Math.max(0, volume.value - 0.1)
    sound?.volume(volume.value)
  }

  // 设置音量
  function setVolume(vol: number) {
    volume.value = vol
    sound?.volume(vol)
  }

  // 组件挂载时初始化
  onMounted(() => {
    // 延迟初始化以确保DOM完全加载
    setTimeout(() => {
      initPlayer()
    }, 100)
  })

  // 组件卸载时清理
  onUnmounted(() => {
    if (sound) {
      sound.unload()
    }
  })

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
  }
})
