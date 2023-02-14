<template>
  <div class="splide_container">
    <Splide :options="options" aria-label="Ecosystem"  >
      <SplideSlide  v-for="ecoList in ecoLists" :key="ecoList.id">
        <Card 
              :imgUrl="ecoList.imgUrl"
              :alt="ecoList.title" 
              :heading="ecoList.title"
              :status="ecoList.status"
              :text="ecoList.text"
              :title="ecoList.title"
              v-bind:class="status == ecoList.status ? 'image-active' : 'image-alt'"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import Card from "../Card/Card.vue";
import FlamingWheelz from "../../assets/image/flamingwheelz.webp";

import { reactive, ref } from "vue";
export default {
  name: "Ecoitem",
  components: { Splide, SplideSlide, Card },

  setup() {

    const status = ref('In dev');

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
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    });

    const ecoLists = reactive([
      {
        id: 1,
        title: "Hypatia Games",
        imgUrl: FlamingWheelz,
        status: "In dev",
        text: " A decentralized indie game studio where we'll build games for our ecosystem and others. ",
      },
      {
        id: 2,
        title: "Hypatia Farms",
        imgUrl: "https://picsum.photos/id/347/300/300",
        status: "Coming Soon",
        text: "A real-life farm that will have percentage of its revenue to promote $HGT and distributed to it's Genesis NFTs holders.",
      },
      {
        id: 3,
        title: "Hypatia Dex Exchange",
        imgUrl: "https://picsum.photos/id/217/300/300",
        status: "Coming Soon",
        text: "Develop a decentralized exchanges for $HGT and others projects.",
      },
      {
        id: 4,
        title: "Universal Marketplace",
        imgUrl: "https://picsum.photos/id/27/300/300",
        status: "Coming Soon",
        text: "Building a decentralized marketplace for NFTs.",
      },
      {
        id: 5,
        title: "Incubation and Launchpad Platform",
        imgUrl: "https://picsum.photos/id/47/300/300",
        status: "Coming Soon",
        text: "Building a incubator program and launchpad platform.",
      },
      {
        id: 6,
        title: "Betting Platform",
        imgUrl: "https://picsum.photos/id/17/300/300",
        status: "Coming Soon",
        text: "Building a decentralized betting plaform or lottery where users play games and win instant prize.",
      },
       {
        id: 7,
        title: "Hypatia Digital Arena",
        imgUrl: "https://picsum.photos/id/117/300/300",
        status: "Coming Soon",
        text: "An electronics shop where sales and maintenance of faulty electronics",
      },
      
    ]);

    return { options, ecoLists, status };
  },
};
</script>

<style>
.splide_container {
  width: 100%;
}

.image-active img {
  filter: blur(0px);
}

.image-alt img {
  filter: blur(18px);
}
</style>