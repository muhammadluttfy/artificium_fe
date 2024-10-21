<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  colorMode: 'dark',
  layout: 'empty'
})

useSeoMeta({
  title: 'Artificium - AI Content Creation App',
  ogTitle: 'Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
  ogDescription: 'Artificium adalah platform berbasis AI yang memudahkan proses pembuatan konten kreatif secara efisien dan berkualitas tinggi.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const state = reactive({
  email: undefined,
  password: undefined
})

const schema = z.object({
  // email: z.string().email('Invalid email format').optional(),
  // password: z.string().min(8, 'Must be at least 8 characters').optional()
})

type Schema = z.output<typeof schema>
async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <div class="flex flex-col lg:flex-row h-screen max-w-7xl mx-auto my-auto">
    <UContainer class="w-full lg:w-1/2 py-10">
      <div>
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
              size="md"
              placeholder="Email"
              autocomplete="off"
              class="focus:outline-none focus:ring focus:ring-violet-300"
            />
          </UFormGroup>

          <UFormGroup name="password" class="mb-6">
            <UInput
              v-model="state.password"
              type="password"
              size="md"
              placeholder="Password"
            />
          </UFormGroup>

          <div class="my-12">
            <div class="flex justify-between">
              <UCheckbox label="Remember me" />
              <p class="bg-gradient-to-r from-[#82DBF7] to-stem-green-500 text-transparent bg-clip-text">
                Forgot Password?
              </p>
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
              <UButton color="gray" class="w-full !bg-noble-black-600 py-3 px-4">
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
              <UButton color="gray" class="w-full !bg-noble-black-600 py-3 px-4">
                <template #leading>
                  <div class="flex mx-auto space-x-4">
                    <NuxtImg
                      src="/illustrations/apple.svg"
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
          </div>
        </UForm>
      </div>

      <div>
        <p class="text-base font-semibold text-noble-black-400">
          Don't have an account?
          <span class="bg-gradient-to-r from-[#82DBF7] to-stem-green-500 text-transparent bg-clip-text cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </UContainer>
    <div class="w-full lg:w-1/2 hidden lg:block">
      <NuxtImg src="illustrations/bg-login-illustration.webp" class="w-full rounded-l-3xl" />
    </div>
  </div> 
</template>

<style scoped></style>