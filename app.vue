<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <Html lang="id">
    <Body class="bg-noble-black-700">
      <div class="font-plus-jakarta-sans">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
          <UNotifications />
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>
