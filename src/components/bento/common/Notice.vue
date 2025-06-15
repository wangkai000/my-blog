<script setup lang="ts">
import { onMounted, ref } from "vue";
import { calculateDateDistance } from "~/utils";

interface BlogStats {
    totalVisits: number | string;
    dailyVisits: number | string;
    runningDays: number;
    notice: string;
}

const stats = ref<BlogStats>({
    totalVisits: "--",
    dailyVisits: "--",
    runningDays: 0,
    notice: "😄👏远方的朋友，你好啊！",
});

stats.value.runningDays = calculateDateDistance("2024-05-20").totalDays || 0;
</script>

<template>
    <ShadowCard class="!p-[5px]">
        <!-- 修改外层容器：最大宽度360px，宽度100%自适应 -->
        <div
            class="relative w-full max-w-[360px] h-[170px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
        >
            <!-- 渐变背景层 -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 z-0"
            />

            <!-- 装饰元素 -->
            <div
                class="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />
            <div
                class="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"
            />

            <!-- 内容容器 -->
            <div class="relative z-10 h-full p-4 flex flex-col">
                <!-- 修改网格布局为响应式 -->
                <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-2 flex-grow">
                    <div
                        class="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20"
                    >
                        <div
                            class="text-white text-lg sm:text-xl font-bold mb-1"
                        >
                            {{ stats.totalVisits }}
                        </div>
                        <div
                            class="text-blue-100 text-[10px] sm:text-xs font-medium"
                        >
                            总访问量
                        </div>
                    </div>

                    <div
                        class="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20"
                    >
                        <div
                            class="text-white text-lg sm:text-xl font-bold mb-1"
                        >
                            {{ stats.dailyVisits }}
                        </div>
                        <div
                            class="text-blue-100 text-[10px] sm:text-xs font-medium"
                        >
                            日访问量
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-r from-cyan-500/80 to-teal-500/80 rounded-xl p-2 flex flex-col items-center justify-center shadow-md transition-all duration-300 hover:scale-[1.03]"
                    >
                        <div
                            class="text-white text-lg sm:text-xl font-bold mb-1"
                        >
                            {{ stats.runningDays }}
                        </div>
                        <div
                            class="text-cyan-100 text-[10px] sm:text-xs font-medium"
                        >
                            运行天数
                        </div>
                    </div>
                </div>

                <!-- 公告栏 -->
                <div
                    class="bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-lg p-2 flex items-center backdrop-blur-sm h-8"
                >
                    <div
                        class="text-white text-xs font-semibold bg-blue-500/80 rounded px-2 py-1 mr-2 h-6 flex items-center justify-center"
                    >
                        公告
                    </div>
                    <div
                        class="flex-1 min-w-0 overflow-hidden h-6 flex items-center"
                    >
                        <div
                            class="text-white text-xs font-medium whitespace-nowrap animate-marquee"
                        >
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
  animation: marquee 15s linear infinite; */
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

/* 小屏幕下的文字大小优化 */
@media (max-width: 340px) {
    .text-lg {
        font-size: 1rem;
    }
    .text-\[10px\] {
        font-size: 0.6rem;
    }
}
</style>
