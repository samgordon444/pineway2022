<template>
  <section class=" mt-5 md:mt-20">
    <div class="px-10 text-center font-medium">
      <h1 class="font-serif text-[40px] leading-[50px] tracking-tight text-green">
        {{homeData.hero.header}}
      </h1>
      <p class="mt-6 text-[22px] leading-8 text-green md:w-6/12 mx-auto">
        {{homeData.hero.subhead}}
      </p>
      <a v-if="homeData.hero.buttonLink && homeData.hero.buttonText" :href="homeData.hero.buttonLink" class="button-green">{{homeData.hero.buttonText}}</a>
    </div>
    <div class="bg-hero bg-no-repeat bg-top bg-cover">
        <div style="background: linear-gradient(180deg, rgba(0, 102, 99, 0) 0%, #006663 85%); background-position-y:80px; background-repeat:no-repeat" 
        class="pt-72 border-b-dark-green border-b-[60px] md:pb-16">
            <div class="px-5 sm:px-14 lg:px-0 text-xl font-serif 
             grid grid-flow-row lg:grid-flow-col lg:grid-cols-[1fr_1fr]
            ">
                <div class="lg:pr-20 lg:justify-self-end">
                    <h2 class="sr-only">Hours</h2>
                    <div v-for="days in homeData.hours" v-bind:key="days.id" class="grid grid-flow-col grid-cols-[2fr_1fr] gap-0 lg:gap-8 mb-4">
                            <p class="text-pink">{{days.days}}</p>
                            <p class="text-cream">{{days.times}}</p>
                    </div>
                    <p class="text-sm font-sans text-cream opacity-70">Hours subject to change.<br>Last call for ball rental 30 minutes before close.</p>
                </div>
                <div class="relative mt-24 lg:mt-0 text-center lg:text-left lg:pl-20 lg:justify-self-start">
                    <div class="absolute left-1/2 -top-14 lg:top-1/2 -translate-x-1/2 lg:left-0 lg:rotate-[-75deg]"><img src="../assets/images/golfclub.svg"></div>
                    <h2 class="sr-only">Location</h2>
                    <p class="text-cream">1621 116th St.<br>Pleasant Prairie, WI 53158</p>
                    <a href="https://g.page/pineway-golf-co?share" target="_blank" class="text-sm font-sans text-cream opacity-70 underline hover:opacity-100 hover:text-yellow hover:no-underline duration-300">Get Directions</a>
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