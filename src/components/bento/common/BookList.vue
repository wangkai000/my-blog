<script setup>
import { computed, ref } from "vue";

// 书籍数据
const books = ref([
    {
        id: 1,
        title: "Vue.js设计与实现",
        author: "霍春阳",
        description:
            "本书从源码层面分析了Vue.js的设计与实现，详细讲解了Vue.js的核心概念和实现原理，帮助开发者深入理解Vue.js框架的设计思想。",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "JavaScript高级程序设计",
        author: "Nicholas C. Zakas",
        description:
            "本书是JavaScript经典图书的最新版，全面深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及ECMAScript和DOM等核心概念。",
        cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "深入浅出Node.js",
        author: "朴灵",
        description:
            "本书从不同的视角介绍了Node内在的特点和结构，由首章Node介绍为索引，涉及Node的各个方面，主要内容包含模块机制的揭示、异步I/O实现原理的展现等。",
        cover: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "CSS揭秘",
        author: "Lea Verou",
        description:
            "本书是一本注重实践的教程，作者为我们揭示了47个鲜为人知的CSS技巧，主要内容包括背景与边框、形状、视觉效果、字体排印、用户体验等。",
        cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
]);

// 当前书籍索引
const currentIndex = ref(0);

// 当前显示的书籍
const currentBook = computed(() => {
    return books.value[currentIndex.value];
});

// 切换到下一本书
function nextBook() {
    currentIndex.value = (currentIndex.value + 1) % books.value.length;
}

// 切换到上一本书
function prevBook() {
    currentIndex.value =
        (currentIndex.value - 1 + books.value.length) % books.value.length;
}

// 直接选择书籍
function selectBook(index) {
    currentIndex.value = index;
}
</script>

<template>
    <ShadowCard class="!p-[5px]">
        <div class="book-showcase-container">
            <div class="book-card">
                <!-- 书单标题 -->
                <div class="book-header">
                    <h2 class="section-title">我的书单📚</h2>
                    <div class="book-count">
                        <span>{{ currentIndex + 1 }}</span
                        >/<span>{{ books.length }}</span>
                    </div>
                </div>

                <!-- 书籍内容区域 -->
                <div class="book-content">
                    <!-- 书籍封面 -->
                    <div class="book-cover-container">
                        <img
                            :src="currentBook.cover"
                            :alt="currentBook.title"
                            class="book-cover"
                        />
                    </div>

                    <!-- 书籍信息 -->
                    <div class="book-info">
                        <h3 class="book-title">
                            {{ currentBook.title }}
                        </h3>
                        <p class="book-author">
                            {{ currentBook.author }}
                        </p>
                        <div class="book-description-container">
                            <p class="book-description">
                                {{ currentBook.description }}
                            </p>
                        </div>

                        <!-- 书籍切换导航 -->
                        <div class="book-navigation">
                            <button class="nav-button" @click="prevBook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div class="book-indicators">
                                <span
                                    v-for="(book, index) in books"
                                    :key="book.id"
                                    class="book-indicator"
                                    :class="[
                                        { active: index === currentIndex },
                                    ]"
                                    @click="selectBook(index)"
                                />
                            </div>

                            <button class="nav-button" @click="nextBook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShadowCard>
</template>

<style scoped>
.book-showcase-container {
    @apply flex justify-center items-center;
}

.book-card {
    @apply w-full max-w-[560px] h-[370px] flex flex-col
         rounded-2xl overflow-hidden shadow-2xl
         bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600
         transition-all duration-300;
}

.book-header {
    @apply flex justify-between items-center px-6 pt-4 pb-2;
    background: rgba(255, 255, 255, 0.1);
}

.section-title {
    @apply text-xl font-bold text-white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.book-count {
    @apply bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium;
}

.book-content {
    @apply flex flex-1 flex-col md:flex-row px-4 pb-4;
}

.book-cover-container {
    @apply flex items-center justify-center p-4 w-full md:w-2/5;
}

.book-cover {
    @apply h-[200px] md:h-[240px] object-contain rounded-lg shadow-lg
         transition-transform duration-300 hover:scale-105;
}

.book-info {
    @apply flex flex-col p-4 w-full md:w-3/5 text-white;
}

.book-title {
    @apply text-lg md:text-xl font-bold mb-2 truncate;
}

.book-author {
    @apply text-sm text-purple-100 mb-3;
}

.book-description-container {
    @apply flex-1 overflow-y-auto mb-4 pr-2;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.book-description-container::-webkit-scrollbar {
    width: 6px;
}

.book-description-container::-webkit-scrollbar-thumb {
    @apply bg-white/30 rounded-full;
}

.book-description {
    @apply text-sm md:text-base leading-relaxed;
}

.book-navigation {
    @apply flex items-center justify-between;
}

.nav-button {
    @apply p-2 rounded-full bg-white/20 hover:bg-white/30
         transition-colors duration-200 flex items-center justify-center;
}

.book-indicators {
    @apply flex space-x-2;
}

.book-indicator {
    @apply w-3 h-3 rounded-full bg-white/30 cursor-pointer
         transition-all duration-300;
}

.book-indicator.active {
    @apply bg-white w-6;
}

/* 响应式窄屏适配 */
@media (max-width: 480px) {
    .book-card {
        @apply h-auto min-h-[370px];
    }

    .book-content {
        @apply flex-col;
    }

    .book-cover {
        @apply h-[180px];
    }

    .book-info {
        @apply p-2;
    }
}
</style>
