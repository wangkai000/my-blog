<!-- eslint-disable vue/require-toggle-inside-transition -->
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Icon } from "@iconify/vue";

// 定义资源字段索引映射表（数字索引对应属性）
const ResourceFields = {
    id: 0,
    title: 1,
    description: 2,
    url: 3,
    tags: 4,
    imageUrl: 5,
    bgGradient: 6,
    imageError: 7,
};

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

// 资源数据（数组简写形式，按索引对应字段）
const resources = ref<any[][]>([
    [
        1,
        "发现AI",
        "覆盖自然语言处理、图像识别、数据分析等全领域，提供行业趋势报告+使用教程，界面简洁且支持精准搜索。",
        "https://www.faxianai.com/",
        ["AI", "导航"],
        "https://www.faxianai.com/favicon.ico",
        gradients[0],
        false,
    ],
    [
        2,
        "Toolify.ai",
        "全球最大AI工具库（超1.8万款工具），支持智能推荐和用户评分，自动化更新系统确保时效性。",
        "https://www.toolify.ai/",
        ["AI", "导航"],
        "https://www.toolify.ai/favicon.ico",
        gradients[1],
        false,
    ],
    [
        3,
        "PANews数据导航",
        "PANews 数据导航是区块链和 Web3.0 领域的重要工具，为用户提供了丰富的链上数据及各类相关资源，助力其在区块链领域的探索与投资决策。",
        "https://www.panewslab.com",
        ["Web3.0"],
        "https://image.panewslab.com/images/favicon.ico",
        gradients[2],
        false,
    ],
    [
        4,
        "Web3导航",
        "一个不错的Web3资源收集平台",
        "https://www.d1dns.com/",
        ["Web3.0", "导航"],
        "https://www.d1dns.com/assets/images/favicon.png",
        gradients[3],
        false,
    ],
    [
        5,
        "OpenBuild",
        "OpenBuild 是一个专注于 Web3 开发者生态的开源社区，致力于连接 Web2 与 Web3 技术领域，帮助开发者过渡到去中心化网络，并提供工具、资源及商业机会",
        "https://openbuild.xyz/",
        ["Web3.0"],
        "https://openbuild.xyz/favicon.ico",
        gradients[4],
        false,
    ],
    [
        6,
        "AI工具集",
        "一个不错的AI工具收集网站",
        "https://ai-bot.cn/",
        ["AI", "导航"],
        "https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-square-logo.png",
        gradients[5],
        false,
    ],
    [
        7,
        "Tbox导航",
        "Tbox导航是一个集合大量优质在线工具的导航网站,包括实用工具、影音工具、图片工具、编程工具、网络资源等几十种分类,覆盖全网在线工具,只收录最优质的的精品网站,做一个真正有用好用的工具导航网站。",
        "https://www.tboxn.com/",
        ["Tool", "导航"],
        "https://tboxn.com/wp-content/uploads/2022/03/cropped-tboxlogo512.png",
        gradients[6],
        false,
    ],
    [
        9,
        "Uiverse UI",
        "uiverse.io是一个开源UI组件库平台，由社区驱动，提供大量可直接复用的UI组件，包括按钮、卡片、加载动画、表单控件等",
        "https://uiverse.io/",
        ["UI组件库"],
        "https://uiverse.io/android-chrome-512x512.png",
        gradients[7],
        false,
    ],
    [
        10,
        "Inspira UI",
        "Inspira UI 是 Vue3 生态中兼具「设计美学」与「技术深度」的革新者。其动态交互能力与模块化架构，特别适合追求视觉创新且需高效开发的团队。若你的项目需要跳出传统组件库的固化框架，Inspira UI 值得优先尝试。",
        "https://inspira-ui.com/",
        ["UI组件库"],
        "https://uiverse.io/android-chrome-512x512.png",
        gradients[8],
        false,
    ],
    [
        11,
        "开源精选",
        "开源精选是一款专注于收录优质开源工具的导航网站，开源精选只收集每个软件工具类目中完全免费且超好用的开源软件，来服务于所有网络用户，力求软件简单免费好用，小白也能轻松使用，让所有人都能尽享数字自由！",
        "https://www.ossnav.com",
        ["开源", "导航"],
        "https://www.ossnav.com/wp-content/uploads/2024/11/1732557264-open-64.png",
        gradients[9],
        false,
    ],
    [
        12,
        "Pixel-ui",
        "一个使用Css特性实现的Vue3像素风格UI库。",
        "https://maomentai817.github.io/pixel-ui",
        ["开源", "UI组件库"],
        "https://maomentai817.github.io/pixel-ui/images/homelogo.png",
        gradients[10],
        false,
    ],
    [
        13,
        "Itch.io",
        "创立于2013年，由程序员兼游戏爱好者 Leaf Corcoran 创建，旨在打破传统平台（如Steam）的高门槛限制，为独立开发者提供无审核上架、自由定价和页面设计的开放空间。",
        "https://itch.io/",
        ["独立开发", "社区", "游戏"],
        "https://static.itch.io/images/logo-black-new.svg",
        gradients[11],
        false,
    ],
    [
        14,
        "在线压缩图片（工具整合）",
        "docsmall.com 是由 INTERVAL 设计开发的在线文档处理工具。",
        "https://docsmall.com/image-compress",
        ["Tool", "图片"],
        "https://docsmall.com/_nuxt/icon-convert-to-jpg.Dca2FYe2.png",
        gradients[10],
        false,
    ],
    [
        15,
        "cocos游戏引擎",
        "Cocos 凭借开源免费策略、极致轻量化（尤其适合移动端及 IoT）和中国开发者生态，成为全球化通用引擎标杆。虽在 3A 级图形效果上仍落后于 Unreal，但在中小型项目开发效率、跨平台兼容性及新兴场景（车载/教育）落地方面具有显著优势，是国产基础软件国际化的典范案例。",
        "https://www.cocos.com/",
        ["游戏开发引擎", "游戏"],
        "https://www.cocos.com/favicon.ico",
        gradients[9],
        false,
    ],
    [
        16,
        "Twine文字游戏引擎",
        "Twine 是一款免费开源的互动叙事创作工具，专为构建非线性故事与文字冒险游戏设计。它以低门槛、高灵活性为核心优势，成为独立开发者和叙事设计师的首选引擎之一。",
        "https://www.cocos.com/",
        ["游戏开发引擎", "游戏"],
        "https://twinery.org/favicon-152.png",
        gradients[8],
        false,
    ],
    [
        17,
        "深潮techflow",
        "深潮 TechFlow 是华语世界最具特色的区块链与加密货币深度媒体平台，以前沿洞察、内容质量与行业连接力著称。",
        "https://www.techflowpost.com/",
        ["Web3.0"],
        "https://upload.techflowpost.com/upload/images/20230331/2023033111502613443948.png",
        gradients[7],
        false,
    ],
    [
        18,
        "LP平台",
        "有意思的文字游戏平台，只为依然热爱文字游戏的你。",
        "https://www.lpengine.cn",
        ["游戏开发引擎"],
        "https://www.lpengine.cn/images/favicon.ico",
        gradients[6],
        false,
    ],
    [
        19,
        "独立精神 | indienova 独立游戏",
        'Indienova 以 技术赋能+文化沉淀 的双轨模式，成为中国独立游戏领域的"生态基石"。其价值不仅在于工具性支持（如发行、组队），更在于构建了一个 尊重原创、鼓励思辨的创作者共同体，持续推动独立游戏从边缘走向主流。',
        "https://indienova.com/",
        ["社区", "游戏"],
        "https://static.indienova.com/assets/images/logos/indienova_new@2x.png",
        gradients[5],
        false,
    ],
    [
        20,
        "ADV.js",
        "面向未来与前端的 ADV 文字冒险游戏引擎。",
        "https://advjs.org/",
        ["游戏开发引擎"],
        "https://advjs.org/favicon.svg",
        gradients[4],
        false,
    ],
    [
        21,
        "Headless UI",
        "Headless UI 代表了现代UI开发的新范式，将交互逻辑与视觉表现分离，让开发者既能获得完整的组件功能，又能保持100%的设计控制权。",
        "https://headlessui.com/",
        ["UI组件库"],
        "https://headlessui.com/favicon.ico",
        gradients[3],
        false,
    ],
    [
        22,
        "Ren'Py",
        "Ren'Py 凭借 低门槛脚本+Python可扩展性 的双层设计，成为视觉小说开发的首选引擎。其开源免费策略与跨平台特性，尤其适合独立开发者和小团队快速实现叙事创意。尽管在 RPG 等复杂类型中稍显不足，但持续的社区更新（如 Live2D 支持、性能优化）正不断拓展其边界",
        "https://www.renpy.org/",
        ["游戏开发引擎"],
        "https://www.renpy.org/static/favicon.ico",
        gradients[2],
        false,
    ],
    [
        23,
        "GameMaker",
        "GameMaker 凭借 “低门槛 + 高性能 2D 开发” 成为独立游戏黄金标准，尤其适合混合类型 2D 游戏。尽管 3D 与中文支持是短板，其许可改革（非商业免费）和持续跨平台优化，仍使其在 Godot、Unity 竞争下保持独特优势。",
        "https://gamemaker.io",
        ["游戏开发引擎"],
        "https://gamemaker.io/next/images/icons/favicon-32x32.png",
        gradients[1],
        false,
    ],
    [
        24,
        "AIGC工具导航",
        "AIGC导航，一个全网分类最全，收录最全的生成式人工智能工具导航平台，分类包括AI写作、AI绘画、AI视频、AI办公、AI数字人、AI设计、AI语音、AI音乐、AI论文、AI简历、AI智能体、文本转语音等AI工具。AIGC导航提供一站式AI工具导航服务，帮助用户快速找到能够提升工作效率和创作能力的生产力工具。找AI工具，就上AIGC工具导航！",
        "https://www.aigc.cn/",
        ["AI", "导航"],
        "https://www.aigc.cn/wp-content/uploads/2025/06/aigc-icon.png",
        gradients[0],
        false,
    ],
    [
        25,
        "Photopea",
        "这个在线PS是捷克程序员Ivan Kutskir在2013年开发，至今已经发展了十多年了。",
        "https://www.photopea.com/",
        ["Tool"],
        "https://www.photopea.com/promo/icon512.png",
        gradients[1],
        false,
    ],
    [
        26,
        "Draw.io",
        "一款开源免费的在线图表绘制工具，适合绘制流程图、组织结构图、网络拓扑图等多种图表。它基于浏览器运行，无需安装，支持拖拽、自动布局等功能，新手也能快速上手，还提供了丰富的模板库。",
        "https://www.drawio.com/",
        ["Tool"],
        "https://www.drawio.com/favicon.ico",
        gradients[2],
        false,
    ],
    [
        27,
        "RPG Maker",
        "RPG Maker既是工具，更是创作者生态的基石——从提供免费试用到技术资源整合，从插件开发到作品分发，它降低了RPG开发的门槛，推动个人创作走向商业成功。",
        "https://www.rpgmakerweb.com/",
        ["游戏开发引擎"],
        "https://src.onlinedown.net/d/file/p/2019-01-18/bfa8537ccd4e24a88c58b02dfe4cf6b0.jpg",
        gradients[3],
        false,
    ],
    [
        28,
        "游戏开发资源整合集",
        "军大君的游戏开发资源整合集",
        "https://jundagame.top/",
        ["游戏", "导航"],
        "https://jundagame.top/logo/jundajun.png",
        gradients[4],
        false,
    ],
    [
        29,
        "Awwwards",
        "Awwwards 是一个专注于评选和展示全球顶尖网页设计的国际平台，被誉为“网页设计界的奥斯卡”",
        "https://www.awwwards.com/",
        ["资源"],
        "https://assets.awwwards.com/assets/images/favicon-safari.svg",
        gradients[5],
        false,
    ],
    [
        30,
        "Dribbble",
        "Dribbble 是一个以篮球元素为特色，采用邀请制，专注于 UI/UX 设计等领域，鼓励设计师展示作品、分享创意并进行互动交流的全球性设计社区",
        "https://dribbble.com/",
        ["资源", "社区", "设计"],
        "https://cdn.dribbble.com/assets/dribbble-vector-ball-c75e531ccee3110d0ee5ae951fd1d0a65d2ff25d3c0577757ea7e8d8e3e75db4.svg",
        gradients[6],
        false,
    ],
    [
        31,
        "Dejob",
        "Dejob构建您Web3职业生涯的最有力方式。",
        "https://dejob.top/",
        ["Web3.0"],
        "https://dejob.top/logo.svg",
        gradients[7],
        false,
    ],
    [
        32,
        "W2solo",
        "w2solo - 独立开发者社区",
        "https://w2solo.com/",
        ["独立开发", "社区"],
        "https://indiehackers-1251406926.cos.ap-chengdu.myqcloud.com/hackers/7cl3u.png",
        gradients[8],
        false,
    ],
    [
        33,
        "Solo",
        "Solo 独立开发者社区-链接每一位独立开发者, 从 Solo 开始。",
        "https://solo.xin/",
        ["独立开发", "社区"],
        "https://solo.xin/favicon.ico",
        gradients[9],
        false,
    ],
    [
        34,
        "办公人导航",
        "办公人导航是一个实用的办公生活导航网站,致力于分享优质的网站网址及软件资源等内容,帮助大家节省时间,提高办公生活效率!",
        "https://www.bgrdh.com/",
        ["导航", "资源"],
        "https://www.bgrdh.com/wp-content/uploads/2022/11/20221119185003612150.png",
        gradients[10],
        false,
    ],
    [
        35,
        "Template0",
        "一个很出名的网站模板网站。",
        "https://template0.com/",
        ["资源"],
        "https://template0.com/favicon.ico",
        gradients[11],
        false,
    ],
    [
        36,
        "CssLoaders",
        "CssLoaders过渡动画集合网站",
        "https://css-loaders.com/",
        ["资源"],
        "https://css-loaders.com/fav.png",
        gradients[10],
        false,
    ],
    [
        37,
        "HtmlRev",
        "另一个很出名的网站模板网站。",
        "https://htmlrev.com/",
        ["资源"],
        "https://htmlrev.com/images/favicon.png",
        gradients[9],
        false,
    ],
    [
        38,
        "Navnav",
        "一个收集了大量导航栏特效的网站。",
        "https://thuvien.org/navnav",
        ["资源", "导航"],
        "https://thuvien.org/favicon.png",
        gradients[8],
        false,
    ],
    [
        39,
        "ReactBits",
        "一个React动画UI组件库。",
        "https://reactbits.dev/",
        ["资源", "UI组件库"],
        "https://reactbits.dev/favicon.ico",
        gradients[6],
        false,
    ],
    [
        40,
        "句乐部",
        "阿崔老师的项目，让你上瘾的英语学习工具。",
        "https://julebu.co",
        ["学习"],
        "https://julebu.co/favicon.ico",
        gradients[5],
        false,
    ],
    [
        41,
        "A template",
        "Free WebSite Templates with A Template。",
        "https://atemplate.com/",
        ["资源"],
        "https://atemplate.com/favicon.ico",
        gradients[4],
        false,
    ],
    [
        42,
        "独立开发前线",
        "独立开发前线是独立开发指南网站，内容包含独立开发创意发现，产品实现，获取增长，流量变现等方面，旨在帮助独立开发者更快的成长，打造属于自己的盈利产品。",
        "https://www.91wink.com",
        ["社区", "独立开发"],
        "https://www.91wink.com/wp-content/uploads/2024/01/logo.png",
        gradients[3],
        false,
    ],
    [
        43,
        "免费API",
        "免费接口,免费API,免费服务的资源收集网站。",
        "https://api.aa1.cn/",
        ["资源"],
        "https://api.aa1.cn/favicon.ico",
        gradients[2],
        false,
    ],
    [
        44,
        "TopIndie.dev",
        "TopIndie.dev 是独立开发者发现、展示和探索创新项目（从应用程序到开源工具）的中心。",
        "https://topindie.dev/",
        ["资源", "独立开发"],
        "https://topindie.dev/assets/image/favicon.ico",
        gradients[1],
        false,
    ],
    [
        45,
        "21st.dev",
        "Discover, share, and craft UI components 一个为提供高质量 UI 组件与设计资源的平台，很多代码完全也可以直接复制使用。",
        "https://21st.dev",
        ["资源", "UI组件库"],
        "https://21st.dev/favicon.ico",
        gradients[0],
        false,
    ],
    [
        46,
        "Idea haber",
        "一个不错的英文产品灵感的集合平台，很适合独立开发者发掘灵感。",
        "https://ideaharbor.xyz",
        ["资源", "社区"],
        "https://ideaharbor.xyz/favicon.ico",
        gradients[1],
        false,
    ],
    [
        47,
        "Web3集合整理",
        "一个Web3集合整理。",
        "https://aiw-333.github.io/",
        ["Web3.0"],
        "https://aiw-333.github.io/favicon.ico",
        gradients[2],
        false,
    ],
    [
        48,
        "Web3 Career",
        "Web3 Career",
        "https://web3.career/",
        ["Web3.0"],
        "https://web3.career/favicon.ico",
        gradients[3],
        false,
    ],
    [
        49,
        "优设网",
        "国内专业的设计师平台，汇聚大量设计教程、行业资讯和作品展示。提供高质量的 UI/UX 设计案例、免费模板等资源供下载，还设有设计问答版块，便于设计师交流经验、共同成长。",
        "https://www.uisdc.com/",
        ["资源", "社区", "设计"],
        "https://www.uisdc.com/favicon.ico",
        gradients[4],
        false,
    ],
    [
        50,
        "Product hunt",
        "Product Hunt 是一个全球领先的产品发现平台,于2013年由Ryan Howard创立,旨在帮助用户发现和分享最新的科技产品、创业公司和创新项目。",
        "https://www.producthunt.com/",
        ["社区", "独立开发"],
        "https://www.producthunt.com/favicon.ico",
        gradients[5],
        false,
    ],
    [
        51,
        "Nodejs中文网",
        "翻译整理的还不错",
        "https://dev.nodejs.cn/",
        ["社区", "文档"],
        "https://dev.nodejs.cn/favicon.ico",
        gradients[6],
        false,
    ],
    [
        53,
        "智能工具导航",
        "智能工具导航，国内外热门ai工具集导航。智能工具导航,国内外热门ai工具集导航,ai工具,ai导航,智能对话,文生图,文生视频,AIGC,AiAgent,智能bot。",
        "https://www.coderutil.com",
        ["导航", "资源"],
        "https://www.coderutil.com/favicon.ico",
        gradients[7],
        false,
    ],
    [
        54,
        "Mnggiflab",
        "MNGGIFLAB-在线gif制作,视频转gif,gif编辑,gif合成,gif压缩,录屏gif",
        "https://www.mnggiflab.com/",
        ["图片", "Tool"],
        "https://mnggiflab.com/img/logo/logo-icon.png",
        gradients[8],
        false,
    ],
    [
        55,
        "fuun.fun",
        "奇趣网站收藏家",
        "https://fuun.fun/",
        ["资源", "娱乐"],
        "https://fuun.fun/favicon.ico",
        gradients[9],
        false,
    ],
    [
        56,
        "LimgX",
        "免费在线图片压缩与格式转换工具。本地处理保护隐私，支持JPG、PNG、WebP格式转换，无需上传服务器。",
        "https://limgx.com/",
        ["Tool", "图片"],
        "https://limgx.com/favicon.ico",
        gradients[10],
        false,
    ],
    [
        57,
        "白嫖站",
        "白嫖资源 | 收录全网免费好用资源收录全网免费好用资源。",
        "https://baipiao.top/",
        ["导航"],
        "https://baipiao.top/favicon.ico",
        gradients[11],
        false,
    ],
]);

// 当前选中的标签
const activeTags = ref<string[]>([]);

// 过滤资源
const filteredResources = computed<any[][]>(() => {
    if (activeTags.value.length === 0) return resources.value;
    return resources.value.filter((resource) =>
        activeTags.value.some((tag) =>
            resource[ResourceFields.tags].includes(tag),
        ),
    );
});

// 获取所有唯一标签
const uniqueTags = computed<string[]>(() => {
    const tags = new Set<string>();
    resources.value.forEach((resource) => {
        resource[ResourceFields.tags].forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
});

// 切换标签
function toggleTag(tag: string) {
    if (activeTags.value.includes(tag)) {
        activeTags.value = activeTags.value.filter((t) => t !== tag);
    } else {
        activeTags.value = [...activeTags.value, tag];
    }
}

// 清除筛选
function clearFilter() {
    activeTags.value = [];
}

// 处理图片加载错误
function handleImageError(resource: any[]) {
    resource[ResourceFields.imageError] = true;
}

// 分页相关
const currentPage = ref(1);
const pageSize = ref(21);
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
watch(
    activeTags,
    () => {
        currentPage.value = 1;
    },
    { deep: true },
);

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
    <div class="max-w-6xl mx-auto px-4 py-8">
        <!-- 标签筛选区域 -->
        <div
            class="mb-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
        >
            <div class="flex flex-wrap items-center justify-between mb-4 gap-3">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                    收录👍资源{{ filteredResources.length }}个
                </h2>

                <div class="flex items-center space-x-2">
                    <button
                        v-if="activeTags.length > 0"
                        class="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors flex items-center hover:scale-[1.03] duration-200"
                        @click="clearFilter"
                    >
                        <Icon icon="mdi:filter-remove" class="mr-1" />
                        清除筛选
                    </button>
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
            </div>
        </div>

        <!-- 资源展示区域 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="resource in paginatedResources"
                :key="resource[ResourceFields.id]"
                class="h-full"
            >
                <transition name="fade">
                    <a
                        :href="resource[ResourceFields.url]"
                        target="_blank"
                        class="block w-full h-full rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-98"
                        :style="{
                            background:
                                resource[ResourceFields.bgGradient] ||
                                'var(--default-glass-bg)',
                        }"
                    >
                        <div class="p-6 h-full flex flex-col">
                            <div class="flex items-start mb-3">
                                <div
                                    class="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                                >
                                    <img
                                        v-if="
                                            !resource[ResourceFields.imageError]
                                        "
                                        :src="resource[ResourceFields.imageUrl]"
                                        class="w-full h-full object-contain p-2"
                                        loading="lazy"
                                        @error="handleImageError(resource)"
                                    />
                                    <Icon
                                        v-else
                                        icon="mdi:link-variant"
                                        class="text-2xl text-blue-500"
                                    />
                                </div>
                                <div class="ml-4 flex-1">
                                    <h3
                                        class="text-xl font-bold text-white line-clamp-2"
                                    >
                                        {{ resource[ResourceFields.title] }}
                                    </h3>
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-3">
                                <span
                                    v-for="tag in resource[ResourceFields.tags]"
                                    :key="tag"
                                    class="text-xs px-2 py-1 rounded mr-2 mb-1 bg-white/20 text-white"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                            <p class="text-white/90 flex-grow line-clamp-4">
                                {{ resource[ResourceFields.description] }}
                            </p>
                        </div>
                    </a>
                </transition>
            </div>
        </div>

        <!-- 分页器 -->
        <div
            v-if="totalPages > 1"
            class="flex items-center justify-center mt-10 gap-4"
        >
            <button
                :disabled="currentPage === 1"
                class="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                @click="prevPage"
            >
                <Icon icon="mdi:chevron-left" />
            </button>
            <span
                class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
                {{ currentPage }}
            </span>
            <button
                :disabled="currentPage === totalPages"
                class="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                @click="nextPage"
            >
                <Icon icon="mdi:chevron-right" />
            </button>
        </div>
    </div>
</template>

<style scoped>
/* 定义默认磨砂玻璃背景变量 */
:root {
    --default-glass-bg: linear-gradient(
        135deg,
        rgba(120, 119, 198, 0.1),
        rgba(251, 176, 204, 0.1)
    );
}

.dark {
    --default-glass-bg: linear-gradient(
        135deg,
        rgba(30, 29, 61, 0.3),
        rgba(55, 29, 71, 0.3)
    );
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

.block {
    display: flex;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
</style>
