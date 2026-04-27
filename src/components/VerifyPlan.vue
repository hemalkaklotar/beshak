<template>
    <section class="bg-gradient-primary">
        <div class="max-w-[1440px] mx-auto px-5 py-16 lg:py-20">
            <h2 class="text-display-md text-white mb-10 text-center">Carefully Verified Plans. Experts Recommend.</h2>
            
            <p class='text-white text-label-md mb-6 text-center md:max-w-xl mx-auto lg:mb-10'>Out of 40+ plans reviewed only 4 made the cut. Every figure is real,
                post-tax, and independently verified. No inflated projections.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <div v-for="plan in plans" :key="plan.id" class="flip-card h-[500px] cursor-pointer">
                    <div class="flip-card-inner">

                        <!-- FRONT -->
                        <div class="flip-card-front bg-white rounded-2xl overflow-hidden flex flex-col">

                            <!-- Top: Logo area -->
                            <div class="flex justify-center pt-8 pb-4 px-6">
                                <div
                                    class="logo-pill flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                                    <span
                                        class="logo-square w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-black"
                                        :style="{ backgroundColor: plan.accentColor }">
                                        {{ plan.logoText.charAt(0) }}
                                    </span>
                                    <span class="font-black text-sm tracking-tight" :style="{ color: plan.logoColor }">
                                        {{ plan.logoText }}
                                    </span>
                                </div>
                            </div>

                            <!-- Brand + Plan name -->
                            <div class="text-center px-6 pb-2">
                                <p class="font-bold text-black text-body-lg">{{ plan.brand }}</p>
                                <p class="text-black font-regular text-body-lg">{{ plan.plan }}</p>
                            </div>

                            <!-- Rate -->
                            <div class="text-center px-6 pt-3 pb-1">
                                <p class="text-display-md font-black leading-none"
                                    style="color: #16a34a; letter-spacing: -2px;">
                                    {{ plan.rate }}
                                </p>
                                <p class="text-black text-body-sm">Guaranteed return p.a.</p>
                            </div>

                            <!-- Tag pill -->
                            <div class="flex justify-center mt-4 px-6 ">
                                <span
                                    class="flex items-center gap-1.5 bg-green-500 border border-green-200 text-green-700  font-bold text-[10px] md:text-label-md tracking-wider px-2 lg:px-4 py-2 rounded-full uppercase">
                                    <svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="7" stroke="#16a34a" stroke-width="1.5" />
                                        <path d="M5 8.5L7 10.5L11 6" stroke="#16a34a" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {{ plan.tag }}
                                </span>
                            </div>

                            <!-- Divider -->
                            <div class="mx-6 mt-32 border-t border-bg-400"></div>

                            <!-- Bottom: lock-in + min amount -->
                            <div class="flex justify-between items-end px-7 py-5 mt-auto">
                                <div>
                                    <p class="font-black text-gray-900 text-lg leading-tight">{{ plan.lockIn }}</p>
                                    <p class="text-gray-400 text-xs mt-0.5">lock-in period</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-black text-gray-900 text-lg leading-tight">{{ plan.minAmount }}</p>
                                    <p class="text-gray-400 text-xs mt-0.5">min/year</p>
                                </div>
                            </div>

                        </div>

                        <!-- BACK -->
                        <div class="flip-card-back bg-white rounded-2xl overflow-hidden flex flex-col px-7 py-8"
                            :style="{ borderTop: `4px solid ${plan.accentColor}` }">

                            <p class="font-black text-gray-900 text-lg mb-5 leading-snug">{{ plan.back.highlight }}</p>

                            <ul class="space-y-3 flex-1">
                                <li v-for="(point, i) in plan.back.points" :key="i"
                                    class="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                                    <span
                                        class="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                                        :style="{ backgroundColor: plan.accentColor + '22' }">
                                        <svg class="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5.5L4 7.5L8 3" :stroke="plan.accentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    {{ point }}
                                </li>
                            </ul>

                            <div class="mt-6 pt-4 border-t border-gray-100">
                                <button
                                    class="w-full py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                                    :style="{ backgroundColor: plan.accentColor }">
                                    View Plan Details →
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <p class='text-white text-label-md font-bold my-4 lg:mt-16 lg:mb-10 text-center lg:max-w-xl mx-auto'>
                Each plan comes with a basic life cover (usually around 10x your annual premium). It's not a replacement for term insurance, but it's there.
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center text-white gap-4">
                <button class="w-full md:w-auto bg-white rounded-md gap-2 py-3 px-5 flex justify-center border border-white  hover:bg-gray-100 hover:border-gray-300 hover:-translate-y-0.5">
                    <img :src="VC" alt="">
                    <span class="text-label-md text-black">Talk to an Expert</span>

                </button>
                <button class="w-full md:w-auto rounded-md gap-2 py-3 px-5 flex justify-center border border-white transition-all duration-300 ease-in-out
    hover:opacity-90 hover:-translate-y-0.5"> 
                    <img :src="WP" alt="">
                    <span class="text-label-md text-white">Chat with Us</span>
                </button>

            </div>
        </div>
    </section>
</template>

<script setup>
import VC from '../assets/svg/vc.svg'
import WP from '../assets/svg/whatsapp_1.svg'


const plans = [
    {
        id: 1,
        logo: null,
        logoText: 'HDFC Life',
        logoColor: '#003087',
        accentColor: '#e31837',
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.2%',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '15 year',
        minAmount: '₹1,00,000',
        back: {
            highlight: 'Why Sanchay Plus?',
            points: [
                'Guaranteed returns unaffected by market volatility',
                'Life cover up to 10x annual premium included',
                'Flexible payout options: lump sum or income',
                'Available for ages 3 to 60 years',
                'Trusted by 5 crore+ policyholders across India',
            ]
        }
    },
    {
        id: 1,
        logo: null,
        logoText: 'HDFC Life',
        logoColor: '#003087',
        accentColor: '#e31837',
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.2%',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '15 year',
        minAmount: '₹1,00,000',
        back: {
            highlight: 'Why Sanchay Plus?',
            points: [
                'Guaranteed returns unaffected by market volatility',
                'Life cover up to 10x annual premium included',
                'Flexible payout options: lump sum or income',
                'Available for ages 3 to 60 years',
                'Trusted by 5 crore+ policyholders across India',
            ]
        }
    },
    {
        id: 1,
        logo: null,
        logoText: 'HDFC Life',
        logoColor: '#003087',
        accentColor: '#e31837',
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.2%',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '15 year',
        minAmount: '₹1,00,000',
        back: {
            highlight: 'Why Sanchay Plus?',
            points: [
                'Guaranteed returns unaffected by market volatility',
                'Life cover up to 10x annual premium included',
                'Flexible payout options: lump sum or income',
                'Available for ages 3 to 60 years',
                'Trusted by 5 crore+ policyholders across India',
            ]
        }
    },
    {
        id: 1,
        logo: null,
        logoText: 'HDFC Life',
        logoColor: '#003087',
        accentColor: '#e31837',
        brand: 'HDFC Life',
        plan: 'Sanchay Plus',
        rate: '6.2%',
        tag: 'TAX-FREE U/S 10(10D)',
        lockIn: '15 year',
        minAmount: '₹1,00,000',
        back: {
            highlight: 'Why Sanchay Plus?',
            points: [
                'Guaranteed returns unaffected by market volatility',
                'Life cover up to 10x annual premium included',
                'Flexible payout options: lump sum or income',
                'Available for ages 3 to 60 years',
                'Trusted by 5 crore+ policyholders across India',
            ]
        }
    },
]
</script>

<style scoped>
.flip-card {
    perspective: 1200px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07), 0 1px 4px 0 rgba(0, 0, 0, 0.04);
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>