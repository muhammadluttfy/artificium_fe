<script setup lang="ts">
const isSidebarCollapsed = useState<boolean>('is-collapsed')
</script>

<template>
  <div class="min-h-screen">
    <Sidebar
      :collapsed.sync="isSidebarCollapsed"
    />
    <main 
      class="transition-all duration-300 min-h-screen m-3 rounded-[20px]"
      :class="[
        isSidebarCollapsed ? 'lg:ml-[92px]' : 'lg:ml-[337px]'
      ]"
    >
      <div 
        class="sticky top-3 right-0 z-10 transition-all duration-300"
        :class="[
          isSidebarCollapsed ? 'lg:left-[80px]' : 'lg:left-[325px]'
        ]"
      >
        <NavigationBar />
      </div>
      
      <div class="pt-4">
        <slot />
      </div>

      <div 
        class="sticky bottom-3 right-0 z-10 transition-all duration-300"
        :class="[
          isSidebarCollapsed ? 'lg:left-[80px]' : 'lg:left-[325px]'
        ]"
      >
        <NavigationBarCommandPromp />
      </div>
    </main>
  </div>
</template>
