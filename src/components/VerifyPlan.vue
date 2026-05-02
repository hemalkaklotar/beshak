<template>
    <section class="bg-gradient-primary">
        <div class="max-w-[1440px] mx-auto px-10 lg:px-5 xl:px-10 pt-12 pb-16 lg:py-20">
            <h2 class="text-heading-lg xl:text-display-md xl:text-[40px] text-white mb-4 xl:mb-6 text-center font-bold">Carefully Verified Plans. Experts Recommend.</h2>
            
            <p class='text-white text-body-md xl:text-heading-md  mb-10 lg:mb-16 text-center md:max-w-xl mx-auto '>Out of 40+ plans reviewed only 4 made the cut. Every figure is real,
                post-tax, and independently verified. No inflated projections.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 xl:gap-6 mx-auto">
                <div v-for="plan in plans" :key="plan.id" class="cursor-pointer">
                       <CardPlan
                        :content="plan"
                    />
                </div>
            </div>
            <p class='text-white !font-bold text-body-md xl:text-label-md my-10 lg:mt-16 lg:mb-10 text-center lg:max-w-xl mx-auto'>
                Each plan comes with a basic life cover (usually around 10x your annual premium). It's not a replacement for term insurance, but it's there.
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center text-white gap-4">
                <button class="w-full md:w-auto bg-white rounded-md gap-2 py-3 px-5  flex justify-center items-center border border-white  hover:bg-gray-100 hover:border-gray-300 hover:-translate-y-0.5">
                    <img :src="VC" alt="" class="w-6 h-5">
                    <span class="text-body-md xl:text-label-md !font-semibold text-black">Talk to an Expert</span>

                </button>
                <button class="w-full md:w-auto  rounded-md gap-2 py-3 px-5  flex justify-center items-center border border-white  hover:bg-gray-100 hover:border-gray-300 hover:-translate-y-0.5"> 
                    <img :src="WP" alt="" class="w-6 h-6">
                    <span class="text-body-md xl:text-label-md !font-semibold text-white">Chat with Us</span>
                </button>

            </div>
        </div>
    </section>
</template>

<script setup>
import VC from '../assets/svg/vc.svg'
import WP from '../assets/svg/whatsapp_1.svg'
import hdfc from '../assets/hdfcLife.png'
import discount from '../assets/svg/discount.svg'
import CardPlan from './ui/CardPlan.vue'
const plans = [
    {
        id: 1,
        logo: hdfc,
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.2%',
        rateDescription: 'Guaranteed return p.a.',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '15 year',
        lockInType:'lock-in period',
        minAmount: '₹1,00,000',
        durationType:'min/year',
    },
     {
        id: 1,
        logo: hdfc,
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.2%',
        rateDescription: 'Guaranteed return p.a.',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '15 year',
        lockInType:'lock-in period',
        minAmount: '₹1,00,000',
        durationType:'min/year',
    },
     {
        id: 2,
        logo: hdfc,
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.0%',
        rateDescription: 'Guaranteed return p.a.',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '12 year',
        lockInType:'lock-in period',
        minAmount: '₹75,000',
        durationType:'min/year',
    },
     {
        id: 3,
        logo: hdfc,
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '5.9%',
        rateDescription: 'Guaranteed return p.a.',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '10 year',
        lockInType:'lock-in period',
        minAmount: '₹50,000',
        durationType:'min/year',
    },
]
</script>

<style scoped>

</style>