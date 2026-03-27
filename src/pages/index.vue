<script setup lang="ts">
import Loading from '@/components/normal/Loading.vue'
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <div>
          <!-- TODO: 恢复 Bento 布局 -->
        </div>
      </template>

      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
