<script setup lang="ts">
import { computed, h, onMounted, ref } from "vue";
// 导入naive-ui的默认导出，然后解构出需要的组件和函数
import { NAvatar, useNotification } from "naive-ui";
import { Icon } from "@iconify/vue";

// 1. 先定义接口（关键修复：必须在 withDefaults 之前）
interface Props {
    message?: string;
    gradient?: string;
    duration?: number; // 通知显示时长(毫秒)
    icon?: string; // 可自定义图标
}

// 2. 再使用接口定义 props（顺序修复）
const props = withDefaults(defineProps<Props>(), {
    message: "来自远方的朋友,你好呀！",
    gradient: "from-blue-500 to-indigo-600",
    duration: 3000,
    meta: "2025-5-27 15:11",
    icon: "mdi:bell-outline",
});

// 初始化通知实例
const notification = useNotification();

// 响应式状态
const showExpandIndicator = ref(false);
const isNotifying = ref(false);

// 计算渐变样式
const gradientClass = computed(() => `bg-gradient-to-br ${props.gradient}`);

// 显示推送通知
function showNotice() {
    if (isNotifying.value) return;
    isNotifying.value = true;

    const notice = notification.create({
        title: "公告",
        // description: 'From the Beach Boys',
        content: props.message,
        meta: props.meta,
        duration: 0,
        closable: true,
        avatar: () =>
            h(NAvatar, {
                size: "small",
                round: true,
                src: "/logo.png",
            }),
        onClose: () => {
            isNotifying.value = false;
        },
    });

    // 自动关闭
    setTimeout(() => {
        notice.destroy();
        isNotifying.value = false;
    }, props.duration);
}

// 检测展开提示
onMounted(() => {
    showExpandIndicator.value = props.message.length > 30;
});
</script>

<template>
    <ShadowCard class="!p-[5px] cursor-pointer" @click="showNotice">
        <div class="relative w-full h-full">
            <!-- 公告卡片 -->
            <div
                class="announcement-box relative overflow-hidden"
                :class="gradientClass"
            >
                <!-- 装饰元素 -->
                <div
                    class="decorative-circle w-[60px] h-[60px] -top-4 -left-4"
                />
                <div
                    class="decorative-circle w-[40px] h-[40px] -bottom-3 -right-3"
                />
                <div
                    class="decorative-corner top-3 left-3 border-r-0 border-b-0 rounded-tl-[12px]"
                />
                <div
                    class="decorative-corner bottom-3 right-3 border-l-0 border-t-0 rounded-br-[12px]"
                />

                <!-- 消息内容 -->
                <div
                    class="absolute inset-0 flex items-center justify-center p-4 z-10"
                >
                    <p
                        class="message text-white text-center font-medium leading-relaxed"
                        :class="{ 'text-fade': showExpandIndicator }"
                    >
                        {{ message }}
                    </p>
                </div>

                <!-- 查看提示 -->
                <div
                    v-if="showExpandIndicator"
                    class="absolute bottom-3 left-0 right-0 z-20 flex justify-center"
                >
                    <div
                        class="flex items-center px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full animate-pulse"
                    >
                        <span class="text-xs text-white/90 mr-1">点击查看</span>
                        <Icon
                            icon="ic:round-chevron-right"
                            class="text-white text-xs"
                        />
                    </div>
                </div>
            </div>
        </div>
    </ShadowCard>
</template>

<style scoped>
/* 公告卡片样式 */
.announcement-box {
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.announcement-box:hover {
    transform: translateY(-8px) rotate(2deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* 消息样式 */
.message {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.text-fade {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

/* 装饰元素 */
.decorative-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
}

.decorative-corner {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    z-index: 1;
}

/* 动画 */
@keyframes pulse {
    0%,
    100% {
        opacity: 0.8;
        transform: translateY(0);
    }
    50% {
        opacity: 1;
        transform: translateY(-2px);
    }
}

.animate-pulse {
    animation: pulse 1.5s ease-in-out infinite;
}
</style>
