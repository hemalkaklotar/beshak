<script setup>
const chartImg = 'https://placehold.co/420x420/e2f5ea/16a34a?text=Portfolio+Chart'
const statsImg = 'https://placehold.co/420x300/e2f5ea/16a34a?text=Stats+Graphic'

const stats = [
  { value: '40+', label: 'PLANS\nREVIEWED' },
  { value: '0', label: 'INFLATED\nPROJECTIONS' },
]
</script>

<template>
  <section class="flex items-center justify-center mt-32 lg:mb-10">
   
    <div class="bg-primary-100 pt-[60px] px-5 sm:px-20  md:p-16 lg:py-18 md:px-48 lg:px-20 xl:px-10 xl:rounded-xl">
      <div class="flex flex-col  md:items-center lg:flex-row lg:justify-center md:gap-12 lg:gap-40 xl:max-w-[1040px]">
        <div class="md:flex-1 text-center lg:text-left">
          <h2 class=" text-black text-heading-lg lg:text-display-sm xl:text-[40px] mb-2 lg:mb-4">
            Build stability<br class="hidden" /> as you grow
          </h2>
          <p class="text-primary-600 font-bold text-body-lg lg:text-heading-sm xl:text-heading-lg  mb-6">
            Assuming you're 30. Roughly 30% of your money should be in something stable.
          </p>
          <p class=" text-black text-body-md lg:text-body-md xl:text-body-lg xl:max-w-2xl mx-auto md:mx-0">
            You're probably heavy on equity. Mutual funds, stocks, maybe some crypto. That's fine for growth.
            But your portfolio needs a stable base too. A general rule: invest a percentage equal to your age
            in low-risk instruments. Guaranteed Savings Plans fit that slot perfectly. Not instead of your SIPs.
            Alongside them.
          </p>
        </div>

        <!-- Right: chart image -->
        <div class="mt-9 md:mt-0 flex justify-center md:justify-end md:flex-shrink-0">
          <div
            class="w-[200px] h-[200px] sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full  bg-gradient-primary opacity-75 flex items-center justify-center">
          </div>
        </div>

      </div>

      <div class="rounded-xl lg:mt-[120px] xl:max-w-[1040px] ">
        <div class="flex flex-col-reverse  lg:flex-row md:items-start  lg:justify-between lg:items-center md:gap-12 lg:gap-16 pb-20 lg:pb-0">

          <!-- Left: "Only 4" card + stats grid -->
          <div class="flex flex-col items-center gap-4 md:flex-shrink-0 xl:w-[380px] mx-auto">

            <!-- "Only 4 made the cut" tile -->
            <div class="sm:w-64 lg:w-[220px] bg-gradient-primary rounded-xl overflow-hidden text-center text-white">
              <div class="px-4 py-2 lg:py-5">
                <p class="text-body-md sm:text-body-lg lg:text-label-md font-semibold uppercase text-green-200 ">Only</p>
                <p class="text-heading-md sm:text-heading-lg lg:text-[44px] leading-relaxed  lg:my-4">4</p>
                <p class="text-body-md sm:text-body-lg  lg:text-label-md font-semibold uppercase text-green-200 ">Made the cut</p>
              </div>
            </div>

            <!-- Stats: 40+ and 0 -->
            <div class="w-full grid grid-cols-2 gap-4">
              <div v-for="stat in stats" :key="stat.value" 
              class="bg-white rounded-xl py-4  md:py-5 px-4 text-center md:w-44 lg:w-[180px]">
                <p class="text-black text-heading-md  sm:text-heading-lg lg:text-[32px] lg:mb-1 font-bold">{{ stat.value }}</p>
                <span class="text-black text-body-sm sm:text-body-md  lg:text-label-md !font-semibold leading-relaxed">{{ stat.label }}</span>
              </div>
            </div>

          </div>

          <!-- Right: text + image -->
          <div class="mt-20 lg:mt-0 w-full md:px-0 xl:min-w-[560px] text-center lg:text-left">
            <h2 class="text-black text-heading-lg lg:text-display-sm xl:text-[40px] mb-2 lg:mb-4">
              Handpicked,<br class="hidden" /> not hard sold
            </h2>
            <p class="text-primary-600 font-bold text-body-lg lg:text-heading-sm xl:text-heading-lg lg:max-w-lg mb-6">
              We know Guaranteed Savings Plans get mis-sold. That's exactly why we built this.
            </p>
            <p class="text-black text-body-md lg:text-body-md xl:text-body-lg xl:max-w-2xl mx-auto md:mx-0 mb-6">
              Insurance agents routinely push Guaranteed Savings Plans with inflated return projections and buried
              lock-ins. We've seen it for years. Every plan here was reviewed by our team for real, post-tax returns,
              no IRR manipulation, no plans designed for the distributor's benefit over yours. That's the Beshak
              standard.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>

</template>