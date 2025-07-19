<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as motivateQuotes from "motivate-quotes";

const parsedQuote = ref("");
const quoteAuthor = ref("");

// 本地兜底短语（仅用于异常情况）
const localQuotes = ["吃苦改变不了命运，吃人才能...  — Unknown"];

// 解析短语和作者信息
function parseQuote(data: any) {
    parsedQuote.value = "";
    quoteAuthor.value = "";

    try {
        const jsonData = typeof data === "string" ? JSON.parse(data) : data;
        // 适配常见的引用数据格式
        if (jsonData.quote && jsonData.author) {
            parsedQuote.value = jsonData.quote;
            quoteAuthor.value = jsonData.author;
        } else if (jsonData.text && jsonData.author) {
            parsedQuote.value = jsonData.text;
            quoteAuthor.value = jsonData.author;
        } else if (jsonData.text) {
            parsedQuote.value = jsonData.text;
            quoteAuthor.value = jsonData.by || "Unknown";
        } else {
            parsedQuote.value = String(jsonData);
            quoteAuthor.value = "";
        }
    } catch {
        // 处理字符串格式的引用（支持半角-和全角—分隔）
        const strData = String(data).trim();
        const separatorIndex = Math.max(
            strData.lastIndexOf("—"),
            strData.lastIndexOf("-"),
        );
        if (separatorIndex > 0) {
            parsedQuote.value = strData.substring(0, separatorIndex).trim();
            quoteAuthor.value =
                strData.substring(separatorIndex + 1).trim() || "Unknown";
        } else {
            parsedQuote.value = strData;
            quoteAuthor.value = "Unknown";
        }
    }
}

// 随机获取短语（99%概率使用库数据，1%使用本地兜底）
function getRandomQuote() {
    const isLocal = Math.random() < 0.01;
    const rawData = isLocal
        ? localQuotes[Math.floor(Math.random() * localQuotes.length)]
        : motivateQuotes.getRandomQuote();
    parseQuote(rawData);
}

// 刷新短语（带动画过渡）
function refreshQuote() {
    const quoteEl = document.querySelector(".quote-content");
    const authorEl = document.querySelector(".quote-author");

    if (quoteEl) quoteEl.classList.add("opacity-0", "scale-95");
    if (authorEl) authorEl.classList.add("opacity-0");

    setTimeout(() => {
        getRandomQuote();
        if (quoteEl) quoteEl.classList.remove("opacity-0", "scale-95");
        if (authorEl) authorEl.classList.remove("opacity-0");
    }, 300);
}

// 初始化加载
onMounted(() => {
    getRandomQuote();
});
</script>

<template>
    <!-- 外层绝对居中容器 -->
    <div class="fixed mt-40 mb-40 inset-0 flex items-center justify-center z-1">
        <!-- 原外层容器 -->
        <div
            class="max-w-[460px] rounded-lg flex items-center justify-center m-4 bg-slate-900 text-slate-50"
        >
            <!-- 装饰元素 -->
            <div
                class="absolute top-1/5 left-1/5 w-16 h-16 bg-blue-400/10 rounded-full blur-xl"
            />
            <div
                class="absolute bottom-1/5 right-1/5 w-12 h-12 bg-indigo-400/10 rounded-full blur-lg"
            />

            <!-- 主内容容器 -->
            <div
                class="w-full max-w-md relative group flex flex-col items-center justify-center min-h-[300px]"
            >
                <!-- 外层蓝色背景 -->
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-xl transform scale-110 blur-sm opacity-90 group-hover:scale-115 transition-all duration-500"
                />

                <!-- 内容主体 -->
                <div
                    class="relative bg-white/8 backdrop-blur-md border border-blue-300/20 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col items-center justify-center w-full"
                >
                    <div
                        class="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-4 self-start"
                    />

                    <div
                        class="text-blue-300/40 text-4xl absolute top-4 right-4 opacity-50"
                    >
                        "
                    </div>

                    <!-- 短语内容 -->
                    <p
                        class="quote-content text-base md:text-lg leading-relaxed min-h-[80px] mb-3 px-2 font-light text-white text-center transition-all duration-300"
                    >
                        {{ parsedQuote }}
                    </p>

                    <!-- 作者信息 -->
                    <p
                        v-if="quoteAuthor"
                        class="quote-author text-right text-blue-100/90 text-sm italic mb-4 pr-2 self-end transition-all duration-300"
                    >
                        — {{ quoteAuthor }}
                    </p>

                    <!-- 刷新按钮 -->
                    <div class="flex justify-center mb-4 w-full">
                        <button
                            class="flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-all duration-300 px-4 py-2 rounded-full text-xs md:text-sm backdrop-blur-sm border border-blue-300/20 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                            @click="refreshQuote"
                        >
                            <span>换一句</span>
                            <svg
                                class="w-3 h-3 md:w-4 md:h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        class="mt-auto text-center text-blue-100/60 text-xs pt-2 border-t border-blue-300/10 w-full"
                    >
                        <p>✨ 每日灵感 · 伴你前行 ✨</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.quote-content {
    transition: all 0.3s ease-out;
}
.absolute.inset-0:nth-child(2) {
    width: 110%;
    height: 110%;
    left: -5%;
    top: -5%;
}
.absolute.inset-0:nth-child(1) {
    width: 100%;
    height: 100%;
    filter: blur(1px);
}

@media (max-width: 640px) {
    .quote-content {
        font-size: 0.95rem;
        line-height: 1.6;
    }
    .max-w-md {
        max-width: 90%;
    }
    .absolute.inset-0:nth-child(2) {
        width: 108%;
        height: 108%;
        left: -4%;
        top: -4%;
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

@media (prefers-color-scheme: dark) {
    .quote-content {
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .border-blue-300\/20 {
        border-color: rgba(147, 197, 253, 0.15);
    }
}
</style>
