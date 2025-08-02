<script setup lang="ts">
import Bento from "./Bento.vue";
import Loading from "@/components/normal/Loading.vue";
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <!-- 添加Flex布局和居中样式 -->
        <Suspense>
            <template #default>
                <Bento />
            </template>

            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<style scoped></style>
