<script setup lang="ts">
import { NNotificationProvider } from "naive-ui";
import { AppSetup } from "./utils/app";

AppSetup();
</script>

<template>
    <NNotificationProvider>
        <RouterView />
    </NNotificationProvider>
</template>
