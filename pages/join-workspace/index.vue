<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

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
const toast = useToast()
const isLoadingJoinWorkspace = ref<boolean>(false)
const isLoadingCreateWorkspace = ref<boolean>(false)

const state = reactive({
  username: undefined
})

const schema = z.object({
  username: z.string(),
})

type Schema = z.output<typeof schema>

async function handleJoinWorkspace (event: FormSubmitEvent<Schema>) {
  try {
    isLoadingJoinWorkspace.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    router.push(`/join-workspace/${event.data.username}`)
  } catch (error:any) {
    toast.add({
      title: 'Error',
      description: `${error.value.data.status.message}`,
      icon: 'i-ph-check-circle-duotone',
      color: 'red'
    })
  } finally {
    isLoadingJoinWorkspace.value = false
  }
}

async function handleCreateWorkspace () {
  try {
    isLoadingCreateWorkspace.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.add({
      title: 'Success',
      description: 'Workspace created successfully!',
      icon: 'i-ph-check-circle-duotone',
      color: 'green'
    })
    state.username = undefined
  } catch (error:any) {
    toast.add({
      title: 'Error',
      description: `${error.value.data.status.message}`,
      icon: 'i-ph-check-circle-duotone',
      color: 'red'
    })
  } finally {
    isLoadingCreateWorkspace.value = false
  }
}
</script>

<template>
  <div class="flex flex-col lg:flex-row h-screen mx-auto">
    <UContainer class="w-full lg:w-7/12 h-screen flex flex-col justify-between">
      <div class="flex justify-between items-center pt-12">
        <NuxtImg src="logo.svg" class="w-12 h-12" />
      </div>

      <div class="px-4 my-16 lg:w-8/12 !mx-auto">
        <div class="mb-16">
          <h1 class="text-4xl font-normal leading-10 mb-6">
          Join or Create a Workspace
          </h1>
          <p class="text-noble-black-300">
            Connect with others by joining an existing workspace or create a new one to
            <br>
            collaborate with your team.
          </p>
        </div>
        <UForm :schema="schema" :state="state" @submit="handleJoinWorkspace">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 flex flex-col lg:flex-row lg:items-center gap-6">
              <div class="w-full lg:w-9/12">
                <UFormGroup name="username">
                  <UInput
                    v-model="state.username"
                    size="md"
                    style="text-align: right; padding-right: 140px;"
                    placeholder="Your workspace URL"
                  >
                    <template #trailing>
                      <span class="text-noble-black-400 text-base">
                        .artificium.app
                      </span>
                    </template>
                  </UInput>
                </UFormGroup>
              </div>
              <div class="w-full lg:w-3/12">
                <UButton
                  type="submit"
                  size="md"
                  class="w-full flex justify-center !bg-stem-green-500 !text-day-blue-900 font-semibold rounded-xl"
                  :loading="isLoadingJoinWorkspace"
                >
                  Join Workspace
                </UButton>
              </div>
            </div>
            <div class="col-span-12">
              <UDivider label="or" class="my-12" />
            </div>
            <div class="col-span-12">
              <UButton
                type="button"
                size="md"
                class="w-full flex justify-center !bg-noble-black-600 !text-noble-black-300 font-semibold"
                :loading="isLoadingCreateWorkspace"
                :disabled="state.username === undefined || state.username === ''"
                @click="handleCreateWorkspace"
              >
                Create new Workspace
              </UButton>
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
    <div class="w-full lg:w-5/12 hidden lg:block">
      <NuxtImg src="/illustrations/bg-register-2-illustration.webp" class="w-full h-full object-cover rounded-l-3xl" />
    </div>
  </div>
</template>

<style scoped></style>
