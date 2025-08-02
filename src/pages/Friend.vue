<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { registerGiscus } from '~/utils/giscus'

// 友情链接数据 - 包含新提供的三条数据
// 友情链接数据
const friends = ref([
  {
    title: '十年之约',
    description:
            '一个人的寂寞，一群人的狂欢。十年之约是一个记录、展示独立博客的平台，即从加入这个活动起，我们的博客10年不关闭或者更久，保持更新和活力。把博客从爱好变成一种习惯，坚持10年，是一项很有意义的活动，我们希望更多的博主加入！',
    avatar: 'https://www.foreverblog.cn/favicon.ico',
    url: 'https://www.foreverblog.cn/',
    avatarFailed: false,
  },
  {
    title: 'dev-zuo',
    description: 'dev-zuo 技术日常',
    avatar: 'http://food.zuo11.com/logo.png',
    url: 'http://www.zuo11.com/',
    avatarFailed: false,
  },
  {
    title: '博客录',
    description: '一个个人博客收集平台',
    avatar: 'https://boke.lu/博客录新图标透明底圆底(1).png',
    url: 'https://boke.lu/',
    avatarFailed: false,
  },
  {
    title: '有余',
    description: '手执烟火以谋生,心怀诗意至远方~',
    avatar: 'https://image.dongping.link/imageupload/3022db7803924133aeed921cb73822c9.png',
    url: 'https://dongping.link',
    avatarFailed: false,
  },
  {
    title: 'Zkeq',
    description: '永远安定于美好事物',
    avatar: 'https://img.onmicrosoft.cn/Avatar.jpg',
    url: 'https://icodeq.com/',
    avatarFailed: false,
  },
  {
    title: 'Liu Zijian\'s Blog',
    description: 'Keep on going never give up',
    avatar: 'https://blog.liuzijian.com/img/logo.jpg',
    url: 'https://blog.liuzijian.com',
    avatarFailed: false,
  },
  {
    title: '张洪Heo',
    description: '分享设计与科技生活',
    avatar: 'https://img.zhheo.com/i/67d8fa75943e4.webp',
    url: 'https://blog.zhheo.com/',
    avatarFailed: false,
  },
  {
    title: 'echeverra',
    description: 'let\'s go, together!',
    avatar: 'https://echeverra.cn/favicon.jpg',
    url: 'https://echeverra.cn',
    avatarFailed: false,
  },
  {
    title: '宇阳',
    description: '记录所学知识，缩短和大神的差距！',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640',
    url: 'https://liuyuyang.net',
    avatarFailed: false,
  },
  {
    title: 'Nibbles 尼布',
    description: '向着终生成长者迈进！',
    avatar: 'https://studio.nibbles.cn/avatar.jpg',
    url: 'https://nibbles.cn/',
    avatarFailed: false,
  },
  // {
  //     title: "姚远",
  //     description: "A vegetable student",
  //     avatar: "https://yaoyuan.vip/images/Avatar.jpg",
  //     url: "https://yaoyuan.vip",
  //     avatarFailed: false,
  // },
  {
    title: 'Minsp·隅',
    description: '在纷扰中寻得宁静，于思索里洞察真意。',
    avatar: 'https://img.minsp.org/images/2024/public/logo.jpeg',
    url: ' https://www.minsp.org',
    avatarFailed: false,
  },
  {
    title: '小张的个人博客',
    description: '比起有一百个朋友，不如有个比一百人还要重要的真心朋友。',
    avatar: 'http://img.mrzym.top/FsjKJtHwnWCvmbk9V4MWcZrSKhm-',
    url: 'http://mrzym.top/',
    avatarFailed: false,
  },
  {
    title: 'WQG',
    description: 'A SIMPLE BLOG.',
    avatar: 'https://cdn.wqg.life/common/logo.jpg',
    url: 'https://wqg.life/',
    avatarFailed: false,
  },
  {
    title: '拾光',
    description: '给未来写封信,愿你未来不负所期',
    avatar: 'https://www.timeletters.cn/favicon.ico',
    url: 'https://www.timeletters.cn/',
    avatarFailed: false,
  },
  {
    title: 'MoyuqLのBlog',
    description: 'MoyquL与你同在~',
    avatar: 'https://bu.dusays.com/2023/07/29/64c4f45ee421b.jpg',
    url: 'https://blog.moyuql.top',
    avatarFailed: false,
  },
  {
    title: 'leorain',
    description: '一个对技术和生活充满热爱的文艺型技术青年~',
    avatar: 'https://www.leorain.cn/images/logo.png',
    url: 'https://www.leorain.cn',
    avatarFailed: false,
  },
  {
    title: 'I Am I',
    description: '永远相信美好的事情即将发生',
    avatar: 'https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg',
    url: 'https://5ime.cn',
    avatarFailed: false,
  },
  {
    title: '慕雪的寒舍',
    description: '爱折腾的代码初学者',
    avatar: 'https://blog.musnow.top/favicon.jpg',
    url: 'https://blog.musnow.top/',
    avatarFailed: false,
  },
  //   {
  //     title: '小码同学',
  //     description: '喜欢的东西就努力去追求，万一成功了呢!',
  //     avatar: 'https://bu.dusays.com/2025/03/02/67c4531250141.jpg',
  //     url: 'https://blog.hikki.site',
  //     avatarFailed: false,
  //   },

  {
    title: 'snows_l\'s BLOG',
    description: '渔得鱼心满意足，樵得樵眼笑眉舒！',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=37523953&s=640',
    url: 'http://snows-l.site',
    avatarFailed: false,
  },
  {
    title: 'POETIZE',
    description: '这是一个 Vue2 Vue3 与 SpringBoot 结合的产物～',
    avatar: 'https://s1.ax1x.com/2022/11/10/z9E7X4.jpg',
    url: 'https://poetize.cn',
    avatarFailed: false,
  },
  {
    title: '唐志远',
    description: '立志成为一名架构师',
    avatar: 'https://bu.dusays.com/2022/05/02/626f92e193879.jpg',
    url: 'https://fe32.top/',
    avatarFailed: false,
  },
  {
    title: ' Levi\'s space',
    description: '一个有意思的Blog，工作记录，日常分享，欢迎访问',
    avatar: 'https://levi-oss-1301066479.cos.ap-guangzhou.myqcloud.com/avatarImages/Snipaste_2024-04-24_16-54-57.png',
    url: 'https://leviqin.top',
    avatarFailed: false,
  },
  {
    title: 'Yeppioo',
    description: '梦想成为庄稼地里的读书人.....',
    avatar: 'https://blog.yeppioo.vip/static/img/avatar.png',
    url: 'https://blog.yeppioo.vip/',
    avatarFailed: false,
  },
  // {
  //   title: 'Anyeの小站',
  //   description: 'Always Nurturing Your Enthusiasm',
  //   avatar: 'https://www.anye.xyz/upload/Anye-logo-white.webp',
  //   url: 'https://www.anye.xyz/',
  //   avatarFailed: false,
  // },
  {
    title: '泽若',
    description: '酌贪泉而觉爽，处涸辙以犹欢。',
    avatar: 'https://www.zeruo.net/wp-content/uploads/2025/07/1753778958-IMG_7458.jpeg',
    url: 'https://www.zeruo.net',
    avatarFailed: false,
  },
  {
    title: '我不是咕咕鸽',
    description:
            '定期分享一些好玩的东西，包括但不局限于服务器、Web3等相关知识。',
    avatar: 'https://gao.ee/gugu',
    url: 'https://blog.laoda.de',
    avatarFailed: false,
  },
])

// 我的网站信息
const mySite = ref({
  title: '天渺studio',
  description: '天渺工作室的小站',
  url: 'https://tianmiao.site',
  avatar: 'https://s21.ax1x.com/2024/12/22/pAXtJat.jpg',
})

// 复制状态管理
const isCopied = ref(false)

// 复制JSON内容
function copyJson() {
  const jsonStr = JSON.stringify(mySite.value, null, 2)
  navigator.clipboard.writeText(jsonStr).then(() => {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  })
}

// 头像加载完成处理
function handleAvatarLoad(friend: any) {
  friend.avatarLoaded = true
  const imgElement = document.querySelector(`img[src="${friend.avatar}"]`)
  if (imgElement) {
    imgElement.classList.add('opacity-100')
  }
}

// 头像加载失败处理
function handleAvatarError(friend: any) {
  friend.avatarFailed = true
  friend.avatarLoaded = false
}

const giscusRootRef = ref<HTMLElement | null>(null)

watchOnce(giscusRootRef, (root) => {
  if (root && root instanceof HTMLElement)
    registerGiscus(root)
})
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-6xl px-4 py-8">
      <!-- 标题区域 -->
      <div class="mb-10 text-center">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2"
        >
          友情链接
        </h1>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          与志同道合的朋友们一起分享知识和经验
        </p>
      </div>

      <!-- 友情链接网格 - 统一卡片高度 -->
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-16"
      >
        <a
          v-for="(friend, index) in friends"
          :key="index"
          :href="friend.url"
          target="_blank"
          rel="noopener noreferrer"
          class="friend-card group flex flex items-center rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm shadow-sm transition-all duration-200 border border-gray-100 dark:border-gray-700"
          :style="{ minHeight: '120px' }"
        >
          <!-- 头像容器（带加载效果） -->
          <div class="relative flex-shrink-0">
            <!-- 头像骨架屏（加载中显示） -->
            <div
              v-if="!friend.avatarLoaded && !friend.avatarFailed"
              class="avatar-skeleton h-12 w-12 rounded-full md:h-16 md:w-16 border-2 border-blue-100 dark:border-gray-700 animate-pulse"
            />

            <!-- 实际头像 -->
            <img
              v-if="!friend.avatarFailed"
              :src="friend.avatar"
              :alt="friend.title"
              class="h-12 w-12 rounded-full object-cover md:h-16 md:w-16 border-2 border-blue-100 dark:border-gray-700 opacity-0 transition-opacity duration-500"
              loading="lazy"
              :width="48"
              :height="48"
              @load="handleAvatarLoad(friend)"
              @error="handleAvatarError(friend)"
            >

            <!-- 头像加载失败时显示的图标 -->
            <div
              v-else
              class="avatar-fallback h-12 w-12 rounded-full md:h-16 md:w-16 border-2 border-blue-100 dark:border-gray-700 flex items-center justify-center bg-blue-50 dark:bg-gray-700"
            >
              <Icon
                icon="mdi:link-variant"
                class="text-blue-400 dark:text-blue-300 text-2xl"
              />
            </div>
          </div>

          <div class="ml-4 flex-1 flex flex-col justify-center">
            <h2
              class="text-lg font-medium text-gray-800 dark:text-gray-100 md:text-xl"
            >
              {{ friend.title }}
            </h2>
            <p
              class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-grow"
            >
              {{ friend.description || "暂无描述" }}
            </p>
          </div>
        </a>
      </div>

      <!-- 互换友链区块（深色JSON代码块） -->
      <div
        class="friend-request-card p-6 md:p-8 mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border border-blue-100 dark:border-gray-700 rounded-xl shadow-sm"
      >
        <div class="flex-1">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center"
          >
            <Icon
              icon="mdi:handshake"
              class="mr-3 text-blue-500 text-2xl"
            />
            互换友链
          </h2>

          <p class="text-gray-700 dark:text-gray-300 mb-6">
            欢迎互换友链！以下是本站信息：
          </p>

          <!-- 深色JSON代码块展示区域 -->
          <div class="relative rounded-xl overflow-hidden mb-6 group">
            <!-- 代码块头部 -->
            <div
              class="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700"
            >
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div
                  class="w-3 h-3 rounded-full bg-yellow-500"
                />
                <div
                  class="w-3 h-3 rounded-full bg-green-500"
                />
              </div>
              <div class="flex items-center">
                <span class="text-gray-400 text-sm mr-2">site-info.json</span>
                <button
                  class="text-gray-400 hover:text-white transition-colors p-1"
                  :title="isCopied ? '已复制' : '复制'"
                  @click="copyJson"
                >
                  <Icon
                    :icon="
                      isCopied
                        ? 'mdi:check'
                        : 'mdi:content-copy'
                    "
                    class="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            <!-- JSON内容区域 -->
            <div
              class="bg-gray-900 p-4 md:p-6 font-mono text-sm md:text-base overflow-x-auto"
            >
              <pre class="text-gray-300 leading-relaxed m-0">
<span class="text-blue-400">{</span>
  <span class="text-yellow-300">"title"</span>: <span class="text-green-400">"{{ mySite.title }}"</span>,
  <span class="text-yellow-300">"description"</span>: <span class="text-green-400">"{{ mySite.description }}"</span>,
  <span class="text-yellow-300">"url"</span>: <span class="text-green-400">"{{ mySite.url }}"</span>,
  <span class="text-yellow-300">"avatar"</span>: <span class="text-green-400">"{{ mySite.avatar }}"</span>
<span class="text-blue-400">}</span>
              </pre>
            </div>
          </div>

          <h3
            class="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center"
          >
            <Icon
              icon="mdi:check-circle"
              class="mr-2 text-blue-500"
            />
            互换要求：
          </h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <span
                class="requirement-badge px-3 py-1 rounded-full text-sm font-medium mr-3"
              >1</span>
              <span class="text-gray-700 dark:text-gray-300">网站需部署 HTTPS</span>
            </div>
            <div class="flex items-center">
              <span
                class="requirement-badge px-3 py-1 rounded-full text-sm font-medium mr-3"
              >2</span>
              <span class="text-gray-700 dark:text-gray-300">网站长期维护，内容积极健康</span>
            </div>
            <div class="flex items-center">
              <span
                class="requirement-badge px-3 py-1 rounded-full text-sm font-medium mr-3"
              >3</span>
              <span class="text-gray-700 dark:text-gray-300">申请前请将本网站添加为友链</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 讨论区 -->
      <div
        class="comment-section overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl"
      >
        <div
          class="comment-header p-4 md:p-6 bg-gray-50 dark:bg-gray-800"
        >
          <div class="flex items-center">
            <div
              class="discuss-icon w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r from-blue-500 to-indigo-600"
            >
              <Icon
                icon="mdi:forum"
                class="text-white text-2xl"
              />
            </div>
            <div>
              <h3
                class="text-xl font-bold text-gray-800 dark:text-white"
              >
                友链申请讨论区
              </h3>
            </div>
          </div>
        </div>

        <!-- GitHub评论组件容器 -->
        <div
          class="github-comments-container bg-white dark:bg-gray-900 p-6 min-h-[300px] flex items-center justify-center"
        >
          <div class="text-center">
            <div id="giscusRoot" ref="giscusRootRef" />
          </div>
        </div>
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

.friend-card {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

/* 统一卡片高度，避免内容过少导致的高度不一致 */
.friend-card {
  min-height: 120px; /* 基础高度，可根据需要调整 */
}

.friend-card:hover {
  background-color: #eef2ff;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.dark .friend-card:hover {
  background-color: rgba(30, 41, 59, 0.5);
}

.requirement-badge {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 1px solid #bbf7d0;
  color: #15803d;
}

.dark .requirement-badge {
  background: linear-gradient(135deg, #1a3a2c 0%, #1c4a34 100%);
  border: 1px solid #2d7a5a;
  color: #bbf7d0;
}

.discuss-icon {
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
}

/* 头像加载样式 */
.avatar-skeleton {
  background-color: #e5e7eb;
}

.dark .avatar-skeleton {
  background-color: #374151;
}

.avatar-fallback {
  background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.dark .avatar-fallback {
  background: linear-gradient(135deg, #1a2d3e 0%, #1a2844 100%);
}

.friend-card:hover .avatar-fallback {
  border-color: #3b82f6;
  transform: scale(1.05);
}

/* 加载动画 */
.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* JSON代码块样式 */
pre {
  tab-size: 2;
}

.text-blue-400 {
  color: #60a5fa;
}
.text-yellow-300 {
  color: #fbbf24;
}
.text-green-400 {
  color: #4ade80;
}
.text-gray-300 {
  color: #d1d5db;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .friend-request-card {
    padding: 1.5rem;
  }
  .comment-section {
    margin-top: 1rem;
  }
  .friend-card {
    min-height: 100px; /* 移动端稍低的高度 */
  }
}

@media (min-width: 769px) {
  :deep(.giscus) iframe {
    width: 560px;
    min-height: 150px;
  }
}
</style>
