<script setup lang="ts">
// 仅保留必要的TS环境，无额外逻辑
</script>

<template>
    <div class="todo-wrapper">
        <div class="todo-content">
            <h3 class="todo-title">🔨 开发中...</h3>
            <p class="todo-text">TODO: 模块待完成🤔🤔🤔</p>
        </div>
    </div>
</template>

<style lang="css" scoped>
/* 外层容器负责居中 */
.todo-wrapper {
    display: flex;
    justify-content: center;
    width: 100%; /* 父容器宽度100% */
    padding: 1rem 0;
}

/* 内容容器 - 固定宽度 */
.todo-content {
    width: 200px; /* 固定宽度200px */
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
}

/* 标题 - 渐变色+阴影确保凸显 */
.todo-title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

/* 文本 - 适配明暗模式 */
.todo-text {
    margin: 0;
    font-size: 0.9rem;
    color: #333; /* 浅色模式文字 */
    text-shadow: 0 0 2px #ffffff80; /* 白色边缘阴影抗锯齿 */
}

/* 深色模式适配 */
:root.dark .todo-text {
    color: #f0f0f0; /* 深色模式文字 */
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5); /* 黑色边缘阴影抗锯齿 */
}

/* 标题在深色模式下增强对比度 */
:root.dark .todo-title {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
