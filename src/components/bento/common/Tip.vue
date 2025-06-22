<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

// 定义组件属性
interface Props {
  message?: string
  gradient?: string
}

const props = withDefaults(defineProps<Props>(), {
  message: '公告：来自远方的朋友,你好呀！',
  gradient: 'from-blue-500 to-indigo-600',
})

// 响应式状态
const showModal = ref(false)
const showExpandIndicator = ref(false)

// 计算渐变类
const gradientClass = computed(() => {
  return `bg-gradient-to-br ${props.gradient}`
})

// 打开模态框
function openModal() {
  showModal.value = true
  // 阻止背景滚动
  document.body.style.overflow = 'hidden'
}

// 关闭模态框
function closeModal() {
  showModal.value = false
  // 恢复背景滚动
  document.body.style.overflow = ''
}

// 检测是否需要显示展开指示器
onMounted(() => {
  // 简单检测：如果消息超过30个字符，显示展开指示器
  showExpandIndicator.value = props.message.length > 30
})
</script>

<template>
  <ShadowCard class="!p-[5px]">
    <div class="relative w-full h-full">
      <!-- 公告卡片 -->
      <div
        class="announcement-box relative overflow-hidden cursor-pointer"
        :class="gradientClass"
        @click="openModal"
      >
        <!-- 装饰元素 -->
        <div class="decorative-circle w-[60px] h-[60px] -top-4 -left-4" />
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

        <!-- 查看更多提示 -->
        <div
          v-if="showExpandIndicator"
          class="absolute bottom-3 left-0 right-0 z-20 flex justify-center"
        >
          <div
            class="flex items-center px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full animate-pulse"
          >
            <span class="text-xs text-white/90 mr-1">点击查看更多</span>
            <i class="fas fa-expand-alt text-white text-xs" />
          </div>
        </div>
      </div>

      <!-- 模态框 - 全局居中 -->
      <teleport to="body">
        <transition name="modal">
          <div
            v-if="showModal"
            class="fixed inset-0 z-[100] flex items-center justify-center p-4"
            @click.self="closeModal"
          >
            <div class="modal-overlay fixed inset-0" />
            <div
              class="modal-content relative z-10 bg-white rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl"
            >
              <!-- 模态框头部 -->
              <div
                class="p-5 border-b flex items-center justify-between"
              >
                <div class="flex items-center">
                  <div
                    class="w-9 h-9 rounded-full flex items-center justify-center mr-3"
                    :class="gradientClass"
                  >
                    <i
                      class="fas fa-bullhorn text-white text-sm"
                    />
                  </div>
                  <h3 class="text-xl font-bold text-gray-800">
                    网站公告
                  </h3>
                </div>
                <button
                  class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                  @click="closeModal"
                >
                  <i class="fas fa-times" />
                </button>
              </div>

              <!-- 模态框内容 -->
              <div class="p-6 flex-grow overflow-y-auto max-h-[70vh]">
                <p
                  class="text-gray-700 leading-relaxed whitespace-pre-wrap"
                >
                  {{ message }}
                </p>

                <div
                  v-if="message.length > 500"
                  class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-start"
                >
                  <i
                    class="fas fa-info-circle text-blue-500 mt-1 mr-2"
                  />
                  <p class="text-sm text-blue-700">
                    以上是完整的公告内容，您可以滚动查看更多信息
                  </p>
                </div>
              </div>

              <!-- 模态框底部 -->
              <div class="p-5 border-t flex justify-end">
                <button
                  class="px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center shadow-md"
                  :class="gradientClass"
                  @click="closeModal"
                >
                  <i
                    class="fas fa-check-circle mr-2 text-white"
                  />
                  <span class="text-white font-medium">我知道了</span>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </teleport>
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

/* 文字遮罩效果 */
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

/* 模态框样式 */
.modal-overlay {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}

.modal-content {
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

/* 模态框动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition:
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.4s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

/* 查看更多提示动画 */
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
