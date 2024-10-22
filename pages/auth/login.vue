<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  colorMode: 'dark',
  layout: 'empty',
  title: 'Login | Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
})

useSeoMeta({
  title: 'Login | Artificium - AI-Powered Content Creation Tool',
  ogTitle: 'Login | Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
  ogDescription: 'Artificium adalah platform berbasis AI yang memudahkan proses pembuatan konten kreatif secara efisien dan berkualitas tinggi.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const router = useRouter()

const state = reactive({
  email: undefined,
  password: undefined
})

const schema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>
async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <div class="flex flex-col lg:flex-row h-screen max-w-7xl mx-auto">
    <UContainer class="w-full lg:w-1/2 h-screen flex flex-col justify-between">
      <div class="pt-12">
        <NuxtImg src="logo.svg" width="48" height="48" />
      </div>

      <div class="px-4 lg:px-14 my-16">
        <div class="mb-16">
          <h1 class="font-bold text-4xl mb-6">
            Let's get
            <span class="bg-gradient-to-r from-day-blue-500 via-[#87DDEE] to-stem-green-500 text-transparent bg-clip-text">
              creative!
            </span>
          </h1>
          <p class="text-noble-black-300">
            Log in to Artificium to start creating magic.
          </p>
        </div>
        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <UFormGroup name="email" class="mb-6">
            <UInput
              v-model="state.email"
              type="email"
              icon="i-heroicons-envelope"
              size="md"
              placeholder="Email"
              autocomplete="off"
            />
          </UFormGroup>

          <UFormGroup name="password" class="mb-6">
            <UInput
              v-model="state.password"
              type="password"
              icon="i-heroicons-lock-closed"
              size="md"
              placeholder="Password"
            />
          </UFormGroup>

          <div class="my-12">
            <div class="flex justify-between">
              <UCheckbox label="Remember me" />
              <button type="button" class="bg-gradient-to-r from-[#82DBF7] to-stem-green-500 text-transparent bg-clip-text font-semibold">
                Forgot Password?
              </button>
            </div>
          </div>

          <UButton
            type="submit"
            size="md"
            class="w-full flex justify-center !bg-stem-green-500 !text-day-blue-900 font-semibold"
          >
            Log in
          </UButton>

          <UDivider label="or continue with" class="my-12" />
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-6">
              <UButton class="w-full !bg-noble-black-600 py-3 px-4">
                <template #leading>
                  <div class="flex mx-auto space-x-4">
                    <NuxtImg
                      src="/illustrations/google.svg"
                      width="20"
                      height="20"
                    />
                    <p class="text-noble-black-400">
                      Google Account
                    </p>
                  </div>
                </template>
              </UButton>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <UButton class="w-full !bg-noble-black-600 py-3 px-4">
                <template #leading>
                  <div class="flex mx-auto space-x-4">
                    <NuxtImg
                      src="/illustrations/apple.svg"
                      width="20"
                      height="20"
                    />
                    <p class="text-noble-black-400">
                      Apple Account
                    </p>
                  </div>
                </template>
              </UButton>
            </div>
          </div>
        </UForm>
      </div>

      <div class="pb-12">
        <p class="text-base text-center lg:text-left font-semibold text-noble-black-400">
          Don't have an account?
          <button type="button" class="bg-gradient-to-r from-[#82DBF7] to-stem-green-500 text-transparent bg-clip-text cursor-pointer" @click="router.push('/auth/register')">
            Sign Up
          </button>
        </p>
      </div>
    </UContainer>
    <div class="w-full lg:w-1/2 hidden lg:block">
      <NuxtImg src="illustrations/bg-login-illustration.webp" class="w-full rounded-l-3xl" />
    </div>
  </div> 
</template>

<style scoped></style>