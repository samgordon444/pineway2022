<template>
    <section class="flex flex-col text-center py-32 md:pt-44 md:pb-32">
        <div class="bg-cream w-full px-[10%] md:px-[5%] lg:px-[10%] pb-16 md:max-w-4xl md:self-center">
            <h2 class="text-green font-brand text-[60px] xl:text-[80px] tracking-tight">{{homeData.shop.header}}</h2>
            <p class="text-green font-medium text-lg">{{homeData.shop.description}}</p>
            <a v-if="homeData.shop.buttonLink && homeData.shop.buttonText" :href="homeData.shop.buttonLink" target="_blank" class="
            relative z-0 text-green hover:text-red transition-all duration-200 font-brand text-3xl md:text-[40px] mt-10 inline-block
            after:w-full after:bg-pink after:-z-10 after:h-2 after:absolute after:inline-block after:left-0 after:bottom-0 hover:after:h-full after:transition-all after:duration-200
            ">{{homeData.shop.buttonText}}</a>
        </div>
        <div class="w-full overflow-hidden">
            <div class="relative w-max flex flex-row marquee md:marquee-wide">
                <div v-for="item in homeData.shop.shopItem" v-bind:key="item.id" class="w-72 h-72 md:w-[500px] md:h-[500px] md:px-10 shrink-0">
                    <img :src="item.item">
                </div>
                <!-- repeat whole thing once, and all but last a third time -->
                <div class="absolute flex flex-row left-full">
                    <div v-for="item in homeData.shop.shopItem" v-bind:key="item.id" class="w-72 h-72 md:w-[500px] md:h-[500px] md:px-10 shrink-0">
                        <img :src="item.item">
                    </div>
                    <div v-for="item in homeData.shop.shopItem" v-bind:key="item.id" class="w-72 h-72 md:w-[500px] md:h-[500px] md:px-10 shrink-0 last:hidden">
                        <img :src="item.item">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['homeData']
    }
</script>