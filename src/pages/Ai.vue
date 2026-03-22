<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { NButton, NInput, useMessage } from 'naive-ui'

// ────────────────────────────────────────────
// 类型定义
// ────────────────────────────────────────────
interface Message {
  id: number
  role: 'user' | 'assistant' | 'error'
  content: string
  time: string
}

// ────────────────────────────────────────────
// AI 配置（开发中）
// ────────────────────────────────────────────
const selectedModel = ref('deepseek-chat') // 修改为正确的模型名称

// ────────────────────────────────────────────
// 对话状态
// ────────────────────────────────────────────
let idCounter = 0
const messages = ref<Message[]>([
  {
    id: idCounter++,
    role: 'assistant',
    content: '👋 你好！我是 AI 分身，有什么可以帮助你的吗？',
    time: formatTime(new Date()),
  },
])

const inputText = ref('')
const messagesEndRef = ref<HTMLElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// 添加 Naive UI 消息提示
const message = useMessage()

// ────────────────────────────────────────────
// 工具函数
// ────────────────────────────────────────────
function formatTime(date: Date): string {
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

function scrollToBottom() {
  nextTick(() => {
    messagesEndRef.value?.scrollIntoView({ behavior: 'smooth' })
  })
}

function autoResize() {
  // Ensure this function is used in the input field
  const el = textareaRef.value
  if (!el || !el.style)
    return
  el.style.height = 'auto'
  el.style.height = `${Math.min(el.scrollHeight, 160)}px`
}

// ────────────────────────────────────────────
// 发送消息
// ────────────────────────────────────────────
async function sendMessage() {
  // 显示开发中提示
  message.info('AI对话功能正在紧张开发中，敬请期待！')

  // 以下代码被注释，因为功能正在开发中
  // 如果未来需要恢复功能，可以取消注释下面的代码

  // const text = inputText.value.trim()
  // if (!text)
  //   return

  // // 添加用户消息
  // messages.value.push({
  //   id: idCounter++,
  //   role: 'user',
  //   content: text,
  //   time: formatTime(new Date()),
  // })
  // inputText.value = ''
  // if (textareaRef.value)
  //   textareaRef.value.style.height = 'auto'
  // scrollToBottom()

  // // 显示开发中回复
  // await new Promise(r => setTimeout(r, 600)) // 模拟网络延迟
  // messages.value.push({
  //   id: idCounter++,
  //   role: 'error',
  //   content: '🚧 AI对话功能正在紧张开发中，敬请期待！',
  //   time: formatTime(new Date()),
  // })
  // scrollToBottom()
}

// 按 Enter 发送（Shift+Enter 换行）
function handleKeydown(e: KeyboardEvent) {
  // Ensure this function is used for keydown events
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

// 清空对话
function clearMessages() {
  // Ensure this function is used for clearing messages
  idCounter = 0
  messages.value = [
    {
      id: idCounter++,
      role: 'assistant',
      content: '👋 对话已清空，我们重新开始吧！',
      time: formatTime(new Date()),
    },
  ]
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-8 bg-gray-100 dark:bg-gray-800 rounded-xl" style="max-width: 85%; margin: 0 auto;">
    <div class="w-full max-w-[70%] flex flex-col px-6" style="height: calc(100vh - 120px); min-height: 500px;">
      <!-- 顶部标题栏 -->
      <div class="flex items-center justify-between mb-4 px-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md">
            <Icon icon="carbon:bot" class="text-white text-xl" />
          </div>
          <div>
            <h1 class="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">
              AI分身
            </h1>
            <p class="text-xs text-gray-400 dark:text-gray-500">
              由 {{ selectedModel }} 驱动
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <!-- 清空按钮 -->
          <NButton size="small" type="error" @click="clearMessages">
            清空对话
          </NButton>
        </div>
      </div>

      <!-- 消息列表区域 -->
      <div
        class="flex-1 overflow-y-auto rounded-2xl border border-gray-100 dark:border-gray-700/60
               bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm p-4 space-y-4"
      >
        <TransitionGroup name="msg">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="flex gap-3" :class="[
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row',
            ]"
          >
            <!-- 头像 -->
            <div
              class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm overflow-hidden" :class="[
                msg.role === 'user'
                  ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                  : msg.role === 'error'
                    ? 'bg-red-100 dark:bg-red-900/40'
                    : 'bg-gradient-to-br from-violet-500 to-indigo-500',
              ]"
            >
              <img
                v-if="msg.role === 'assistant'"
                src="/logo.png"
                alt="AI分身"
                class="w-full h-full object-cover"
              >
              <Icon
                v-else
                :icon="msg.role === 'user' ? 'carbon:user' : 'carbon:warning'"
                class="text-base text-white"
              />
            </div>

            <!-- 气泡 -->
            <div class="max-w-[78%] flex flex-col" :class="[msg.role === 'user' ? 'items-end' : 'items-start']">
              <div
                class="px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words shadow-sm" :class="[
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white rounded-tr-sm'
                    : msg.role === 'error'
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 rounded-tl-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-sm',
                ]"
              >
                {{ msg.content }}
              </div>
              <span class="text-xs text-gray-400 dark:text-gray-500 mt-1 px-1">{{ msg.time }}</span>
            </div>
          </div>
        </TransitionGroup>
        <div ref="messagesEndRef" />
      </div>

      <!-- 输入区域 -->
      <div class="mt-3">
        <div
          class="flex items-end gap-2 p-2 rounded-2xl border border-gray-200 dark:border-gray-700
                 bg-white dark:bg-gray-900 shadow-sm"
        >
          <NInput
            ref="textareaRef"
            v-model="inputText"
            placeholder="输入消息，Enter 发送，Shift+Enter 换行..."
            type="textarea"
            rows="1"
            @keydown="handleKeydown"
            @input="autoResize"
          />
          <NButton
            type="primary"
            @click="sendMessage"
          >
            发送
          </NButton>
        </div>
        <p class="text-center text-xs text-gray-400 dark:text-gray-600 mt-2">
          AI 可能产生错误内容，请注意甄别
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 消息出现动画 */
.msg-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.msg-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.96);
}

/* 加载点弹跳 */
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}
.animate-bounce {
  animation: bounce 1.2s infinite ease-in-out;
}

/* 滚动条美化 */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.2);
  border-radius: 2px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.4);
}
</style>
