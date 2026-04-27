<script setup>
import { ref } from 'vue'
import heroImg from '../assets/hero.png'
import RatingImg from '../assets/rating.png'
import GoogleImg from '../assets/google.svg'


const count = ref(0)
</script>

<template>
    <section class="min-h-screen lg:h-screen flex items-center  bg-gradient-light  px-5 sm:px-10 lg:px-20">
        <div
            class="w-full flex flex-col lg:flex-row justify-between  items-center gap-8 md:gap-12 lg:gap-[132px]  max-w-[1440px] mx-auto">


            <!-- left part -->
            <div class=" py-28  w-full lg:max-w-[600px] flex flex-col gap-4">
                <h2 class="uppercase text-purple font-semibold"> Guaranteed Savings Plans</h2>
                <h1 class="text-display-lg font-bold text-zinc-900">
                    Earn more than FDs.
                    <span class="bg-gradient-primary bg-clip-text text-transparent">
                        Guaranteed!
                    </span>
                </h1>
                <p class="text-heading-md  text-zinc-900 mt-5 mb-10 !font-normal">
                    Life insurance plans with excellent returns from India's Top Insurers. 100% Tax Free. Consult an
                    Expert & understand whether it fits your needs.
                </p>
                <div class="flex flex-col md:flex-row items-center gap-10">

                    <button class="bg-gradient-primary shadow-md text-white px-2 sm:px-6 py-3 rounded-md">
                        <p class=" text-heading-lg font-semibold">
                            Talk to an Expert
                        </p>
                        <p class=" text-body-sm font-regular">
                            Honest Advice. No charge. No spam!
                        </p>
                    </button>
                    <div class="flex items-center gap-3 text-zinc-900">
                        <div>
                            <img :src="GoogleImg" alt="google" class="w-full h-auto object-contain" />

                        </div>
                        <div class="flex flex-col">
                            <div class="flex ">
                                <span class="inline-block text-body-lg font-bold">4.9</span>
                                <!-- img -->
                                <img :src="RatingImg" alt="Rating" class="ml-1 w-full h-auto object-contain" />

                            </div>
                            <p class="text-caption ">Rating on Google</p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- right part -->
            <div class="
          w-full
          lg:max-w-[520px]
          relative 
        ">
                <div class="absolute -top-16 md:-top-10 -left-4 rounded-md  max-w-32 md:max-w-36 text-center shadow-card overflow-hidden animate-float-y">
                    <div class="text-white p-1 sm:p-3 text-center bg-gradient-primary">
                        <p class="text-display-md font-bold">6.1% </p>
                        <span class="text-label-sm font-normal tracking-wide"> (Tax Free)</span>
                    </div>
                
                        <p class="text-body-lg text-primary-500 bg-white p-1 sm:p-3">Guarantee Savings Plans</p>
                </div>
                <div class="absolute top-1/2 right-0 -translate-y-1/2  rounded-md max-w-32  md:max-w-36 text-center shadow-card overflow-hidden animate-float-x">

                    <div class="text-white p-1 sm:p-3 text-center bg-gradient-zinc">
                        <p class="text-display-md font-bold">4.6 % </p>
                        <span class="text-label-sm font-normal tracking-wide uppercase"> (After Tax)</span>
                    </div>
                
                        <p class="text-body-lg text-primary-500 bg-white p-1 sm:p-3">Fixed Deposit</p>
                </div>
                <img :src="heroImg" alt="Hero" class="w-full h-auto object-contain" />
            </div>

        </div>
    </section>
</template>
