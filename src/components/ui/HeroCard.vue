<template>
  <div
    class="
      rounded-lg overflow-hidden shadow-xl
      w-[120px] 
      sm:w-[140px] 
      md:w-[150px] 
      lg:w-[160px] 
      bg-white
    "
    :class="styleClass?.root"
  >
    <div
      class="flex flex-col items-center justify-center py-2 sm:py-2.5"
      :class="styleClass?.base"
    >
      <span
        class="
          font-extrabold text-white leading-none tracking-tight
          text-2xl
          sm:text-3xl
          md:text-3xl
          lg:text-[2rem]
        "
      >
        {{ content.value }}<sup class="text-[0.45em] align-super">*</sup>
      </span>
      <span
        class="
          text-white/80 uppercase tracking-widest font-medium mt-0.5
          text-[9px]
          sm:text-[10px]
          lg:text-[11px]
        "
      >
        {{ content.label }}
      </span>
    </div>

    <div class="flex items-center justify-center flex-1 px-2 py-2 sm:py-2.5 h-10 sm:h-12 lg:h-14">
      <p
        class="
          text-center font-semibold leading-tight
          text-xs
          sm:text-sm
          lg:text-base
        "
        :class="styleClass?.textContainer"
      >
        {{ content.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    default: () => ({ value: '', label: '', description: '' })
  },
  styleClass: {
    type: Object,
    default: () => ({ root: '', base: '', textContainer: '' })
  }
})
</script>