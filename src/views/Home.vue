<template>
  <HomeSlot>
    <template v-slot:section1>
      <HeroSection />
    </template>
    <template v-slot:section2>
      <AboutSection />
    </template>
    <template v-slot:section3>
      <GameSection />
    </template>
    <template v-slot:section4>
      <HGTSection />
    </template>
    <template v-slot:section5>
      <EcosystemSection />
    </template>
    <template v-slot:section6>
      <PartnerSection />
    </template>
    <template v-slot:section7>
      <TrailerSection />
    </template>
    <template v-slot:section8>
      <NewsSection />
    </template>
  </HomeSlot>
</template>

<script>
import { useHead } from "@unhead/vue";
import HomeSlot from "../components/Home/HomeSlot.vue";
import HeroSection from "../components/Home/HeroSection.vue";
import AboutSection from "../components/Home/AboutSection.vue";
import GameSection from "../components/Home/GameSection.vue";
import HGTSection from "../components/Home/HGTSection.vue";
import EcosystemSection from "../components/Home/EcosystemSection.vue";
import PartnerSection from "../components/Home/PartnerSection.vue";
import TrailerSection from "../components/Home/TrailerSection.vue";
import NewsSection from "../components/Home/NewsSection.vue";
export default {
  name: "Home",
  components: {
    HomeSlot,
    HeroSection,
    AboutSection,
    GameSection,
    HGTSection,
    PartnerSection,
    TrailerSection,
    NewsSection,
    EcosystemSection,
  },
  setup() {
    useHead({
      title: "Hypatia Games| Redefining Web3 Gaming Experience",
      meta: [
        {
          name: "description",
          content:
            "Hypatia Games is a decentralized gaming ecosystem. It is the next-generation blockchain solution that seamlessly blends the best of web2 and web3 technology.",
        },
        {
          name: "keywords",
          content: "Hypatia Games, Hypatia Games Token, HGT, Web3 Gaming",
        },
      ],
    });

    return { useHead };
  },
};
</script>

