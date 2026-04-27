<script setup>
// Replace these with your actual image imports
// import chartImg from '../assets/images/portfolio-chart.png'
// import statsImg from '../assets/images/stats-graphic.png'

// Using placeholder URLs for demo — swap with your real imports
const chartImg = 'https://placehold.co/420x420/e2f5ea/16a34a?text=Portfolio+Chart'
const statsImg = 'https://placehold.co/420x300/e2f5ea/16a34a?text=Stats+Graphic'

const stats = [
  { value: '40+', label: 'PLANS\nREVIEWED' },
  { value: '0',   label: 'INFLATED\nPROJECTIONS' },
]
</script>

<template>
    <section class="flex items-center justify-center mt-32">

  <div class="bg-primary-100 m-5 p-8 md:p-16 lg:p-22 md:rounded-xl">

    <div class="md:p-8 lg:p-10">
      <div class="flex flex-col lg:flex-row md:items-center md:gap-12 lg:gap-16">

        <!-- Left: text -->
        <div class="md:flex-1 text-center md:text-left">
          <h2 class="font-black text-black text-display-md mb-4">
            Build stability<br class="hidden" /> as you grow
          </h2>
          <p class="text-primary-700 font-bold text-heading-lg md:max-w-lg mb-5">
            Assuming you're 30. Roughly 30% of your money should be in something stable.
          </p>
          <p class="text-black text-body-lg max-w-lg mx-auto md:mx-0">
            You're probably heavy on equity. Mutual funds, stocks, maybe some crypto. That's fine for growth.
            But your portfolio needs a stable base too. A general rule: invest a percentage equal to your age
            in low-risk instruments. Guaranteed Savings Plans fit that slot perfectly. Not instead of your SIPs.
            Alongside them.
          </p>
        </div>

        <!-- Right: chart image -->
        <div class="mt-8 md:mt-0 flex justify-center md:justify-end md:flex-shrink-0">
          <img
            :src="chartImg"
            alt="Portfolio allocation chart"
            class="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-xl"
          />
        </div>

      </div>
    </div>

    <!-- ─────────────────────────────────────────────
         SECTION 2 — Handpicked, not hard sold
    ───────────────────────────────────────────── -->
    <div class="rounded-xl  md:p-8 lg:p-10">
      <div class="flex flex-col lg:flex-row md:items-start md:gap-12 lg:gap-16">

        <!-- Left: "Only 4" card + stats grid -->
        <div class="flex flex-col items-center lg:items-start gap-4 md:flex-shrink-0 md:w-80 lg:w-[380px] mx-auto">

          <!-- "Only 4 made the cut" tile -->
          <div class="w-full bg-gradient-primary rounded-xl overflow-hidden text-center text-white">
            <div class="px-6 pt-7 pb-6">
              <p class="text-body-lg font-bold tracking-[0.2em] uppercase text-green-200 mb-1">Only</p>
              <p class="text-display-md font-black leading-none">4</p>
              <p class="text-body-lg font-bold tracking-[0.2em] uppercase text-green-200 mt-2">Made the cut</p>
            </div>
          </div>

          <!-- Stats: 40+ and 0 -->
          <div class="w-full grid grid-cols-2 gap-3">
            <div
              v-for="stat in stats"
              :key="stat.value"
              class="bg-white rounded-xl p-4 text-center shadow-sm"
            >
              <p class="font-black text-body-md ">{{ stat.value }}</p>
              <span class="text-gray-400 text-[10px] md:text-[16px] font-bold">{{ stat.label }}</span>
            </div>
          </div>

        </div>

        <!-- Right: text + image -->
        <div class="mt-8 md:mt-0 flex-1 text-center md:text-left">
          <h2 class="font-black text-gray-900 text-display-md mb-4">
            Handpicked,<br class="hidden" /> not hard sold
          </h2>
          <p class="text-primary-700 font-bold text-display-sm lg:max-w-lg mb-5">
            We know Guaranteed Savings Plans get mis-sold. That's exactly why we built this.
          </p>
          <p class="text-gray-700 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-6">
            Insurance agents routinely push Guaranteed Savings Plans with inflated return projections and buried
            lock-ins. We've seen it for years. Every plan here was reviewed by our team for real, post-tax returns,
            no IRR manipulation, no plans designed for the distributor's benefit over yours. That's the Beshak standard.
          </p>
        </div>

      </div>
    </div>

  </div>
    </section>

</template>