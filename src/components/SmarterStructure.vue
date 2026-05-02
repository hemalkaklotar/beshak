<template>
  <section class="feature-grid-section max-w-[1440px] mx-auto px-5 sm:px-20 md:px-10 lg:px-20 mb-32">
    <h2 class="text-heading-lg xl:text-display-md text-black mb-10 text-center">Not just better returns.
A smarter structure.</h2>
    <div class="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-5
      md:gap-7
      lg:gap-8
     mx-auto
    ">

      <div
        v-for="(item, index) in features"
        :key="item.id"
        class="feature-card"
      >
        <Card :content="item" />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from './ui/Card.vue'
import SVG1 from '../assets/svg/2_1.svg'
import SVG2 from '../assets/svg/2_2.svg'
import SVG3 from '../assets/svg/2_3.svg'
import SVG4 from '../assets/svg/2_4.svg'
import SVG5 from '../assets/svg/2_5.svg'
import SVG6 from '../assets/svg/2_6.svg'

const features = [
  {
    id: 1,
    title: 'Locked in for 10-15 years',
    subtitle: 'Your future self will thank you for not touching this money. The rate stays the same, even if FD rates drop next year.',
    img: SVG1,

  },
  {
    id: 2,
    title: 'Curated, Not Dumped',
    subtitle: 'Every plan here cleared our review. We looked at 40+ GSPs and rejected more than we picked.', 
    img: SVG2,
  },
  {
    id: 3,
    title: 'Guaranteed Returns',
    subtitle: 'Up to 6.9%+ p.a. Not market-linked. Not dependent on fund performance. Your rate is locked from the day you invest.',
    img: SVG3,
  },
  {
    id: 4,
    title: 'Life Cover Included',
    subtitle: 'Each plan includes a basic life cover, up to 10x the annual premium. Not a replacement for term insurance, but adds a level of protection.',
    img: SVG4,
  },
  {
    id: 5,
    title: 'Tax-Free Returns',
    subtitle: 'Your maturity amount is tax free, so you receive the full payout. No deductions, unlike with fixed deposits.',
    img: SVG5,
  },
  {
    id: 6,
    title: 'Flexible Payment Plans',
    subtitle: 'Choose from monthly, half-yearly, yearly, or one-time payments, with policy terms aligned to your goals.',
    img: SVG6,
  }
]
</script>
<style scoped>
</style>
