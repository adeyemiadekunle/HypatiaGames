<template>
  <!-- about other ecosytem  -->
  <section class="about_ecosystem">
    <div class="about_ecosystem_container">
      <div class="about_ecosystem_heading">
        <h2>The Ecosystem</h2>
        <p>
          Building the industry's deepest and most interconnected ecosystem. Our
          ecosystem is made up of some of the best projects backed by
          market-leading investment plans that will help secure good returns for
          our holders.
        </p>
      </div>
      <div class="about_ecosystem_btn_cont">
        <a
          href="https://hypatia-games.gitbook.io/hypatia-holdings-hypatia-games-whitepaper/ecosystem"
        >
          <PrimaryButton>Whitepaper</PrimaryButton>
        </a>
      </div>
      <div class="about_ecosystem_card_con">
        <Ecoitem />
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../Button/PrimaryButton.vue";
import Ecoitem from "../Ecosystem/Ecoitem.vue";
export default {
  name: "EcosystemSection",
  components: {
    PrimaryButton,
    Ecoitem,
  },
  setup() {},
};
</script>

<style scoped>
/* About Ecosystem */

.about_ecosystem {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about_ecosystem_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 50px;
  width: 95%;
}

@media screen and (min-width: 1024px) {
  .about_ecosystem_container {
    width: 100%;
  }
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .about_ecosystem_container {
    width: 90%;
  }
}

.about_ecosystem_heading {
  width: 90%;
}

@media screen and (min-width: 1024px) {
  .about_ecosystem_heading {
    width: 90%;
  }
}

.about_ecosystem_heading h2 {
  font-size: var(--step-4);
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: white;
}

.about_ecosystem_heading p {
  font-size: var(--step-1);
  text-align: center;
  margin-bottom: 40px;
  color: white;
}

.about_ecosystem_btn_cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about_ecosystem_card_con {
  height: 100%;
  margin-top: 70px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

@media screen and (min-width: 1024px) {
  .about_ecosystem_card_con {
    width: 100%;
  }
}
</style>