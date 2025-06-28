<script setup lang="ts">
import Bento from "./Bento.vue";
</script>

<template>
    <div>
        <Suspense>
            <template #default>
                <Bento />
            </template>

            <template #fallback>
                <div
                    class="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
                >
                    <div
                        class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 animate-pulse"
                    >
                        Loading...
                    </div>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.05);
    }
}
</style>
