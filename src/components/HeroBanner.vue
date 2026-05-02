<script setup>
import { ref } from 'vue'
import power from '../assets/svg/power.svg'

import heroImg from '../assets/hero.png'
import RatingImg from '../assets/rating.png'
import GoogleImg from '../assets/google.svg'
import HeroCard from './ui/HeroCard.vue'

</script>

<template>
    <section
        class="min-h-screen md:min-h-0 lg:h-screen flex items-center px-5 sm:px-20 md:px-10 lg:px-20 bg-gradient-light">
        <div
            class="pt-[100px] w-full flex flex-col  justify-start md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-8 max-w-md sm:max-w-lg md:max-w-[1440px] mx-auto">
            <!-- left part -->
            <div class="
                    text-center md:text-left 
                    pb-10 lg:py-28
                    w-full 
                    md:flex-1
                    lg:max-w-[600px]
                    flex flex-col
            ">
                <h2 class="uppercase text-xs sm:text-base text-purple font-semibold tracking-wide xl:mb-2"> Guaranteed
                    Savings Plans</h2>
                <h1 class="text-display-md sm:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold text-zinc-900">
                    Earn more than FDs.
                    <span class="bg-gradient-primary bg-clip-text text-transparent">
                        Guaranteed!
                    </span>
                </h1>
                <p class="text-body-md sm:text-base xl:text-lg text-zinc-900 mt-3 mb-10 lg:mt-5  !font-normal">
                    Life insurance plans with excellent returns from India's Top Insurers. 100% Tax Free. Consult an
                    Expert & understand whether it fits your needs.
                </p>
                <div class="flex flex-col lg:flex-row items-center lg:gap-10">

                    <button class="w-full  bg-gradient-primary shadow-md text-white  px-6 py-2 sm:px-6  rounded-md">
                        <p class="text-base leading-4 xl:text-heading-lg font-semibold">
                            Talk to an Expert
                        </p>
                        <div class="flex items-center gap-1 mt-2 justify-center">
                            <img :src="power" alt="Power">
                            <p class=" text-caption lg:text-body-sm font-regular">
                                Limited slots available
                            </p>
                        </div>
                    </button>
                    <div
                        class="w-full flex justify-center xl:justify-start items-center mt-5 lg:mt-0 gap-3 text-zinc-900">
                        <div class="">
                            <img :src="GoogleImg" alt="google" class="w-6 h-6 lg:w-full lg:h-auto object-contain" />
                        </div>
                        <div class=" lg:w-auto flex flex-row items-center lg:flex-col">
                            <div class="flex items-center">
                                <span class="inline-block text-body-md lg:text-body-lg font-bold">4.9</span>
                                <img :src="RatingImg" alt="Rating"
                                    class="ml-1 w-[80px] lg:w-full h-auto object-contain" />
                            </div>
                            <p class="text-body-sm ms-1 lg:ms-0">Rating on Google</p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- right part -->
            <div class="
    relative
    mt-10 lg:mt-0
    mx-auto
    w-full
    max-w-[320px]
    sm:max-w-[380px]
    lg:max-w-[420px]
    xl:max-w-[520px]
    aspect-square
  ">
                <img :src="heroImg" alt="Hero" class="w-full h-full object-cover object-top" />

                <HeroCard :content="{
                    value: '6.9%',
                    label: 'Tax Free',
                    description: 'Guarantee Savings Plans'
                }" :styleClass="{
                    root: 'absolute -top-3 -left-2 sm:-top-4 sm:-left-3 lg:-top-5 lg:-left-4 z-10',
                    base: 'bg-gradient-primary',
                    textContainer: 'text-primary-600'
                }" />

                <HeroCard :content="{
                    value: '4.6%',
                    label: 'After Tax',
                    description: 'Fixed Deposit'
                }" :styleClass="{
                    root: 'absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3 lg:-right-4 z-10',
                    base: 'bg-gradient-zinc',
                    textContainer: 'text-zinc-500'
                }" />
            </div>
        </div>
    </section>
</template>
