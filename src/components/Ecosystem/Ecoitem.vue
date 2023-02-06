<template>
  <div class="splide_container">
    <Splide :options="options" aria-label="Vue Splide Example">
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import Card from "../Card/Card.vue";

import {reactive} from 'vue'

export default {
  name: "Ecoitem",
  components: { Splide, SplideSlide, Card },

  setup() {
    const options = reactive({
      perMove: 1,
      rewind: true,
      autoplay: true,
      interval: 2500,
      perPage: 3,
      gap: "3rem",
      speed: 1000,
      arrows: false,
      pagination: false,
      breakpoints: {
        1024: {
          perPage: 2
        },
        768: {
          perPage: 1,
        },
      },
    });
    
    return { options };
  },
};
</script>

<style>
.splide_container {
  width: 100%;
}
</style>