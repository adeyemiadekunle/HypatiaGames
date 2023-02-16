<template>
  <section class="hero">
    <img src="../../assets/image/hero_placeholder.avif" srcset="../../assets/image/hero_placeholder.webp" alt=""  v-show="showPlaceholder" loading="eager" >
    <video autoplay muted loop ref="video" >
      <source :src="backgroundVideoSrc" type="video/mp4"   />
    </video>
    <div class="hero-caption">
      <h1 class="caption">Redefined Web3 Gaming Experience</h1>
    </div>
  </section>
</template>

<script>
import HeroVideo from "../../assets/video/background_video.mp4"
import { ref, computed } from 'vue';

export default {
  name: "HeroSlide",
  setup() {
    const video = ref(null);
    const backgroundVideoSrc = HeroVideo;

    const showPlaceholder = computed(() => {
      return video.value && video.value.readyState < 2;
    });

    return {
      video,
      backgroundVideoSrc,
      showPlaceholder,
    };
  },
};
</script>


<style scoped>
.hero {
  min-height: 650px;
  position: relative;
  margin-top: -6rem;
  overflow: hidden;
  /* border: 1px solid red; */
}

@media screen and (max-width: 768px) {
  .hero {
    height: 700px;
  }
}

@media screen and (min-width: 1440px) {
  .hero {
    height: 800px;
  }
}

.hero video, img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  z-index: 2;
  text-align: center;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.5);
  /* border: 1px solid red; */
}

.hero-caption h1 {
  font-size: var(--step-6);
  line-height: 1.2;
  font-weight: 700;
}

/* .dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.dark-overlay:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border: 1px solid red;
  z-index: 3;
} */
</style>



