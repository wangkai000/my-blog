<script lang="ts" setup>
const friends = [
    {
        title: "dev-zuo",
        description: "dev-zuo 技术日常",
        avatar: "http://www.zuo11.com/images/favicon.ico",
        url: "http://www.zuo11.com/",
    },
    {
        title: "博客录",
        description: "一个个人博客收集平台",
        avatar: "https://boke.lu/博客录新图标透明底圆底(1).png",
        url: "https://boke.lu/",
    },
    {
        title: "Web3导航",
        description: "一个不错的Web3资源收集平台",
        avatar: "https://www.d1dns.com/assets/images/favicon.png",
        url: "https://www.d1dns.com/",
    },
    {
        title: "AI工具集",
        description: "一个不错的AI工具收集网站",
        avatar: "https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-square-logo.png",
        url: "https://ai-bot.cn/",
    },
    // 添加更多友链...
];
</script>

<template>
    <div class="min-h-screen p-4 md:p-8">
        <div class="mx-auto max-w-6xl">
            <h1 class="mb-8 text-3xl font-bold text-gray-800">友情链接</h1>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <a
                    v-for="(friend, index) in friends"
                    :key="index"
                    :href="friend.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="friend-card group flex items-center rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 active:scale-95 active:bg-gray-50"
                >
                    <img
                        :src="friend.avatar"
                        alt="avatar"
                        class="h-12 w-12 rounded-full object-cover md:h-16 md:w-16"
                    />

                    <div class="ml-4 flex-1">
                        <h2
                            class="text-lg font-medium text-gray-800 md:text-xl"
                        >
                            {{ friend.title }}
                        </h2>
                        <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            {{ friend.description }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 自定义行数限制 */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.friend-card:hover {
    background-color: #dddddd;
}

@media (hover: none) {
    /* 移动端专用效果 */
    .friend-card:active {
        transform: scale(0.98);
        background-color: rgba(0, 0, 0, 0.05);
    }
}
</style>
