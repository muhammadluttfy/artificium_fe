<script setup lang="ts">
const emit = defineEmits(['update:collapsed'])
const isSidebarCollapsed = useState<boolean>('is-collapsed')
const toggleCollapse = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  emit('update:collapsed', isSidebarCollapsed.value)
}
</script>

<template>
  <div class="bg-noble-black-800 rounded-[20px]">
    <div class="px-6 pt-6 block lg:hidden">
      <button 
        class="p-2 rounded-lg text-white hover:bg-noble-black-700"
        @click="toggleCollapse"
      >
        <IconsHamberger class="text-white" />
      </button>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
      <div class="p-6 space-y-1">
        <h3 class="text-xl font-bold text-white">
          Orbital Oddysey
        </h3>
        <p class="text-sm text-noble-black-300 font-medium">
          Marketing Campaign for a new TV series Launch
        </p>
      </div>
      <div class="px-6 flex items-center justify-between gap-6">
        <NuxtImg src="/avatars/users.png" class="w-36 h-full" />
        <button type="button" class="flex items-center gap-4">
          <div class="flex items-center gap-2.5">
            <IconsShare class="text-noble-black-400" />
            <p class="text-noble-black-400">
              Share
            </p>
          </div>
          <div class="rounded-[10px] p-4 bg-noble-black-600">
            <IconsPencil class="text-noble-black-200" />
          </div>
        </button>
      </div>
    </div>
    <UDivider class="pt-6" />
    <div class="grid grid-flow-col auto-cols-max">
      <button type="button" class="pt-[30px] px-6">
        <div class="flex items-center gap-3 pb-6">
          <IconsArtificium class="text-stem-green-500" />
          <p class="text-sm font-semibold text-noble-black-100">
            Artificium
          </p>
        </div>
        <div class="h-1.5 bg-stem-green-500 rounded-t-lg" />
      </button>
      <button type="button" class="py-[30px] px-6 ">
        <div class="flex items-center gap-3">
          <IconsChat class="text-noble-black-400" />
          <p class="text-sm font-semibold text-noble-black-300">
            Chat
          </p>
        </div>
      </button>
      <button type="button" class="py-[30px] px-6 ">
        <div class="flex items-center gap-3">
          <IconsFolder class="text-noble-black-400" />
          <p class="text-sm font-semibold text-noble-black-300">
            Library
          </p>
        </div>
      </button>
    </div>
  </div>
</template>
