<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  layout: 'empty',
  title: 'Join Workspace | Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
})

useSeoMeta({
  title: 'Join Workspace | Artificium - AI-Powered Content Creation Tool',
  ogTitle: 'Join Workspace | Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
  ogDescription: 'Artificium adalah platform berbasis AI yang memudahkan proses pembuatan konten kreatif secara efisien dan berkualitas tinggi.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const router = useRouter()
const route = useRoute()
const toast = useToast()
const isLoading = ref<boolean>(false)

const state = reactive({
  url: undefined
})

async function onSubmit () {
  try {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.add({
      title: 'Success',
      description: `You have successfully joined ${route?.params?.username}'s workspace`,
      icon: 'i-ph-check-circle-duotone',
      color: 'green'
    })

    router.push('/auth/login')
  } catch (error:any) {
    toast.add({
      title: 'Error',
      description: `${error.value.data.status.message}`,
      icon: 'i-ph-check-circle-duotone',
      color: 'red'
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col lg:flex-row h-screen mx-auto">
    <UContainer class="w-full lg:w-1/2 h-screen flex flex-col justify-between">
      <div class="flex justify-between items-center pt-12">
        <NuxtImg src="logo.svg" class="w-12 h-12" />
      </div>

      <div class="px-4 my-16 lg:w-8/12 !mx-auto">
        <div class="mb-16 text-center">
          <NuxtImg src="/avatars/avatar-1.png" class="w-20 h-20 mx-auto rounded-xl mb-6" />
          <h1 class="text-4xl font-bold leading-10 capitalize mb-2">
            {{ route?.params?.username }}
          </h1>
          <p class="text-stem-green-500 font-semibold">
            {{ route?.params?.username }}.artficium.app
          </p>
        </div>
        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <div class="grid grid-cols-12 space-y-16">
            <div class="col-span-12 flex flex-col lg:flex-row lg:items-center lg:gap-6 w-8/12 mx-auto">
              <div class="w-full text-center">
                <UButton
                  label="Change workspace"
                  variant="ghost"
                  color="gray"
                  class="!text-noble-black-400"
                />
              </div>
              <div class="w-full">
                <UButton
                  type="submit"
                  size="md"
                  class="w-full flex justify-center !bg-stem-green-500 !text-day-blue-900 font-semibold rounded-xl"
                  :loading="isLoading"
                >
                  Join Now
                </UButton>
              </div>
            </div>
          </div>
        </UForm>
      </div>

      <div class="flex items-center justify-between pb-12">
        <p class="text-noble-black-300">
          Artificium.app © {{ new Date().getFullYear() }}
        </p>
        <button type="button" class="text-noble-black-300">
          Privacy Policy
        </button>
      </div>
    </UContainer>
    <div class="w-full lg:w-1/2 hidden lg:block">
      <NuxtImg src="/illustrations/bg-register-2-illustration.webp" class="w-full h-full object-cover rounded-l-3xl" />
    </div>
  </div>
</template>

<style scoped></style>
