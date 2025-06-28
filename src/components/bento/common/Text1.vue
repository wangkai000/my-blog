<script setup>
import { ref } from "vue";

const backgroundUrl = ref("https://s21.ax1x.com/2025/06/22/pVZaNM4.jpg");
</script>

<template>
    <ShadowCard class="justify-between !p-[5px]">
        <!-- 竖屏容器：8:18比例 -->
        <div class="relative aspect-[8/18] overflow-hidden">
            <!-- 图片容器 -->
            <div class="absolute inset-0">
                <img
                    :src="backgroundUrl"
                    alt="竖屏背景"
                    class="w-full h-full object-cover object-center"
                />
            </div>

            <!-- 遮罩层 -->
            <div class="absolute inset-0 bg-black/10" />

            <!-- 文字内容 -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="relative text-center p-8 max-w-2xl mx-auto">
                    <!-- 这里可以添加文字内容 -->
                </div>
            </div>
        </div>
    </ShadowCard>
</template>

<style scoped>
/* 移除所有圆角效果 */
</style>
