<script setup lang="ts">
</script>

<template>
  <div class="flex justify-between items-center gap-6 bg-noble-black-800 rounded-[20px] p-6 w-full">
    <button type="button" class="w-5">
      <IconsMicrophone class="text-noble-black-400" />
    </button>

    <UTextarea
      autoresize
      :rows="1"
      :maxrows="5"
      class="w-full text-noble-black-200"
      color="white"
      variant="none"
      placeholder="You can ask me anything!"
    />

    <button type="button" class="w-5">
      <IconsAttachment class="text-noble-black-400" />
    </button>
    <button class="w-[52px] text-noble-black-200 bg-gradient-to-br from-noble-black-500 to-noble-black-700 
      rounded-xl p-4">
      <IconsPaperPlan class="text-noble-black-400" />
    </button>
  </div>
</template>