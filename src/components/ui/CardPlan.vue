<template>
     <div class="bg-white rounded-2xl overflow-hidden flex flex-col">

                            <!-- Top: Logo area -->
                            <div class="flex justify-center pt-8 pb-4 px-[30px]">
                                <div
                                    class="logo-pill flex items-center gap-2 px-2 py-1.5 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                                    <img v-if="content.logo" :src="content.logo" alt="Logo" class="">
                                </div>
                            </div>

                            <!-- Brand + Plan name -->
                            <div class="text-center px-7">
                                <p class="font-bold text-black text-body-lg">{{ content.brand }}</p>
                                <p class=" font-regular text-black text-body-lg">{{ content.plan }}</p>
                            </div>

                            <!-- Rate -->
                            <div class="text-center px-7 my-4 ">
                                <p class="text-display-lg xl:text-display-md xl:text-[44px] text-primary-600 leading-none"
                                    >
                                    {{ content.rate }}
                                </p>
                                <p class="text-black mt-1 text-body-md xl:text-body-sm">Guaranteed return p.a.</p>
                            </div>

                            <!-- Tag pill -->
                            <div class="flex items-center justify-center">
                                <div class="flex items-center justify-center gap-1 py-1 px-3 rounded-full bg-primary-200">

                                    <img :src="discount" alt="">
                                    <span
                                    class="uppercase text-label-sm font-bold text-primary-600">
                                    {{ content.tag }}
                                </span>
                            </div>
                            </div>

                            <!-- Divider -->
                            <div class="mx-3 mt-8 border-t border-bg-400"></div>

                            <!-- Bottom: lock-in + min amount -->
                            <div class="flex justify-between items-end p-5">
                                <div>
                                    <p class="text-black text-body-lg xl:text-body-lg !font-bold">{{ content.lockIn }}</p>
                                    <p class="text-black text-[12px] xl:text-label-sm -mt-1">lock-in period</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-black text-body-lg  xl:text-body-lg  !font-bold">{{ content.minAmount }}</p>
                                    <p class="text-black text-[12px] xl:text-label-sm -mt-1">min/year</p>
                                </div>
                            </div>

                        </div>
</template>

<script setup>
defineProps({
   content: {
     type: Object,
     required: true,
     default: () => ({
       logo: '',
       brand: '',
       plan: '',
       rate: '',
       tag: '',
       lockIn: '',
       minAmount: ''
     })
   },
   
})
</script>

<style lang="scss" scoped>

</style>