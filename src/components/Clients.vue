<template>
    <div class="bg-[#a1bfd4] w-full px-3">
        <div class="md:max-w-[728px] lg:max-w-[960px] mx-auto container">
            <div class="flex justify-around items-center gap-x-6">
                <div v-for="(item,index) in list" :key="index">
                    <img :src="require(`../assets/images/${item.img}`)" :alt="item.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    const list = reactive([
        {
            name: 'JOIHNSON AND JOIHNSON',
            img: 'johnson_and_johnson.png'
        },
        {
            name: 'TESLA',
            img: 'tesla.png'
        },
        {
            name: 'OUYA',
            img: 'ouya.png'
        },
        {
            name: 'CHARTBOOST',
            img: 'chartboost.png'
        },
        {
            name: 'MAMMOTH',
            img: 'mammoth.png'
        },
        {
            name: 'NEUTROGENA',
            img: 'neutrogena.png'
        }
    ])
</script>