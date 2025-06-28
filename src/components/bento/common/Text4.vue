<script setup>
import { ref } from "vue";

const backgroundUrl = ref("https://s21.ax1x.com/2025/06/22/pVZdFOJ.jpg");
</script>

<template>
    <ShadowCard class="justify-between !p-[5px]">
        <!-- 外层容器设置为16:8比例 -->
        <div class="relative aspect-[16/8] overflow-hidden rounded-md">
            <!-- 背景图片层 -->
            <div
                class="absolute inset-0 bg-cover bg-center"
                :style="{ backgroundImage: `url(${backgroundUrl})` }"
            />

            <!-- 黑色遮罩层 -->
            <div class="absolute inset-0 bg-black/10" />

            <!-- 文字容器 - 使用flex居中 -->
            <div class="absolute inset-0 flex items-center justify-center">
                <!-- 文字内容 -->
                <h1
                    class="text-white text-1xl md:text-1xl font-bold px-4 text-center leading-relaxed"
                >
                    吃苦改变不了命运，吃人caineng...
                </h1>
            </div>
        </div>
    </ShadowCard>
</template>

<style scoped>
/* 添加文字阴影增强可读性 */
h1 {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
