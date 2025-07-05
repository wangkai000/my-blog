<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Icon } from "@iconify/vue";

// 定义资源类型
interface Resource {
    id: number;
    title: string;
    description: string;
    url: string;
    tags: string[];
    imageUrl: string;
    bgGradient: string;
    imageError?: boolean;
}

// 渐变背景
const gradients = [
    "linear-gradient(135deg, rgba(58, 12, 163, 0.9), rgba(114, 9, 183, 0.85))",
    "linear-gradient(135deg, rgba(119, 9, 183, 0.85), rgba(255, 150, 200, 0.5))",
    "linear-gradient(135deg, rgba(255, 150, 200, 0.8), rgba(255, 180, 220, 0.8))",
    "linear-gradient(135deg, rgba(255, 180, 220, 0.8), rgba(67, 97, 238, 0.85))",
    "linear-gradient(135deg, rgba(67, 97, 238, 0.9), rgba(72, 149, 239, 0.85))",
    "linear-gradient(135deg, rgba(72, 149, 239, 0.9), rgba(76, 201, 240, 0.85))",
    "linear-gradient(135deg, rgba(76, 201, 240, 0.9), rgba(58, 12, 163, 0.85))",
    "linear-gradient(135deg, rgba(76, 201, 240, 0.9), rgba(72, 149, 239, 0.85))",
    "linear-gradient(135deg, rgba(72, 149, 239, 0.9), rgba(255, 180, 220, 0.8))",
    "linear-gradient(135deg, rgba(114, 9, 183, 0.9), rgba(76, 201, 240, 0.85))",
    "linear-gradient(135deg, rgba(58, 12, 163, 0.9), rgba(76, 201, 240, 0.85))",
];

// 资源数据 - 保留所有原始数据
const resources = ref<Resource[]>([
    {
        id: 1,
        title: "发现AI",
        description:
            "覆盖自然语言处理、图像识别、数据分析等全领域，提供行业趋势报告+使用教程，界面简洁且支持精准搜索。",
        url: "https://www.faxianai.com/",
        tags: ["AI", "导航"],
        imageUrl: "https://www.faxianai.com/favicon.ico",
        bgGradient: gradients[0],
    },
    {
        id: 2,
        title: "Toolify.ai",
        description:
            "全球最大AI工具库（超1.8万款工具），支持智能推荐和用户评分，自动化更新系统确保时效性。",
        url: "https://www.toolify.ai/",
        tags: ["AI", "导航"],
        imageUrl: "https://www.toolify.ai/favicon.ico",
        bgGradient: gradients[1],
    },
    {
        id: 3,
        title: "PANews数据导航",
        description:
            "PANews 数据导航是区块链和 Web3.0 领域的重要工具，为用户提供了丰富的链上数据及各类相关资源，助力其在区块链领域的探索与投资决策。",
        url: "https://www.panewslab.com",
        tags: ["Web3.0"],
        imageUrl: "https://image.panewslab.com/images/favicon.ico",
        bgGradient: gradients[2],
    },
    {
        id: 4,
        title: "Web3导航",
        description: "一个不错的Web3资源收集平台",
        url: "https://www.d1dns.com/",
        tags: ["Web3.0", "导航"],
        imageUrl: "https://www.d1dns.com/assets/images/favicon.png",
        bgGradient: gradients[3],
    },
    {
        id: 5,
        title: "OpenBuild",
        description:
            "OpenBuild 是一个专注于 Web3 开发者生态的开源社区，致力于连接 Web2 与 Web3 技术领域，帮助开发者过渡到去中心化网络，并提供工具、资源及商业机会",
        url: "https://openbuild.xyz/",
        tags: ["Web3.0"],
        imageUrl: "https://openbuild.xyz/favicon.ico",
        bgGradient: gradients[4],
    },
    {
        id: 6,
        title: "AI工具集",
        description: "一个不错的AI工具收集网站",
        url: "https://ai-bot.cn/",
        tags: ["AI", "导航"],
        imageUrl:
            "https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-square-logo.png",
        bgGradient: gradients[5],
    },
    {
        id: 7,
        title: "Tbox导航",
        description:
            "Tbox导航是一个集合大量优质在线工具的导航网站,包括实用工具、影音工具、图片工具、编程工具、网络资源等几十种分类,覆盖全网在线工具,只收录最优质的的精品网站,做一个真正有用好用的工具导航网站。",
        url: "https://www.tboxn.com/",
        tags: ["Tool", "导航"],
        imageUrl:
            "https://tboxn.com/wp-content/uploads/2022/03/cropped-tboxlogo512.png",
        bgGradient: gradients[6],
    },
    {
        id: 9,
        title: "Uiverse UI",
        description:
            "uiverse.io是一个开源UI组件库平台，由社区驱动，提供大量可直接复用的UI组件，包括按钮、卡片、加载动画、表单控件等",
        url: "https://uiverse.io/",
        tags: ["UI组件库"],
        imageUrl: "https://uiverse.io/android-chrome-512x512.png",
        bgGradient: gradients[7],
    },
    {
        id: 10,
        title: "Inspira UI",
        description:
            "Inspira UI 是 Vue3 生态中兼具「设计美学」与「技术深度」的革新者。其动态交互能力与模块化架构，特别适合追求视觉创新且需高效开发的团队。若你的项目需要跳出传统组件库的固化框架，Inspira UI 值得优先尝试。",
        url: "https://inspira-ui.com/",
        tags: ["UI组件库"],
        imageUrl: "https://uiverse.io/android-chrome-512x512.png",
        bgGradient: gradients[8],
    },
    {
        id: 11,
        title: "开源精选",
        description:
            "开源精选是一款专注于收录优质开源工具的导航网站，开源精选只收集每个软件工具类目中完全免费且超好用的开源软件，来服务于所有网络用户，力求软件简单免费好用，小白也能轻松使用，让所有人都能尽享数字自由！",
        url: "https://www.ossnav.com",
        tags: ["开源", "导航"],
        imageUrl:
            "https://www.ossnav.com/wp-content/uploads/2024/11/1732557264-open-64.png",
        bgGradient: gradients[9],
    },
    {
        id: 12,
        title: "Pixel-ui",
        description: "一个使用Css特性实现的Vue3像素风格UI库。",
        url: "https://maomentai817.github.io/pixel-ui",
        tags: ["开源", "UI组件库"],
        imageUrl: "https://maomentai817.github.io/pixel-ui/images/homelogo.png",
        bgGradient: gradients[10],
    },
    {
        id: 13,
        title: "Itch.io",
        description:
            "创立于2013年，由程序员兼游戏爱好者 Leaf Corcoran 创建，旨在打破传统平台（如Steam）的高门槛限制，为独立开发者提供无审核上架、自由定价和页面设计的开放空间。",
        url: "https://itch.io/",
        tags: ["独立开发", "社区", "游戏"],
        imageUrl: "https://static.itch.io/images/logo-black-new.svg",
        bgGradient: gradients[11],
    },
    {
        id: 14,
        title: "在线压缩图片（工具整合）",
        description: "docsmall.com 是由 INTERVAL 设计开发的在线文档处理工具。",
        url: "https://docsmall.com/image-compress",
        tags: ["Tool", "图片"],
        imageUrl: "https://docsmall.com/_nuxt/icon-convert-to-jpg.Dca2FYe2.png",
        bgGradient: gradients[10],
    },
    {
        id: 15,
        title: "cocos游戏引擎",
        description:
            "Cocos 凭借开源免费策略、极致轻量化（尤其适合移动端及 IoT）和中国开发者生态，成为全球化通用引擎标杆。虽在 3A 级图形效果上仍落后于 Unreal，但在中小型项目开发效率、跨平台兼容性及新兴场景（车载/教育）落地方面具有显著优势，是国产基础软件国际化的典范案例。",
        url: "https://www.cocos.com/",
        tags: ["游戏开发引擎", "游戏"],
        imageUrl: "https://www.cocos.com/favicon.ico",
        bgGradient: gradients[9],
    },
    {
        id: 16,
        title: "Twine文字游戏引擎",
        description:
            "Twine 是一款免费开源的互动叙事创作工具，专为构建非线性故事与文字冒险游戏设计。它以低门槛、高灵活性为核心优势，成为独立开发者和叙事设计师的首选引擎之一。",
        url: "https://www.cocos.com/",
        tags: ["游戏开发引擎", "游戏"],
        imageUrl: "https://twinery.org/favicon-152.png",
        bgGradient: gradients[8],
    },
    {
        id: 17,
        title: "深潮techflow",
        description:
            "深潮 TechFlow 是华语世界最具特色的区块链与加密货币深度媒体平台，以前沿洞察、内容质量与行业连接力著称。",
        url: "https://www.techflowpost.com/",
        tags: ["Web3.0"],
        imageUrl:
            "https://upload.techflowpost.com/upload/images/20230331/2023033111502613443948.png",
        bgGradient: gradients[7],
    },
    {
        id: 18,
        title: "LP平台",
        description: "有意思的文字游戏平台，只为依然热爱文字游戏的你。",
        url: "https://www.lpengine.cn",
        tags: ["游戏开发引擎"],
        imageUrl: "https://www.lpengine.cn/images/favicon.ico",
        bgGradient: gradients[6],
    },
    {
        id: 19,
        title: "独立精神 | indienova 独立游戏",
        description:
            'Indienova 以 技术赋能+文化沉淀 的双轨模式，成为中国独立游戏领域的"生态基石"。其价值不仅在于工具性支持（如发行、组队），更在于构建了一个 尊重原创、鼓励思辨的创作者共同体，持续推动独立游戏从边缘走向主流。',
        url: "https://indienova.com/",
        tags: ["社区", "游戏"],
        imageUrl:
            "https://static.indienova.com/assets/images/logos/indienova_new@2x.png",
        bgGradient: gradients[5],
    },
    {
        id: 20,
        title: "ADV.js",
        description: "面向未来与前端的 ADV 文字冒险游戏引擎。",
        url: "https://advjs.org/",
        tags: ["游戏开发引擎"],
        imageUrl: "https://advjs.org/favicon.svg",
        bgGradient: gradients[4],
    },
    {
        id: 21,
        title: "Headless UI",
        description:
            "Headless UI 代表了现代UI开发的新范式，将交互逻辑与视觉表现分离，让开发者既能获得完整的组件功能，又能保持100%的设计控制权。",
        url: "https://headlessui.com/",
        tags: ["UI组件库"],
        imageUrl: "https://headlessui.com/favicon.ico",
        bgGradient: gradients[3],
    },
    {
        id: 22,
        title: "Ren'Py",
        description:
            "Ren'Py 凭借 低门槛脚本+Python可扩展性 的双层设计，成为视觉小说开发的首选引擎。其开源免费策略与跨平台特性，尤其适合独立开发者和小团队快速实现叙事创意。尽管在 RPG 等复杂类型中稍显不足，但持续的社区更新（如 Live2D 支持、性能优化）正不断拓展其边界",
        url: "https://www.renpy.org/",
        tags: ["游戏开发引擎"],
        imageUrl: "https://www.renpy.org/static/favicon.ico",
        bgGradient: gradients[2],
    },
    {
        id: 23,
        title: "GameMaker",
        description:
            "GameMaker 凭借 “低门槛 + 高性能 2D 开发” 成为独立游戏黄金标准，尤其适合混合类型 2D 游戏。尽管 3D 与中文支持是短板，其许可改革（非商业免费）和持续跨平台优化，仍使其在 Godot、Unity 竞争下保持独特优势。",
        url: "https://gamemaker.io",
        tags: ["游戏开发引擎"],
        imageUrl: "https://gamemaker.io/next/images/icons/favicon-32x32.png",
        bgGradient: gradients[1],
    },
    {
        id: 24,
        title: "AIGC工具导航",
        description:
            "AIGC导航，一个全网分类最全，收录最全的生成式人工智能工具导航平台，分类包括AI写作、AI绘画、AI视频、AI办公、AI数字人、AI设计、AI语音、AI音乐、AI论文、AI简历、AI智能体、文本转语音等AI工具。AIGC导航提供一站式AI工具导航服务，帮助用户快速找到能够提升工作效率和创作能力的生产力工具。找AI工具，就上AIGC工具导航！",
        url: "https://www.aigc.cn/",
        tags: ["AI", "导航"],
        imageUrl:
            "https://www.aigc.cn/wp-content/uploads/2025/06/aigc-icon.png",
        bgGradient: gradients[0],
    },
    {
        id: 25,
        title: "Photopea",
        description:
            "这个在线PS是捷克程序员Ivan Kutskir在2013年开发，至今已经发展了十多年了。",
        url: "https://www.photopea.com/",
        tags: ["Tool"],
        imageUrl: "https://www.photopea.com/promo/icon512.png",
        bgGradient: gradients[1],
    },
    {
        id: 26,
        title: "Draw.io",
        description:
            "一款开源免费的在线图表绘制工具，适合绘制流程图、组织结构图、网络拓扑图等多种图表。它基于浏览器运行，无需安装，支持拖拽、自动布局等功能，新手也能快速上手，还提供了丰富的模板库。",
        url: "https://www.drawio.com/",
        tags: ["Tool"],
        imageUrl: "https://www.drawio.com/favicon.ico",
        bgGradient: gradients[2],
    },
]);

// 当前选中的标签
const activeTags = ref<string[]>([]);

// 获取所有唯一标签
const uniqueTags = computed<string[]>(() => {
    const tags = new Set<string>();
    resources.value.forEach((resource) => {
        resource.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
});

// 过滤资源
const filteredResources = computed<Resource[]>(() => {
    if (activeTags.value.length === 0) return resources.value;
    return resources.value.filter((resource) =>
        activeTags.value.some((tag) => resource.tags.includes(tag)),
    );
});

// 切换标签
function toggleTag(tag: string) {
    if (activeTags.value.includes(tag)) {
        activeTags.value = activeTags.value.filter((t) => t !== tag);
    } else {
        activeTags.value = [...activeTags.value, tag];
    }
}

// 移除单个标签
function removeTag(tag: string) {
    activeTags.value = activeTags.value.filter((t) => t !== tag);
}

// 清除筛选
function clearFilter() {
    activeTags.value = [];
}

// 处理图片加载错误
function handleImageError(resource: Resource) {
    resource.imageError = true;
}

// 分页相关
const currentPage = ref(1);
const pageSize = ref(21); // 每页显示的资源数量，可配置
const totalPages = computed(() =>
    Math.ceil(filteredResources.value.length / pageSize.value),
);

// 分页后的资源
const paginatedResources = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredResources.value.slice(start, end);
});

// 当筛选条件变化时重置页码
watch(activeTags, () => {
    currentPage.value = 1;
});

// 生成分页按钮数组（带省略号逻辑）
const paginationItems = computed(() => {
    const items = [];
    const total = totalPages.value;
    const current = currentPage.value;

    if (total <= 7) {
        // 显示所有页码
        for (let i = 1; i <= total; i++) {
            items.push(i);
        }
    } else {
        // 添加第一页
        items.push(1);

        // 计算起始和结束页码
        const start = Math.max(2, current - 2);
        const end = Math.min(total - 1, current + 2);

        // 处理开头省略号
        if (start > 2) {
            items.push("...");
        }

        // 添加中间页码
        for (let i = start; i <= end; i++) {
            items.push(i);
        }

        // 处理结尾省略号
        if (end < total - 1) {
            items.push("...");
        }

        // 添加最后一页
        items.push(total);
    }

    return items;
});

// 跳转到指定页码
function goToPage(page: number | string) {
    if (typeof page === "number") {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
        }
    }
}

// 上一页
function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

// 下一页
function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}
</script>

<template>
    <div class="max-w-6xl mx-auto">
        <!-- 标签筛选区域 -->
        <div
            class="mb-10 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
        >
            <div class="flex flex-wrap items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                    收录👍资源{{ filteredResources.length }}个
                </h2>
                <div class="flex items-center">
                    <div
                        v-if="activeTags.length > 0"
                        class="flex flex-wrap gap-2"
                    >
                        <span
                            v-for="tag in activeTags"
                            :key="tag"
                            class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center transition-all duration-200 hover:scale-105 hover:shadow-md"
                        >
                            {{ tag }}
                            <button
                                class="ml-2 hover:opacity-80 transition-opacity"
                                @click.stop="removeTag(tag)"
                            >
                                <Icon icon="mdi:close" class="text-sm" />
                            </button>
                        </span>
                    </div>
                    <span
                        v-else
                        class="text-gray-500 dark:text-gray-400 text-sm"
                        >🤔</span
                    >
                </div>
            </div>

            <div class="flex flex-wrap gap-2">
                <button
                    v-for="tag in uniqueTags"
                    :key="tag"
                    class="transition-all px-4 py-2 rounded-full text-sm font-medium hover:scale-105 duration-200"
                    :class="[
                        activeTags.includes(tag)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md scale-105'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
                    ]"
                    @click="toggleTag(tag)"
                >
                    {{ tag }}
                </button>

                <button
                    v-if="activeTags.length > 0"
                    class="ml-auto px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors flex items-center hover:scale-[1.03] duration-200"
                    @click="clearFilter"
                >
                    <Icon icon="mdi:filter-remove" class="mr-1" />
                    清除筛选
                </button>
            </div>
        </div>

        <!-- 资源展示区域 -->
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <transition-group name="fade">
                    <a
                        v-for="resource in paginatedResources"
                        :key="resource.id"
                        :href="resource.url"
                        target="_blank"
                        class="group block rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                        :class="{ 'glass-bg': !resource.bgGradient }"
                        :style="{ background: resource.bgGradient }"
                    >
                        <div class="p-6 h-full flex flex-col">
                            <!-- 优化后的标题区域 -->
                            <div class="flex items-start mb-3">
                                <div
                                    class="flex-shrink-0 w-14 h-14 rounded-xl bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 backdrop-blur-sm border border-white dark:border-gray-700 border-opacity-30 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110"
                                >
                                    <img
                                        v-if="!resource.imageError"
                                        :src="resource.imageUrl"
                                        class="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                                        @error="handleImageError(resource)"
                                    />
                                    <div
                                        v-if="resource.imageError"
                                        class="w-full h-full flex items-center justify-center text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <Icon
                                            icon="mdi:link-variant"
                                            class="text-2xl"
                                        />
                                    </div>
                                </div>

                                <!-- 标题独占一行 -->
                                <div class="ml-4 flex-1 min-w-0">
                                    <h3
                                        class="text-xl font-bold text-white group-hover:text-blue-100 transition-colors line-clamp-2 leading-tight"
                                    >
                                        {{ resource.title }}
                                    </h3>
                                </div>
                            </div>

                            <!-- 标签区域 -->
                            <div class="flex flex-wrap mb-3">
                                <span
                                    v-for="tag in resource.tags"
                                    :key="tag"
                                    class="text-xs px-2 py-1 rounded mr-2 mb-1 transition-all duration-200 hover:scale-105"
                                    :class="[
                                        activeTags.includes(tag)
                                            ? 'bg-white text-blue-700 font-bold shadow-sm'
                                            : 'bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 text-white',
                                    ]"
                                >
                                    {{ tag }}
                                </span>
                            </div>

                            <!-- 描述区域 -->
                            <p
                                class="text-white text-opacity-90 flex-grow line-clamp-4 group-hover:text-opacity-100 transition-all"
                            >
                                {{ resource.description }}
                            </p>
                        </div>
                    </a>
                </transition-group>
            </div>

            <!-- 空状态 -->
            <div
                v-if="filteredResources.length === 0"
                class="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mt-6"
            >
                <div class="text-gray-400 mb-4">
                    <Icon icon="mdi:inbox" class="text-5xl mx-auto" />
                </div>
                <h3
                    class="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2"
                >
                    没有找到匹配的资源
                </h3>
                <p class="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                    当前筛选条件下没有资源，请尝试其他标签组合
                </p>
                <button
                    class="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center mx-auto hover:scale-[1.03] duration-200"
                    @click="clearFilter"
                >
                    <Icon icon="mdi:filter-remove" class="mr-1" />
                    清除筛选
                </button>
            </div>

            <!-- 分页器 -->
            <div
                v-if="totalPages > 1"
                class="flex items-center justify-center mt-10 space-x-1"
            >
                <button
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="currentPage === 1"
                    @click="prevPage"
                >
                    <Icon icon="mdi:chevron-left" class="text-lg" />
                </button>

                <template v-for="item in paginationItems">
                    <button
                        v-if="item === '...'"
                        :key="`ellipsis-${Math.random()}`"
                        class="flex items-center justify-center w-10 h-10 rounded-full bg-transparent cursor-default"
                        disabled
                    >
                        ...
                    </button>
                    <button
                        v-else
                        :key="item"
                        class="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                        :class="{
                            'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md':
                                currentPage === item,
                            'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700':
                                currentPage !== item,
                        }"
                        @click="goToPage(item)"
                    >
                        {{ item }}
                    </button>
                </template>

                <button
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="currentPage === totalPages"
                    @click="nextPage"
                >
                    <Icon icon="mdi:chevron-right" class="text-lg" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 新增磨砂玻璃效果 */
.glass-bg {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.dark .glass-bg {
    background: rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

/* 新增标题多行截断样式 */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* 优化标题行高 */
.leading-tight {
    line-height: 1.25;
}

/* 卡片样式 */
a {
    box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    height: 100%;
    display: flex;
}

.dark a {
    box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.2);
}

a:hover {
    box-shadow:
        0 10px 15px rgba(0, 0, 0, 0.1),
        0 4px 6px rgba(0, 0, 0, 0.05);
    transform: translateY(-3px);
}

.dark a:hover {
    box-shadow:
        0 10px 15px rgba(0, 0, 0, 0.2),
        0 4px 6px rgba(0, 0, 0, 0.1);
}

a:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
}

/* 图标容器 */
.flex-shrink-0 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.dark .flex-shrink-0 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 按钮效果 */
button {
    transition:
        transform 0.2s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
}

button:hover {
    transform: scale(1.03);
}

button:active {
    transform: scale(0.98);
}

/* 标签效果 */
span[class*="bg-gradient"] {
    transition:
        transform 0.2s ease,
        box-shadow 0.3s ease;
}

span[class*="bg-gradient"]:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* 文字悬停效果 */
.group:hover .text-opacity-90 {
    text-opacity: 1;
}

/* 响应式调整 */
@media (max-width: 640px) {
    .text-4xl {
        font-size: 2rem;
    }

    .text-lg {
        font-size: 1rem;
    }

    .p-6 {
        padding: 1.25rem;
    }

    .flex-wrap {
        justify-content: center;
    }

    .ml-auto {
        margin-left: 0;
        margin-top: 0.5rem;
        width: 100%;
    }

    /* 移动设备上分页器缩小 */
    .pagination button {
        width: 8px;
        height: 8px;
        font-size: 0.75rem;
    }
}
</style>
