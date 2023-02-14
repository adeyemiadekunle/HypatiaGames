<template>
  <!-- about HGT -->
  <section class="about_hgt">
    <div class="about_hgt_container">
      <div class="about_hgt_header">
        <h2>Hypatia Games Token</h2>
        <p>
          Hypatia Game Token is a decentralized, and governance token in Hypatia
          Game ecosystem, providing a sustainable economic model for the
          ecosystem. It is a utility token that can be used to pay for in-game
          items, services, and other ecosystem activities.
        </p>
        <div class="about_hgt_btn_container">
          <router-link to="/hgt">
            <PrimaryButton>Tokenomics</PrimaryButton>
          </router-link>
        </div>
      </div>
      <div class="hgt_image_container">
        <img
          src="../../assets/image/HGT_Asset.webp"
          alt="HGT_function"
          class="desktop"
          loading="lazy"
          title="HGT Token Function"
        />
        <img
          src="../../assets/image/Mobile_HGT_Asset.webp"
          alt="HGT_function"
          class="tablet"
          loading="lazy"
          title="HGT Token Function"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../Button/PrimaryButton.vue";
export default {
  name: "HGTSection",
  components: {
    PrimaryButton,
  },

  setup() {},
};
</script>

<style  scoped>
/* About hgt */

.about_hgt {
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--tertiary-pink-accent-2);
  color: white;

}

.about_hgt_container {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  /* border: 1px solid red; */
  margin-top: 70px;
  margin-bottom: 70px;
}

/* Larger screen than 1024px */
@media screen and (min-width: 1024px) {
  .about_hgt_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* Larger screen than 1440px */
@media screen and (min-width: 1440px) {
  .about_hgt_container {
    width: 80%;
  }
}

.about_hgt_header {
  display: flex;
  flex-direction: column;
}

.about_hgt_header h2 {
  font-size: var(--step-4);
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
}

.about_hgt_header p {
  text-align: center;
  margin-bottom: 3rem;
  font-size: var(--step-1);
}

/* Larger screen than 1024px */
@media screen and (min-width: 1024px) {
  .about_hgt_header {
    grid-column: 1/2;
    grid-row: 1/2;
    margin-top: 100px;
  }

  .about_hgt_header h2 {
    text-align: left;
  }

  .about_hgt_header p {
    text-align: left;
  }
}

.about_hgt_btn_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

/* Larger screen than 1024px */
@media screen and (min-width: 1024px) {
  .about_hgt_btn_container {
    align-items: start;
  }
}

.hgt_image_container {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  background: transparent;
}

.about_hgt_container .desktop {
  display: none;
  width: 100%;
  height: auto;
}

.hgt_image_container .tablet {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: 100%;
}

/* Larger screen than 1024px */
@media screen and (min-width: 1024px) {
  .hgt_image_container .tablet {
    display: none;
  }

  .hgt_image_container {
    justify-content: flex-end;
  }

  .hgt_image_container .desktop {
    display: block;
    object-fit: contain;
    object-position: 100%;
  }
}
</style>