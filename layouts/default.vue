<script setup lang="ts">
const isSidebarCollapsed = useState<boolean>('is-collapsed')
</script>

<template>
  <div class="min-h-screen">
    <Sidebar
      collapsed.sync="isSidebarCollapsed"
    />
    <main 
      class="transition-all duration-300 min-h-screen m-3 rounded-[20px]"
      :class="[
        isSidebarCollapsed ? 'lg:ml-[92px]' : 'lg:ml-[337px]'
      ]"
    >
    <NavigationBar
    />
      <slot />
    </main>
  </div>
</template>