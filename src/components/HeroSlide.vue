<template>
  <Splide
    :options="options"
    aria-label="My Favorite Images"
  >
    <SplideSlide v-for="data in datas" :key="data.id" >
      <picture>
        <source :srcset ='data.imgUrl' type="image/webp" >
        <img :src="data.imgUrl" :alt="data.alt" class="hero_image" id="scale-img" />
      </picture>
     
      <slot class="caption"><h1>Redefined Web3 Gaming Experience</h1></slot>
    </SplideSlide>
  </Splide>
</template>

<script>
import { reactive, defineComponent } from 'vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

import HeroOne from '@/assets/image/Hero1.webp';
import HeroTwo from '@/assets/image/Hero2.webp';
import HeroThree from '@/assets/image/Hero3.webp'


import { useHead } from '@unhead/vue';


export default defineComponent( {
name: 'HeroSlide',
components: {Splide, SplideSlide},

  setup() {
    const datas = reactive([
      {
        id: 1,
        imgUrl: HeroOne,
        alt: 'Racing Car',
        caption: 'This is lite',
      },
      {
        id: 2,
        imgUrl: HeroTwo,
        alt: 'Multiple car racing',
        caption: 'This is lite',
      },
      {
        id: 3,
        imgUrl: HeroThree,
        alt: 'Racing Car city',
        caption: 'This is lite',
      },
    ]);

    const options = {
      rewind: true,
      height: 650,
      autoplay: true,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      interval: 6000,
      lazyLoad: true,
      type  : 'fade',
      speed: 3000,
      easing: 'ease',
    }

    useHead({
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: HeroOne,
        },
      ],
    })

 
    return { datas, options };

  },

});

</script>
<style scoped>

.splide__slide {
  position: relative;
}

.splide__slide {
  height: 650px !important;
}

@media screen and (min-width: 1440px) {
  .splide__slide {
    height: 700px !important;
  }
  
}

.splide__slide h1 {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.5);
  font-size: var(--step-6);
  letter-spacing: 2;
  text-align: center;
  color: var(--primary-white);
  font-weight: 700;
}

.hero_image {
  object-fit: cover;
  object-position: 15% 100%;
  width: 100%;
  height: 100%;
}


</style>
