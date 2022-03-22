<template>
    <section class="text-center flex flex-col md:flex-row">
        <div class="bg-yellow w-full px-[10%] md:px-[5%] lg:px-[10%] py-32 md:py-44 flex flex-col justify-center items-center">
            <h2 class="text-green font-brand text-[60px] xl:text-[80px] tracking-tight">{{homeData.leftFeature.header}}</h2>
            <p class="text-green font-medium text-lg">{{homeData.leftFeature.description}}</p>
            <a v-if="homeData.leftFeature.buttonLink && homeData.leftFeature.buttonText" :href="homeData.leftFeature.buttonLink" target="_blank" class="button-green">{{homeData.leftFeature.buttonText}}</a>
        </div>
        <div class="relative bg-pink w-full px-[10%] md:px-[5%] lg:px-[10%] pt-32 pb-56 md:py-44 flex flex-col justify-center items-center">
            <h2 class="text-green font-brand text-[60px] xl:text-[80px] tracking-tight">{{homeData.rightFeature.header}}</h2>
            <p class="text-green font-medium text-lg">{{homeData.rightFeature.description}}</p>
            <a v-if="homeData.rightFeature.buttonLink && homeData.rightFeature.buttonText" :href="homeData.rightFeature.buttonLink" target="_blank" class="button-green">{{homeData.rightFeature.buttonText}}</a>
            <img src="../assets/images/proshop.png" class="absolute bottom-0 h-36 md:left-0 md:-translate-x-1/2 lg:h-48 box">
        </div>
    </section>
</template>

<script>
    export default {
        props: ['homeData']
    }
</script>