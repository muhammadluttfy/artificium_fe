<script setup lang="ts">
const isCollapsed = useState<boolean>('is-collapsed', () => false)
const isMobileOpen = ref<boolean>(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (isMobileOpen.value && event.target instanceof HTMLElement && !event.target.closest('aside')) {
    isCollapsed.value = true
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isCollapsed.value = true
    }
  })

  const mediaQuery = window.matchMedia('(max-width: 1024px)')
  const handleScreenResize = (event: MediaQueryListEvent) => {
    if (event.matches) {
      isCollapsed.value = true
    }
  }
  if (mediaQuery.matches) {
    isCollapsed.value = true
  }
  mediaQuery.addEventListener('change', handleScreenResize)
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleScreenResize)
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        isCollapsed.value = true
      }
    })
  })
})

const emit = defineEmits(['update:collapsed'])
watch(isCollapsed, (newValue: boolean) => {
  emit('update:collapsed', newValue)
})
</script>


<template>
  <div>
    <!-- Overlay when sidebar is open on mobile -->
    <div 
      v-show="!isCollapsed" 
      class="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
      @click="isCollapsed = true"
    />
    <aside
      class="bg-noble-black-800 fixed inset-y-0 flex flex-col z-20 rounded-[20px] shadow-lg transition-all duration-300 ease-in-out"
      :class="[
        isMobileOpen ? '' : '-translate-x-full lg:translate-x-0',
        isCollapsed ? 'lg:w-[80px]' : 'w-[312px] translate-x-0',
        !isCollapsed ? (isMobileOpen && !isCollapsed ? 'm-0' : 'm-3') : 'my-3'
      ]"
    >
      <!-- Sidebar Header -->
      <div class="flex items-center justify-between p-4 border-b border-noble-black-700">
        <h1 class="text-white font-bold" :class="{ 'hidden': isCollapsed }">
          Orbital Oddysey
        </h1>
        <button 
          class="p-2 rounded-lg text-white hover:bg-noble-black-700"
          :class="{ 'ml-1': toggleCollapse }"
          @click="toggleCollapse"
        >
          <IconsHamberger class="text-white" />
        </button>
      </div>
      <div class="flex items-center justify-between p-6 border-b border-noble-black-700">
        <div class="flex items-center gap-4">
          <NuxtImg
            src="/avatars/avatar-1.png"
            class="w-12 h-12"
            :class="{ 'w-8 h-8': isCollapsed }"
          />
          <div :class="{ 'hidden': isCollapsed }">
            <h3 class="font-semibold text-base mb-1">
              Intellisys
            </h3>
            <p class="font-medium text-xs text-stem-green-500">
              12 members
            </p>
          </div>
        </div>
        <button type="button" :class="{ 'hidden': isCollapsed }">
          <IconsArrow class="text-noble-black-400" />
        </button>
      </div>

      <!-- sidebar menus -->
      <nav
        class="flex-1 overflow-y-auto"
      >
        <div class="space-y-2">
          <div class="px-4 py-6 border-y border-noble-black-700">
            <p
              class="uppercase font-semibold text-xs text-noble-black-400 mb-6"
              :class="{ 'hidden': isCollapsed }"
            >
              General
            </p>
            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold hover:bg-noble-black-700 rounded-lg p-[14px] transition-colors"
            >
              <div class="flex items-center">
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="h-6 w-6"
                />
                <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Search
                </span>
              </div>
              <div
                class="flex items-center ml-auto justify-center w-12 h-8 p-1.5 border border-noble-black-500 rounded-lg text-xs font-semibold bg-gradient-to-br from-noble-black-500 to-noble-black-700"
                :class="{ 'hidden': isCollapsed }"
              >
                ⌘ S
              </div>


            </button>
            
            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold hover:bg-noble-black-700 rounded-lg p-[14px] transition-colors"
            >
              <UIcon
                name="i-heroicons-credit-card"
                class="h-6 w-6"
              />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
              Billing
              </span>
            </button>
          </div>

          <div class="p-4">
  
            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold hover:bg-noble-black-700 rounded-lg p-[14px] transition-colors"
            >
              <UIcon
                name="i-heroicons-clipboard-document-list"
                class="h-6 w-6"
              />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
              Tasks
              </span>
            </button>
  
            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold hover:bg-noble-black-700 rounded-lg p-[14px] transition-colors"
            >
              <UIcon
                name="i-heroicons-cog-6-tooth"
                class="h-6 w-6"
              />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
              Settings
              </span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  </div>
</template>
