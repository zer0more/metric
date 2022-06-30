<template>
    <div class="pt-header -mt-header">
        <div class="bg-pricing-bg py-y text-text px-3">
            <div class="md:max-w-[728px] lg:max-w-[960px] mx-auto container">
                <h2 class="text-[30px] mb-[10px] text-center">Plans & Pricing</h2>
                <p class="mb-[68px] text-[19px] font-light text-center">
                    No credit card required. No risk, 
                    <span class="font-normal">30-day money back guarantee</span>
                    !
                </p>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-12"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <div v-for="(item,index) in list" key="index" class="bg-white rounded-[3px] p-4 flex flex-col text-[#2b2b2b] text-center md:text-left">
                        <span class="mb-[15px] text-[22px] font-medium">{{item.name}}</span>
                        <span class="mb-2 text-[14px]"><strong class="text-[#489fd9] text-[20px] tracking-normal">${{item.price}}</strong>/month</span>
                        <span class="mb-2 text-[14px]"><strong class="text-[#489fd9] text-[20px] tracking-normal">{{item.data}}</strong> Data Points</span>
                        <span class="mb-2 text-[14px]"><strong class="text-[#489fd9] text-[20px] tracking-normal">{{item.member}}</strong> Team Member</span>
    
                        <span class="my-3 block bg-[#dbdbdb] h-[1px] w-full md:w-2/3"></span>
    
                        <span class="text-[14px] mb-3"><strong>{{item.support}}</strong> Support</span>
                        <span class="text-[14px] mb-3" :class="{'line-through text-[#c7c5c5]' : !item.app}"><strong>IOS</strong> and <strong>Android</strong> App</span>
                        <span class="text-[14px] mb-3" :class="{'line-through text-[#c7c5c5]' : !item.dashboard}"><strong>Customizable</strong> Dashboard</span>
                        <span class="text-[14px] mb-3" :class="{'line-through text-[#c7c5c5]' : !item.api}">Metric <strong>API</strong></span>
    
                        <a href="#" class="text-white bg-black py-[10px] px-[23px] rounded-[3px] text-[14px] font-slab text-center hover:bg-[#489fd9] duration-300">Choose Plan</a>
                    </div>
                </div>
    
                <p class="text-center mt-[21px]">
                    Need more Data Points or Team Members? Please <a href="#" class="text-[#489fd9] border-b-transparent hover:border-b-[#489fd9] border-b duration-300">contact us</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    const list = reactive([
        {   
            name: "Starter",
            price: 15,
            data: 500,
            member: 1,
            support: 'Email',
            app: false,
            dashboard: false,
            api: false
        },
        {
            name: 'Professional',
            price: 30,
            data: 2000,
            member: 1,
            support: 'Email',
            app: true,
            dashboard: false,
            api: false
        },
        {
            name: 'Startup',
            price: 75,
            data: 5000,
            member: 3,
            support: 'Email',
            app: true,
            dashboard: true,
            api: false
        },
        {
            name: 'Business',
            price: 250,
            data: 15000,
            member: 10,
            support: 'Priority',
            app: true,
            dashboard: true,
            api: true
        }
    ])
</script>