<template>
    <div class="w-full pt-7 pb-10 bg-[#3e5c50] text-[rgba(255,255,255,0.31)] px-3">
        <div class="md:max-w-[728px] lg:max-w-[960px] mx-auto container">
            <span class="block text-center font-light">IN THE PRESS</span>
            <div class="flex justify-around items-center gap-x-6">
                <div v-for="(item,index) in list" :key="index">
                    <img :src="item.img" :alt="item.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    const list = reactive([
        {
            name: 'FASTCOMPANY',
            img: 'https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed80684d7486_logo_Fastcompany.svg',
        },
        {
            name: 'FOBES',
            img: 'https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed0a224d7479_logo_Forbes.svg',
        },
        {
            name: 'TECHCRUNCH',
            img: 'https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edeb824d7462_logo_techcrunch.svg',
        },
        {
            name: 'WIRED',
            img: 'https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed2e5b4d7471_logo_Wired.svg',
        },
        {
            name: 'ZDNET',
            img: 'https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed57864d7476_logo_zdnet.svg'
        }
    ]);
</script>