<script setup lang="ts">
import { onMounted, ref } from "vue";

// 深色模式状态
const isDark = useDark();
// 初始化深色模式状态
onMounted(() => {
    // 检查系统偏好设置
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
});
</script>

<template>
    <ShadowCard class="!p-[5px]">
        <div class="h-full flex justify-center items-center p-3">
            <div
                class="theme-toggle relative w-[70px] h-[34px] rounded-full cursor-pointer"
                :class="{
                    'bg-gradient-to-br from-gray-900 to-gray-700 shadow-[5px_5px_10px_#0d0d0d,_-5px_-5px_10px_#3d3d3d] ring-2 ring-gray-700':
                        isDark,
                    'bg-gradient-to-br from-gray-200 to-white shadow-[5px_5px_10px_#d9d9d9,_-5px_-5px_10px_#ffffff] ring-2 ring-gray-300':
                        !isDark,
                }"
                @click="toggleDark"
            >
                <div
                    class="sun-moon absolute top-1/2 w-[26px] h-[26px] -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
                    :class="isDark ? 'left-[calc(100%-30px)]' : 'left-1'"
                >
                    <!-- 太阳 -->
                    <div
                        class="absolute inset-0 rounded-full transition-opacity duration-300 bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-[0_0_8px_rgba(255,183,0,0.8)]"
                        :class="{
                            'opacity-100': !isDark,
                            'opacity-0': isDark,
                        }"
                    >
                        <div
                            class="absolute top-1 right-1 w-1.5 h-1.5 bg-white/80 rounded-full"
                        />
                    </div>

                    <!-- 月亮 -->
                    <div
                        class="absolute inset-0 rounded-full transition-opacity duration-300 bg-gray-300 shadow-[0_0_8px_rgba(224,224,224,0.8)]"
                        :class="{
                            'opacity-100': isDark,
                            'opacity-0': !isDark,
                        }"
                    >
                        <div
                            class="absolute top-1\.3 left-1\.3 w-3.5 h-3.5 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </ShadowCard>
</template>

<style scoped>
.theme-toggle {
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.theme-toggle:hover {
    transform: scale(1.05);
}

.theme-toggle:hover .sun-moon {
    transform: translateY(-50%) rotate(15deg);
}

.theme-toggle:hover .sun-moon {
    transform: translateY(-50%) rotate(15deg);
}

.dark-mode:hover .sun-moon {
    transform: translateY(-50%) rotate(-15deg);
}
</style>
