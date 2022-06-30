<template>
<div class="fixed top-0 left-0 w-full bg-white shadow-header z-50 px-3">
    <div class="md:max-w-[728px] lg:max-w-[960px] h-header mx-auto container flex justify-between ">
        <div class="my-auto">
            <a href="#" class="text-[27px] text-[#1c1c1c] font-slab font-medium">
                METRIC
            </a>
        </div>

        <div class="hidden lg:block">
            <ul class="flex h-full text-header-menu">
                <li><a href="#features" :class="{'currentActive': active[0]}" class="px-4 cursor-pointer h-full flex justify-center items-center hover:shadow-header-hover">Features</a></li>
                <li><a href="#pricing" :class="{'currentActive': active[1]}" class="px-4 cursor-pointer h-full flex justify-center items-center hover:shadow-header-hover">Pricing</a></li>
                <li><a href="#customers" :class="{'currentActive': active[2]}" class="px-4 cursor-pointer h-full flex justify-center items-center hover:shadow-header-hover">Customers</a></li>
                <li><a href="#" class="px-4 cursor-pointer h-full flex justify-center items-center hover:shadow-header-hover">Sign Up</a></li>
            </ul>
        </div>

        <div class="block lg:hidden">
            <div class="h-full flex items-center justify-center w-full">
        <label for="mobie-nav" class="block cursor-pointer">
            <img src="../assets/images/menu-icon.png" alt="MENU" class="block w-[30px] h-[30px] ">
        </label>
        <input type="checkbox" name="mobie-nav" id="mobie-nav" v-model="showNav" class="hidden">
    </div>

    <div class="fixed inset-0 bg-black bg-opacity-80" :class="{'hidden': !showNav}" @click="showNav = false">

    </div>
    <div :class="{'translate-x-full': !showNav,}" class="fixed top-0 right-0 bottom-0 w-3/5 border bg-white border-l-[#00000021] duration-300 ease-in">
        <div class="cursor-pointer w-[30px] h-[30px] absolute top-10 right-10" @click="showNav = false">
            <img src="../assets/images/exit-icon.png" alt="EXIT">
        </div>
        <ul class="flex h-full flex-col text-header-menu pt-40">
            <li><a href="#features" :class="{'currentActiveMobie': active[0]}"  class="p-4 cursor-pointer h-full flex justify-center items-center hover:bg-nav-hover" @click="showNav = false">Features</a></li>
            <li><a href="#pricing" :class="{'currentActiveMobie': active[1]}"  class="p-4 cursor-pointer h-full flex justify-center items-center hover:bg-nav-hover" @click="showNav = false">Pricing</a></li>
            <li><a href="#customers" :class="{'currentActiveMobie': active[2]}"  class="p-4 cursor-pointer h-full flex justify-center items-center hover:bg-nav-hover" @click="showNav = false">Customers</a></li>
            <li><a href="#" class="p-4 cursor-pointer h-full flex justify-center items-center hover:bg-nav-hover" @click="showNav = false">Sign Up</a></li>
        </ul>
    </div>
        </div>
    </div>
</div>
</template>

<script setup>
    import {onMounted, reactive, ref} from "vue"
    const active = reactive([false,false,false])
    const showNav = ref(false);
    onMounted(()=>{
        const features = document.getElementById('features')
        const pricing = document.getElementById('pricing')
        const customers = document.getElementById('customers')

            window.onscroll = () =>{
            if(window.scrollY >= customers.offsetTop - 72 - customers.offsetHeight / 2 && window.scrollY < customers.offsetTop - 72 + customers.offsetHeight / 2){
                active[2] = true;
                active[1] = false;
                active[0] = false
            }
            else if(window.scrollY >= pricing.offsetTop - 72 - customers.offsetHeight / 2){
                active[1] = true;
                active[2] = false;
                active[0] = false
            }
            else if(window.scrollY >= features.offsetTop - 72 - features.offsetHeight / 2){
                active[0] = true;
                active[1] = false;
                active[2] = false
            }
            if (window.scrollY < features.offsetTop - 72 || window.scrollY >= customers.offsetTop - 72 + customers.offsetHeight / 2){
                active[0] = false;
                active[1] = false;
                active[2] = false
            }
        }
    })
</script>

<style scoped>
    .currentActive{
        box-shadow: inset 0 3px 0 0 #4dbd90;
        color: #4dbd90;
    }
    .currentActiveMobie{
        background-color:  rgba(181,181,181,0.5);
    }
</style>