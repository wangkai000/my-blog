<script setup lang="ts">
// import BlogTextList from '~/components/blog/TextList.vue'
import Loading from "@/components/normal/Loading.vue";
</script>

<template>
    <Suspense>
        <div
            class="mx-auto block min-h-screen w-full flex items-center justify-center px-6"
        >
            <!-- <BlogTextList /> -->
            <Loading />
        </div>
    </Suspense>
</template>

<style scoped>
/* 全局重置，确保没有默认边距 */
* {
    margin: 0 !important;
    padding: 0 !important;
}

/* 隐藏滚动条但保留滚动功能 */
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* 关键：确保iframe不会因为滚动条而产生偏移 */
iframe {
    overflow: auto;
    transform: translateZ(0); /* 硬件加速，减少渲染问题 */
}

/* 处理iOS上的特殊情况 */
@supports (-webkit-overflow-scrolling: touch) {
    iframe {
        height: calc(100vh + 1px); /* 稍微超出一点，避免底部出现缝隙 */
        width: calc(100vw + 1px);
    }
}
</style>
