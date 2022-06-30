<template>
    <div class="pt-header -mt-header">
        <div class="py-y px-3">
            <div class="md:max-w-[728px] lg:max-w-[960px] mx-auto container">
                <h2 class="text-[30px] my-[10px] text-center">What People Say About Us</h2>
                <div class="flex justify-between items-center mt-[45px]">
                    <div class="z-20">
                        <button @click="slideShowIndex--">
                            <i class='bx bx-chevron-left text-[50px] text-[#bdbdbd] hover:text-black'></i>
                        </button>
                    </div>
    
                    <div class="overflow-hidden relative w-full h-[272px] lg:h-[240px]">
                        <div :class="{'-left-full' : pre === index, 'left-full' : next === index, 'left-0 z-10' : slideShowIndex === index}" v-for="(item,index) in list" :key="index" class="absolute w-full top-0 bottom-0 flex flex-col duration-300 bg-white">
                            <p class="text-[25px] font-slab leading-[31px] font-light text-center mb-5">"{{item.comments}}"</p>
                            <div class="mb-3">
                                <img :src="require(`../assets/images/${item.img}`)" class="rounded-full w-[70px] h-[70px] mx-auto">
                            </div>
                            <span class="text-center font-medium">{{item.name}}</span>
                            <span class="text-center">{{item.job}}</span>
                        </div>
                    </div>
    
                    <div class="z-20">
                        <button @click="slideShowIndex++">
                            <i class='bx bx-chevron-right text-[50px] text-[#bdbdbd] hover:text-black'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { ref } from 'vue';
    import { watch } from 'vue';
    const list = reactive([
        {
            name: 'Kyle Killit',
            img: 'customers-1.jpeg',
            job: 'Designer at Tiempo Labs',
            comments: 'Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.'
        },
        {
            name: 'Sergie Kalashnikov',
            img: 'customers-2.jpg',
            job: 'CEO at BentoBox',
            comments: 'Ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna'
        },
        {
            name: 'Bryant Chou',
            img: 'customers-3.jpg',
            job: 'CTO at Slapper Labs',
            comments: 'Nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.'
        }
    ])
    const listLn = list.length;
    const slideShowIndex = ref(0);
    const pre = ref(list.length - 1);
    const next = ref(1);

    function checkIndex(index, arrLn){
        if(index.value < 0) {
            index.value = arrLn - 1;
        }
        else if (index.value > arrLn - 1){
            index.value = 0;
        }
    }   

    watch(slideShowIndex,() => {
        checkIndex(slideShowIndex,listLn)
        pre.value = slideShowIndex.value - 1;
        next.value = slideShowIndex.value + 1;
        checkIndex(pre,listLn)
        checkIndex(next,listLn)
    })
</script>