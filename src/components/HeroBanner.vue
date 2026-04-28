<script setup>
import { ref } from 'vue'
import power from '../assets/svg/power.svg'

import heroImg from '../assets/hero.png'
import RatingImg from '../assets/rating.png'
import GoogleImg from '../assets/google.svg'

</script>

<template>
    <section class="min-h-screen lg:h-screen flex items-center  bg-gradient-light px-5 sm:px-20 md:px-10 lg:px-20">
        <div
            class="w-full flex flex-col  justify-start md:flex-row lg:justify-between lg:items-center md:gap-4 lg:gap-8  max-w-[1440px] mx-auto">
            <!-- left part -->
            <div class="pt-[100px] text-center md:text-left pb-10 lg:py-28  w-full lg:max-w-[600px] flex flex-col">
                <h2 class="uppercase text-purple font-semibold tracking-wide xl:mb-2"> Guaranteed Savings Plans</h2>
                <h1 class="text-display-md xl:text-display-lg font-bold text-zinc-900">
                    Earn more than FDs.
                    <span class="bg-gradient-primary bg-clip-text text-transparent">
                        Guaranteed!
                    </span>
                </h1>
                <p class="text-body-md xl:text-heading-md text-zinc-900 mt-3 mb-10 lg:mt-5  !font-normal">
                    Life insurance plans with excellent returns from India's Top Insurers. 100% Tax Free. Consult an
                    Expert & understand whether it fits your needs.
                </p>
                <div class="flex flex-col lg:flex-row items-center lg:gap-10">

                    <button class="w-full  bg-gradient-primary shadow-md text-white  px-6 py-2 sm:px-6  rounded-md">
                        <p class="text-body-lg xl:text-heading-lg font-semibold">
                            Talk to an Expert
                        </p>
                        <div class="flex items-center gap-1 mt-1 justify-center">
                            <img :src="power" alt="Power">
                            <p class=" text-caption lg:text-body-sm font-regular">
                               Limited slots available
                            </p>
                        </div>
                    </button>
                    <div class="w-full flex justify-center xl:justify-start items-center mt-5 lg:mt-0 gap-3 text-zinc-900">
                        <div class="">
                            <img :src="GoogleImg" alt="google" class="w-6 h-6 lg:w-full lg:h-auto object-contain" />
                        </div>
                        <div class=" lg:w-auto flex flex-row items-center lg:flex-col">
                            <div class="flex items-center">
                                <span class="inline-block text-body-md lg:text-body-lg font-bold">4.9</span>
                                <img :src="RatingImg" alt="Rating" class="ml-1 w-[80px] lg:w-full h-auto object-contain" />
                            </div>
                            <p class="text-caption text-body-sm ms-1 lg:ms-0">Rating on Google</p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- right part -->
            <div class="
           mt-5 lg:mt-0
           mx-auto
          w-full
          lg:max-w-[520px]
          relative 
        ">
                <div class="absolute -top-0  left-0  lg:-top-10  rounded-md w-24 sm:w-36 md:w-28 lg:w-36 text-center shadow-card overflow-hidden ">
                    <div class="text-white py-2 sm:p-3 text-center bg-gradient-primary">
                            <div class="inline-flex flex-col items-center">
                                <span class="text-display-sm lg:text-display-md font-bold">6.1%</span>
                                <span class="text-label-sm tracking-wide">(Tax Free)</span>
                            </div>
                    </div>
                        <p class="text-body-sm lg:text-body-lg font-semibold text-primary-500 bg-white py-2 px-2 sm:p-3">Guarantee Savings Plans</p>
                </div>

                <div class="absolute top-1/2 right-0 -translate-y-1/2  rounded-md  w-24 sm:w-36 md:w-28 lg:w-36 text-center shadow-card overflow-hidden ">
                    <div class="text-white py-2 sm:p-3 text-center bg-gradient-zinc">
                            <div class="inline-flex flex-col items-center">
                                <span class="text-display-sm lg:text-display-md font-bold">4.6 %</span>
                                <span class="text-label-sm tracking-wide">(After Tax)</span>
                            </div>
                    </div>
                        <p class="text-body-sm lg:text-body-lg font-semibold text-zinc-500 bg-white py-2 px-2 sm:p-3">Fixed Deposit</p>
                </div>
                <img :src="heroImg" alt="Hero" class="w-full sm:w-[560px] sm:h-[520px]  xl:w-auto xl:h-auto sm:object-contain mt-4 lg:mt-0 lg:mx-auto " />
            </div>

        </div>
    </section>
</template>
