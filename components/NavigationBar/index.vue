<script setup lang="ts">
const emit = defineEmits(['update:collapsed'])
const isSidebarCollapsed = useState<boolean>('is-collapsed')
const toggleCollapse = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  emit('update:collapsed', isSidebarCollapsed.value)
}
</script>

<template>
  <div class="flex justify-between items-center bg-noble-black-800 rounded-[20px] p-6 w-full">
    <div>
      <button 
        class="text-white border-t-2 border-l-2 border-transparent 
          hover:border-t-2 hover:border-l-2 hover:border-noble-black-500 
          hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
          rounded-lg p-2 transition-all -ml-1"
        @click="toggleCollapse"
      >
        <IconsHamberger class="text-white" />
      </button>
    </div>
  </div>
</template>
