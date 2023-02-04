<template>
  <Splide
    :options="options"
    aria-label="My Favorite Images"
  >
    <SplideSlide v-for="data in datas" :key="data.id" >
      <img :src="data.imgUrl" alt="data.alt" class="hero_image" id="scale-img" />
      <slot class="caption"><h1>Redefined Web3 Gaming Experience</h1></slot>
    </SplideSlide>
  </Splide>
</template>

<script>
import { reactive, defineComponent } from 'vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import FHthree from '@/assets/image/FH3.jpg';
import FHfour from '@/assets/image/FH4.jpg';
import FHfive from '@/assets/image/FH5.jpg';


export default defineComponent( {
components: {Splide, SplideSlide},

  setup() {
    const datas = reactive([
      {
        id: 1,
        imgUrl: FHthree,
        alt: 'Racing Car',
        caption: 'This is lite',
      },
      {
        id: 2,
        imgUrl: FHfour,
        alt: 'Multiple car racing',
        caption: 'This is lite',
      },
      {
        id: 3,
        imgUrl: FHfive,
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
    }

 
    return { datas, options };

  },

});

</script>
<style scoped>

.splide__slide {
  position: relative;
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
}


</style>
