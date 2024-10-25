<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  title: 'Orbital Oddysey',
  description: 'Marketing Campaign for a new TV series Launch',
})

useSeoMeta({
  title: 'Orbital Oddysey',
  ogTitle: 'Orbital Oddysey',
  description: 'Marketing Campaign for a new TV series Launch',
  ogDescription: 'Marketing Campaign for a new TV series Launch',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <div class="bg-noble-black-800 rounded-[20px]">
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
            <div class="rounded-[10px] p-3.5 bg-noble-black-600">
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
    <div class="py-[100px] px-8 lg:px-[52px]">
      <div class="space-y-4 mb-16">
        <h1 class="text-white text-[28px] font-bold text-center">
          Innovation Starter Pack
        </h1>
        <p class="text-base font-medium text-center text-noble-black-300">
          Kickstart your innovation process with our comprehensive selection of predefined prompts.
        </p>
      </div>
  
      <div class="grid grid-cols-12 space-y-16 md:space-y-0 md:gap-16">
        <!-- Creative Assets -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <div
            class="flex items-center justify-center mx-auto w-14 h-14 text-noble-black-100 text-sm font-semibold shadow-3xl shadow-stem-green-500 
            border-t-2 border-l-2 border-noble-black-500 
            bg-gradient-to-br from-noble-black-500 to-noble-black-700 
            rounded-full transition-all mb-4"
          >
            <IconsChat class="text-stem-green-500" />
          </div>
          <h4 class="text-[18px] font-bold text-center mb-8">
            Creative Assets
          </h4>
          <div class="space-y-2">
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                UI wireframe
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Brochure design
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Social Media
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Brand guidelines
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
          </div>
        </div>
  
        <!-- Developer Tools -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <div
            class="flex items-center justify-center mx-auto w-14 h-14 text-noble-black-100 text-sm font-semibold shadow-3xl shadow-heisenberg-blue-500 
            border-t-2 border-l-2 border-noble-black-500 
            bg-gradient-to-br from-noble-black-500 to-noble-black-700 
            rounded-full transition-all mb-4"
          >
            <IconsCode class="text-heisenberg-blue-500" />
          </div>
          <h4 class="text-[18px] font-bold text-center mb-8">
            Developer Tools
          </h4>
          <div class="space-y-2">
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                API Integration
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Test automation
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                DB optimization
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Code review
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
          </div>
        </div>
  
        <!-- Content Creation -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <div
            class="flex items-center justify-center mx-auto w-14 h-14 text-noble-black-100 text-sm font-semibold shadow-3xl shadow-purple-blue-500 
            border-t-2 border-l-2 border-noble-black-500 
            bg-gradient-to-br from-noble-black-500 to-noble-black-700 
            rounded-full transition-all mb-4"
          >
            <IconsChat class="text-purple-blue-500" />
          </div>
          <h4 class="text-[18px] font-bold text-center mb-8">
            Content Creation
          </h4>
          <div class="space-y-2">
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Product description
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                E-mail copy
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Whitepaper
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Press release
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
          </div>
        </div>
  
        <!-- Idea Generation -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <div
            class="flex items-center justify-center mx-auto w-14 h-14 text-noble-black-100 text-sm font-semibold shadow-3xl shadow-sunglow-500 
            border-t-2 border-l-2 border-noble-black-500 
            bg-gradient-to-br from-noble-black-500 to-noble-black-700 
            rounded-full transition-all mb-4"
          >
            <IconsLamp class="text-sunglow-500" />
          </div>
          <h4 class="text-[18px] font-bold text-center mb-8">
            Idea Generation
          </h4>
          <div class="space-y-2">
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Hashtag ideas
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Brainstorming
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Trend analysis
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
            <button 
              type="button" 
              class="flex w-full items-center justify-between text-noble-black-200 text-sm font-semibold 
                border-t-2 border-l-2 border-noble-black-500 
                bg-gradient-to-br from-noble-black-500 to-noble-black-700 
                rounded-xl p-4 transition-all"
              >
              <span>
                Social media posts
              </span>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-noble-black-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
