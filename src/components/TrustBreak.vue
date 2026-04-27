<script setup>
    
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SVG1 from '../assets/svg/1_1.svg'
import SVG2 from '../assets/svg/1_2.svg'
import SVG3 from '../assets/svg/1_3.svg'
import SVG4 from '../assets/svg/1_4.svg'


const features = [

{
     id: 1,
    title: "India’s only 100% Unbiased platform",
    subtitle: 'No ads/commissions from insurers',
    img: SVG1
},
{
     id: 1,
    title: "Guidance from Real Experts",
    subtitle: 'Not salesmen. Not call centre agents',
    img: SVG2
},
{
     id: 1,
    title: "Zero Charge. Zero Spam",
    subtitle: 'Pay nothing for the Consultation',
    img: SVG3
},{
     id: 1,
    title: "32K+ Happy Users",
    subtitle: 'Since 2020',
    img: SVG4
}
]
const current = ref(0)
const carouselRef = ref(null)
let autoTimer = null
let startX = 0
let isDragging = false
 
function goTo(index) {
  current.value = index
  resetTimer()
}
 
function next() {
  current.value = (current.value + 1) % features.length
}
 
function startTimer() {
  autoTimer = setInterval(next, 3500)
}
 
function resetTimer() {
  clearInterval(autoTimer)
  startTimer()
}
 
// Touch/swipe support
function onTouchStart(e) {
  startX = e.touches[0].clientX
  isDragging = true
}
 
function onTouchEnd(e) {
  if (!isDragging) return
  const diff = startX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 40) {
    if (diff > 0) {
      current.value = (current.value + 1) % features.length
    } else {
      current.value = (current.value - 1 + features.length) % features.length
    }
    resetTimer()
  }
  isDragging = false
}
 
onMounted(() => {
  startTimer()
  const el = carouselRef.value
  if (el) {
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
  }
})
 
onBeforeUnmount(() => {
  clearInterval(autoTimer)
  const el = carouselRef.value
  if (el) {
    el.removeEventListener('touchstart', onTouchStart)
    el.removeEventListener('touchend', onTouchEnd)
  }
})
</script>

<template>
    <section class="pb-12 pt-10 md:pb-22 lg:pb-44 px-4">
    <div
  class="
    hidden md:grid
    grid-cols-2
    xl:grid-cols-4
    gap-6
    max-w-3xl xl:max-w-6xl
    mx-auto
  "
>
  <div
    v-for="(item, index) in features"
    :key="item.id"
    class="flex flex-col items-center text-center px-5 py-4"
  >
    <img :src="item.img" alt="Feature Icon" class="mb-6" />

    <h3 class="font-bold text-gray-900 text-body-lg lg:whitespace-nowrap leading-snug mb-1">
      {{ item.title }}
    </h3>

    <p class="text-gray-500 text-body-sm leading-snug">
      {{ item.subtitle }}
    </p>
  </div>
</div>
 
    <!-- Mobile: carousel -->
    <div class="md:hidden relative overflow-hidden" ref="carouselRef">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <div
          v-for="(item) in features"
          :key="item.id"
          class="min-w-full flex flex-col items-center text-center px-4 py-8 mx-auto"
        >
          <div
            class="rounded-sm bg-[#e8f5ee] px-10 py-10 flex min-w-full flex-col items-center w-full max-w-xs mx-auto transition-all duration-300"
            :class="{ 'scale-[1.02] shadow-md': true }"
          >
            <img :src="item.img" alt="Feature Icon" class="icon-wrap mb-6" />
            <h3 class="font-bold text-gray-900 text-body-lg  lg:whitespace-nowrap mb-3">{{ item.title }}</h3>
            <p class="text-zinc-500 text-body-sm">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
 
      <!-- Scroll Indicator dots -->
      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(item, index) in features"
          :key="item.id"
          @click="goTo(index)"
          class="indicator-dot transition-all duration-300 rounded-full"
          :class="[
            current === index
              ? 'bg-[#22c55e] w-7 h-2.5'
              : 'bg-gray-300 w-2.5 h-2.5'
          ]"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>



<style  scoped>


</style>