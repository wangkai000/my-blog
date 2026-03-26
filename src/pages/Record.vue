<!-- eslint-disable vue/require-toggle-inside-transition -->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { type Resource, resources } from '@/data/resources'

// 当前选中的标签
const activeTags = ref<string[]>([])

// 过滤资源
const filteredResources = computed<Resource[]>(() => {
  if (activeTags.value.length === 0)
    return resources
  return resources.filter(resource =>
    activeTags.value.some(tag =>
      resource.tags.includes(tag),
    ),
  )
})

// 获取所有唯一标签
const uniqueTags = computed<string[]>(() => {
  const tags = new Set<string>()
  resources.forEach((resource) => {
    resource.tags.forEach((tag: string) => tags.add(tag))
  })
  return Array.from(tags).sort()
})

// 切换标签
function toggleTag(tag: string) {
  if (activeTags.value.includes(tag)) {
    activeTags.value = activeTags.value.filter(t => t !== tag)
  }
  else {
    activeTags.value = [...activeTags.value, tag]
  }
}

// 清除筛选
function clearFilter() {
  activeTags.value = []
}

// 处理图片加载错误
function handleImageError(resource: Resource) {
  resource.imageError = true
}

// 分页相关
const currentPage = ref(1)
const pageSize = ref(21)
const totalPages = computed(() =>
  Math.ceil(filteredResources.value.length / pageSize.value),
)

// 分页后的资源
const paginatedResources = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredResources.value.slice(start, end)
})

// 当筛选条件变化时重置页码
watch(
  activeTags,
  () => {
    currentPage.value = 1
  },
  { deep: true },
)

// 上一页
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// 下一页
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
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
        :key="resource.id"
        class="h-full"
      >
        <a
          :href="resource.url"
          target="_blank"
          class="block w-full h-full rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-98"
          :style="{
            background:
              resource.bgGradient
              || 'var(--default-glass-bg)',
          }"
        >
          <div class="p-6 h-full flex flex-col">
            <div class="flex items-start mb-3">
              <div
                class="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <img
                  v-if="!resource.imageError"
                  :src="resource.imageUrl"
                  class="w-full h-full object-contain p-2"
                  loading="lazy"
                  @error="handleImageError(resource)"
                >
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
                  {{ resource.title }}
                </h3>
              </div>
            </div>
            <div class="flex flex-wrap mb-3">
              <span
                v-for="tag in resource.tags"
                :key="tag"
                class="text-xs px-2 py-1 rounded mr-2 mb-1 bg-white/20 text-white"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-white/90 flex-grow line-clamp-4">
              {{ resource.description }}
            </p>
          </div>
        </a>
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
