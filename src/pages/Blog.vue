<script setup lang="ts">
import BlogTextList from "~/components/blog/TextList.vue";
</script>

<template>
    <div>
        <Suspense>
            <div
                class="mx-auto block min-h-full w-full flex-1 flex-col scroll-m-20 px-6"
            >
                <BlogTextList />
            </div>
            <!-- <iframe style="width:100vw;height:100vh;" src="https://hexo.fluid-dev.com/" /> -->
        </Suspense>
    </div>
</template>
