<template>
  <section class="px-5 sm:px-20 md:px-10 lg:px-20 pb-20 pt-10 md:pb-22 lg:pb-44 px-5 sm:px-20 md:px-10 lg:px-20">
    <!-- Desktop -->
    <div
      class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 md:max-w-2xl lg:max-w-6xl mx-auto"
    >
      <div
        v-for="item in features"
        :key="item.id"
        class="flex flex-col items-center text-center px-5 py-4"
      >
        <img :src="item.img" alt="Feature Icon" class="mb-6" />
        <h3 class="font-bold text-gray-900 text-body-lg xl:whitespace-nowrap leading-snug mb-1 lg:h-12 xl:h-auto">
          {{ item.title }}
        </h3>
        <p class="text-gray-500 text-body-sm leading-snug">
          {{ item.subtitle }}
        </p>
      </div>
    </div>

    <!-- Mobile -->
    <div class="md:hidden relative overflow-hidden" ref="carouselRef">
        <h2 class="text-heading-lg text-black text-center mb-5">Why trust Beshak?</h2>
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${current * 50}%)` }"
      >
        <div
          v-for="item in features"
          :key="item.id"
          class="w-1/2 flex-shrink-0 flex flex-col items-center text-center px-1 "
        >
          <div
            class="rounded-md bg-primary-100 px-3 py-5 flex flex-col items-center w-full transition-all duration-300 text-black"
          >
            <img :src="item.img" alt="Feature Icon" class="icon-wrap mb-4 w-12 h-12" />
            <h3 class="font-bold text-gray-900 text-sm tracking-tighter mb-2">{{ item.title }}</h3>
            <p class="text-xs">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-2 mt-4">
        <button
          v-for="index in totalPages"
          :key="index"
          @click="goToPage(index - 1)"
          class="transition-all duration-300 rounded-full"
          :class="[
            current === (index - 1) * 2
              ? 'bg-primary-500 w-5 h-2'
              : 'bg-[#D3DBD3] w-5 h-2'
          ]"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import SVG1 from '../assets/svg/1_1.svg'
import SVG2 from '../assets/svg/1_2.svg'
import SVG3 from '../assets/svg/1_3.svg'
import SVG4 from '../assets/svg/1_4.svg'

const features = [
  { id: 1, title: "India's only 100% Unbiased platform", subtitle: 'No ads/commissions from insurers', img: SVG1 },
  { id: 2, title: "Guidance from Real Experts", subtitle: 'Not salesmen. Not call centre agents', img: SVG2 },
  { id: 3, title: "Zero Charge. Zero Spam", subtitle: 'Pay nothing for the Consultation', img: SVG3 },
  { id: 4, title: "32K+ Happy Users", subtitle: 'Since 2020', img: SVG4 }
]

const current = ref(0)
const carouselRef = ref(null)
let autoTimer = null

const itemsPerPage = 2
const totalPages = computed(() => Math.ceil(features.length / itemsPerPage))

function next() {
  const nextIndex = current.value + itemsPerPage
  current.value = nextIndex >= features.length ? 0 : nextIndex
}

function goToPage(pageIndex) {
  current.value = pageIndex * itemsPerPage
  resetTimer()
}

function startTimer() {
  autoTimer = setInterval(next, 2500)
}

function resetTimer() {
  clearInterval(autoTimer)
  startTimer()
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  clearInterval(autoTimer)
})
</script>
