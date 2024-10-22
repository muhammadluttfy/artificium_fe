<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  colorMode: 'dark',
  layout: 'empty',
  title: 'Register | Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
})

useSeoMeta({
  title: 'Register | Artificium - AI-Powered Content Creation Tool',
  ogTitle: 'Register | Artificium - AI-Powered Content Creation Tool',
  description: 'Artificium adalah aplikasi canggih yang memanfaatkan kecerdasan buatan untuk membantu menciptakan konten kreatif dengan mudah dan cepat.',
  ogDescription: 'Artificium adalah platform berbasis AI yang memudahkan proses pembuatan konten kreatif secara efisien dan berkualitas tinggi.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const router = useRouter()
const toast = useToast()
const isLoading = ref<boolean>(false)

const state = reactive({
  firstName: undefined,
  lastName: undefined,
  password: undefined,
  repeatPassword: undefined,
  termsAndConditions: false
})

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  password: z.string(),
  repeatPassword: z.string(),
  termsAndConditions: z.boolean()
}).refine((data: any) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
}).refine((data: any) => data.termsAndConditions === true, {
    message: "You must accept the terms and conditions",
    path: ["termsAndConditions"],
})

type Schema = z.output<typeof schema>

  async function onSubmit (event: FormSubmitEvent<Schema>) {
  try {
    console.log('event data :', event.data)
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.add({
      title: 'Success',
      description: 'Account created successfully!',
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
  <div class="flex flex-col lg:flex-row h-screen max-w-7xl mx-auto">
    <UContainer class="w-full lg:w-7/12 h-screen flex flex-col justify-between py-12">
      <div class="flex justify-between items-center">
        <NuxtImg src="logo.svg" class="w-8 h-8" />
        <button type="button" class="bg-gradient-to-r from-[#82DBF7] to-stem-green-500 text-transparent bg-clip-text font-semibold" @click="router.push('/auth/login')">
          Login
        </button>
      </div>

      <div class="mx-4 lg:mx-10 my-16">
        <h1 class="text-4xl font-normal leading-10 mb-16">
          Connect with your team and bring your creative ideas to life.
        </h1>
        <UForm :schema="schema" :state="state" @submit="onSubmit">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-6">
              <UFormGroup label="First name" name="firstName">
                <UInput
                  v-model="state.firstName"
                  type="text"
                  size="md"
                  placeholder="First name"
                  autocomplete="off"
                />
              </UFormGroup>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <UFormGroup label="Last name" name="lastName">
                <UInput
                  v-model="state.lastName"
                  type="text"
                  size="md"
                  placeholder="Last name"
                  autocomplete="off"
                />
              </UFormGroup>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <UFormGroup label="Password" name="password">
                <UInput
                  v-model="state.password"
                  type="password"
                  size="md"
                  placeholder="Password"
                  autocomplete="off"
                />
              </UFormGroup>
            </div>
            <div class="col-span-12 lg:col-span-6">
              <UFormGroup label="Repeat Password" name="repeatPassword">
                <UInput
                  v-model="state.repeatPassword"
                  type="password"
                  size="md"
                  placeholder="Repeat Password"
                  autocomplete="off"
                />
              </UFormGroup>
            </div>
            <div class="col-span-12">
              <UFormGroup name="termsAndConditions">
                <UCheckbox v-model="state.termsAndConditions">
                  <template #label>
                    <p class="text-noble-black-200">
                      I agree with
                      <button type="button" class="bg-gradient-to-r from-[#82DBF7] to-stem-green-500 text-transparent bg-clip-text font-semibold">
                        Terms and conditions
                      </button>
                    </p>
                  </template>
                </UCheckbox>
              </UFormGroup>
            </div>
            <div class="col-span-12">
              <UButton
                type="submit"
                size="md"
                class="w-full flex justify-center !bg-stem-green-500 !text-day-blue-900 font-semibold"
                :loading="isLoading"
              >
                Create free account
              </UButton>
            </div>
          </div>
        </UForm>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-noble-black-300">
          Artificium.app © {{ new Date().getFullYear() }}
        </p>
        <button type="button" class="text-noble-black-300">
          Privacy Policy
        </button>
      </div>
    </UContainer>
    <div class="w-full lg:w-5/12 hidden lg:block">
      <NuxtImg src="/illustrations/bg-register-1-illustration.webp" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<style scoped></style>
