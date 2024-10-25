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
          <div class="space-y-2 px-4 py-6 border-b border-noble-black-700">
            <p
              class="uppercase font-semibold text-xs text-noble-black-400 mb-6"
              :class="{ 'hidden': isCollapsed }"
            >
              General
            </p>
            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold border-t-2 border-l-2 border-transparent 
                hover:border-t-2 hover:border-l-2 hover:border-noble-black-500 
                hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
                rounded-lg px-[14px] py-2.5 transition-all"
              >
              <div class="flex items-center">
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="h-6 w-6 -ml-1"
                :class="{ '-ml-1': isCollapsed }"
                />
                <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Search
                </span>
              </div>
              <div
                class="flex items-center ml-auto justify-center w-12 h-8 border border-noble-black-500 rounded-md text-xs font-semibold bg-gradient-to-br from-noble-black-500 to-noble-black-700"
                :class="{ 'hidden': isCollapsed }"
              >
                ⌘ S
              </div>
            </button>
            
            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold border-t-2 border-l-2 border-transparent 
                hover:border-t-2 hover:border-l-2 hover:border-noble-black-500 
                hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
                rounded-lg p-[14px] transition-all"
              >
              <UIcon
                name="i-heroicons-credit-card"
                class="h-6 w-6"
                :class="{ '-ml-1': isCollapsed }"
              />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
              Billing
              </span>
            </button>
          </div>

          <div class="space-y-2 p-4">
            <p
              class="uppercase font-semibold text-xs text-noble-black-400 mb-6"
              :class="{ 'hidden': isCollapsed }"
            >
              Projects
            </p>

            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-lg p-[14px] transition-all"
              >
              <IconsBox class="text-stem-green-500" />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Orbital Oddysey
              </span>
            </button>

            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold 
                border-t-2 border-l-2 border-transparent 
                hover:border-t-2 hover:border-l-2 hover:border-noble-black-500 
                hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
                rounded-lg p-[14px] transition-all"
              >
              <IconsTriangle class="text-red-power-600" />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Digital Product Launch
              </span>
            </button>

            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold 
                border-t-2 border-l-2 border-transparent 
                hover:border-t-2 hover:border-l-2 hover:border-noble-black-500 
                hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
                rounded-lg p-[14px] transition-all"
              >
              <IconsBox class="text-happy-orange-600" />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Brand Refresh
              </span>
            </button>

            <button 
              type="button" 
              class="flex w-full items-center text-noble-black-100 text-sm font-semibold 
                border-t-2 border-l-2 border-transparent 
                hover:border-t-2 hover:border-l-2 hover:border-noble-black-500 
                hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
                rounded-lg p-[14px] transition-all"
              >
              <IconsHexagon class="text-heisenberg-blue-600" />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Social Media Strategy
              </span>
            </button>

            <button 
              type="button" 
              class="group flex w-full items-center text-noble-black-400 text-sm font-semibold 
                border-t-2 border-l-2 border-transparent 
                hover:border-t-2 hover:border-l-2 hover:text-noble-black-100 hover:border-noble-black-500 
                hover:bg-gradient-to-br hover:from-noble-black-500 hover:to-noble-black-700 
                rounded-lg p-[14px] transition-all"
              >
              <IconsPlus class="text-noble-black-500 group-hover:text-noble-black-100 transition-all" />
              <span class="ml-3" :class="{ 'hidden': isCollapsed }">
                Add new project
              </span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  </div>
</template>
