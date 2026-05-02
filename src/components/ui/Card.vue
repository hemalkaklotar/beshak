<template>
    <div class="
          flex flex-row items-start gap-5 p-5 
          md:flex-col md:items-start md:gap-4
          md:text-center
          md:px-8 md:py-10
          xl:py-[60px] xl:px-10
          shadow-card
          md:transition-shadow md:duration-300
          rounded-md
          h-full w-full
        ">

          <!-- Icon -->
          <div class="flex-shrink-0 mt-1 md:mt-0 borde md:w-full md:flex md:justify-center">
            <img
              v-if="content.img"
              :src="content.img"
              :alt="content.title"
              class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16  object-contain"
            />
          </div>

          <!-- Text -->
          <div>
            <h3 class="
              font-bold text-black mb-2 xl:mb-2
              text-heading-md xl:text-display-sm
            ">
              {{ content.title }}
            </h3>
            <p class="
              text-black
              text-body-md xl:text-body-lg
            ">
              {{ content.subtitle }}
            </p>
          </div>

        </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({ title: '', subtitle: '', img: '' })
  }
})
</script>

<style lang="scss" scoped>

</style>