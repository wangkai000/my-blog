<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { calculateDateDistance } from '~/utils'

// 定义博客统计数据类型
interface BlogStats {
  totalVisits: number | string
  dailyVisits: number | string
  runningDays: number
  notice: string
}

// 博客统计数据
const stats = ref<BlogStats>({
  totalVisits: '--',
  dailyVisits: '--',
  runningDays: 0,
  notice: '😄👏远方的朋友，你好啊！',
})

stats.value.runningDays = calculateDateDistance('2024-05-20').totalDays || 0
</script>

<template>
  <ShadowCard class="!p-[5px]">
    <div class="relative w-[360px] h-[170px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
      <!-- 渐变背景层 -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 z-0" />

      <!-- 装饰元素 -->
      <div class="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl" />

      <!-- 内容容器 -->
      <div class="relative z-10 h-full p-4 flex flex-col">
        <!-- 数据统计 -->
        <div class="grid grid-cols-3 gap-3 mb-2 flex-grow">
          <!-- 总访问量 -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20">
            <div class="text-white text-xl font-bold mb-1">
              {{ stats.totalVisits }}
            </div>
            <div class="text-blue-100 text-xs font-medium">
              总访问量
            </div>
          </div>

          <!-- 日访问量 -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20">
            <div class="text-white text-xl font-bold mb-1">
              {{ stats.dailyVisits }}
            </div>
            <div class="text-blue-100 text-xs font-medium">
              日访问量
            </div>
          </div>

          <!-- 运行天数 -->
          <div class="bg-gradient-to-r from-cyan-500/80 to-teal-500/80 rounded-xl p-2 flex flex-col items-center justify-center shadow-md transition-all duration-300 hover:scale-[1.03]">
            <div class="text-white text-xl font-bold mb-1">
              {{ stats.runningDays }}
            </div>
            <div class="text-cyan-100 text-xs font-medium">
              运行天数
            </div>
          </div>
        </div>

        <!-- 公告栏 - 修复对齐问题 -->
        <div class="bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-lg p-2 flex items-center backdrop-blur-sm h-8">
          <!-- 公告标签 - 确保垂直居中 -->
          <div class="text-white text-xs font-semibold bg-blue-500/80 rounded px-2 py-1 mr-2 h-6 flex items-center justify-center">
            公告
          </div>

          <!-- 滚动文字容器 - 确保垂直居中 -->
          <div class="flex-1 min-w-0 overflow-hidden h-6 flex items-center">
            <div class="text-white text-xs font-medium whitespace-nowrap animate-marquee">
              {{ stats.notice }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ShadowCard>
</template>

<style scoped>
.animate-marquee {
  /* display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
  line-height: 1.5; */
  /* 添加行高确保垂直居中 */
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
