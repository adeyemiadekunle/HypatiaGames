<template>
  <main class="home">
    <!-- hero -->
    <section class="hero">
      <HeroSlide />
    </section>

    <!-- about us -->
    <section class="about_us">
      <div class="about_container">
        <div class="about_content">
          <h2>We are Hypatia Games</h2>
          <div></div>
          <p>
            Hypatia Games is a developing game studio, an innovative
            blockchain-based real-life umbrella group of businesses that allows
            investors to earn passive income. is the next-generation blockchain
            solution that seamlessly blends the best of web2 and web3
            technology. Our platform offers unparalleled security, transparency,
            and decentralization, powered by real-world asset backing.
            Experience the future of finance and investment, today.
          </p>
          <!-- <button>ABOUT US</button> -->
          <router-link to="/about">
            <PrimaryButton>About Us </PrimaryButton>
          </router-link>
        </div>
      </div>
    </section>

    <!-- about the game  -->
    <section class="about_game">
      <div class="game_heading">
        <div><h4>Upcoming Game</h4></div>
      </div>
      <div class="background_image">
        <div class="text_overlay">
          <div class="text_content">
            <div class="game_logo">
              <img src="../assets/image/New_Logo.webp" alt="flaming_logo" />
            </div>
            <p>
              Flaming Wheelz is a fantasy RPG mixed with racing for anyone who's
              ever daydreamed about conquering the street with your driving
              expertise, smashing the car in front of them in traffic, speeding
              away from the cops, or driving up a half-finished building at a
              construction site, getting into the racing arena to prove your
              skills at the grandest stage.
            </p>
            <div>
              <!-- <button>VIEW PROJECT</button> -->
              <a href="https://flamingwheelz.com/">
                <PrimaryButton>View Project</PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- about HGT -->
    <section class="about_hgt">
      <div class="about_hgt_container">
        <div class="about_hgt_header">
          <h2>Hypatia Games Token</h2>
          <p>
            Hypatia Game Token is a decentralized, and governance token in
            Hypatia Game ecosystem, providing a sustainable economic model for the
            ecosystem. It is a utility token that can be used to pay for in-game
            items, services, and other in-game activities.
          </p>
          <div class="about_hgt_btn_container">
            <router-link to="/hgt">
              <PrimaryButton>Tokenomics </PrimaryButton>
            </router-link>
          </div>
        </div>
        <div class="hgt_image_container">
          <img
            src="../assets/image/HGT_Asset.avif"
            alt="HGT_function"
            class="desktop"
          />
          <img
            src="../assets/image/Mobile_HGT_Asset.avif"
            alt="HGT_function"
            class="tablet"
          />
        </div>
      </div>
    </section>

    <!-- about other ecosytem  -->
    <section class="about_ecosystem">
      <div class="about_ecosystem_container">
        <div class="about_ecosystem_heading">
          <h2>The Ecosystem</h2>
          <p>
            Building the industry's deepest and most interconnected ecosystem.
            Our ecosystem is made up of some of the best projects backed by
            market-leading investment plans that will help secure good returns
            for our holders.
          </p>
        </div>
        <div class="about_ecosystem_btn_cont">
          <!-- <button>LEARN MORE</button> -->
          <a href="https://hypatia-games.gitbook.io/hypatia-holdings-hypatia-games-whitepaper/ecosystem">
            <PrimaryButton>Whitepaper</PrimaryButton>
          </a>
        </div>
        <div class="about_ecosystem_card_con">
          <Ecoitem />
        </div>
      </div>
    </section>

    <!-- The Backer and Partner -->
    <section class="partner">
      <div class="partner_container">
        <div>
          <h3>Meet Our Web3 Gaming Partner and Backer</h3>
        </div>
        <div>
          <PartnerList />
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news">
      <div class="news_container">
        <div class="news_heading">
          <h3>Latest Update & News</h3>
          <a href="">Read More</a>
        </div>
        <div class="news_list">
          <NewsSection />
        </div>
      </div>
    </section>

    <!-- Join Us -->

    <!-- <section class="join_us">
      <div class="join_us_container">
        <div class="join_us_content">
          <h2>Join Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptas qui quibusdam natus nulla dolores. Culpa praesentium eum
            omnis aperiam!
          </p>
          <div class="join_us_btn">
            <button>JOIN US</button>
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script >
import HeroSlide from "../components/HeroSlide.vue";
import Ecoitem from "../components/Ecosystem/Ecoitem.vue";
import NewsSection from "../components/NewsSection.vue";
import PartnerList from "../components/PartnerList.vue";
import PrimaryButton from "../components/Button/PrimaryButton.vue";
import SecondaryButton from "../components/Button/SecondaryButton.vue";
export default {
  name: "Home",

  components: {
    HeroSlide,
    Ecoitem,
    NewsSection,
    PartnerList,
    PrimaryButton,
    SecondaryButton,
  },
};
</script>

<style scoped>
.hero {
  min-height: 600px;
  position: relative;
  margin-top: -6rem;
  z-index: 1;
}

/* about us section */

.about_us {
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.about_container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
}

.about_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0rem auto;
  height: 100%;
  padding: 3rem 0;
}
.about_content h2 {
  font-size: var(--step-4);
  white-space: wrap;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 600;
  color: white;
}
.about_content div {
  width: 50px;
  border: 1px solid black;
  margin-bottom: 2rem;
  border-color: var(--tertiary-pink);
}

.about_content p {
  text-align: center;
  margin-bottom: 3rem;
  font-size: var(--step-1);
  color: white;
}

/* about game */
.about_game {
  width: 100%;
  min-height: 600px;
}

.about_game .game_heading {
  width: 100%;
  height: 100px;
  background: var(--tertiary-pink-accent-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
}

.game_heading div {
  width: 100%;
  margin: 0 auto;
}

.game_heading div h4 {
  text-align: center;
  color: white;
  font-size: var(--step-2);
  font-weight: 500;
}

.background_image {
  background-image: url("../assets/image/Flamingwheelz.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 700px;
  position: relative;
}

@media screen and (min-width: 1024px) {
  .background_image {
    height: 600px;
  }
}

.text_overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text_overlay .text_content {
  color: white;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 1024px) {
  .text_overlay .text_content {
    width: 80%;
  }
}

.game_logo img {
  width: 300px;
  margin-bottom: 20px;
}

.text_content p {
  text-align: center;
  margin-bottom: 30px;
  font-size: var(--step-1);
}

@media screen and (min-width: 1024px) {
  .text_content p {
    margin-bottom: 50px;
  }
}

/* About hgt */

.about_hgt {
  width: 100%;
  min-height: 600px;
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
    width: 85%;
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
    height: auto;
    object-fit: contain;
    object-position: 100%;
  }
}

/* About Ecosystem */

.about_ecosystem {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about_ecosystem_container {
  width: 90%;
  margin-top: 70px;
}

.about_ecosystem_heading {
  width: 100%;
  /* margin-top: 50px; */
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
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* The Partner */
.partner {
  min-height: 500px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Larger screen than 768px */

.partner_container {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
  /* border: 1px solid green; */
}

/* Max screen of 768px */
/* @media screen and (max-width: 768px) {
  .partner_container {
    margin-bottom: 70px;
  }
} */

.partner_container h3 {
  font-size: var(--step-2);
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: white;
}

/* News Section */
.news {
  min-height: 400px;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.news_container {
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid green; */
  margin-bottom: 50px;
  margin-top: 50px;
}

/* Larger screen than 1440px */
@media screen and (min-width: 1440px) {
  .news_container {
    width: 85%;
  }
}

.news_heading {
  display: flex;
  justify-content: space-between;
}

.news_heading h3 {
  color: white;
}

.news_heading a {
  text-decoration: underline;
  color: brown;
}

.news_list {
  margin-top: 40px;
}

/* Join Us */

/* .join_us {
  min-height: 500px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.join_us_container {
  width: 90%;
  border: 1px solid green;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.join_us_content {
  border: 1px solid blue;
  width: 90%;
  padding: 80px 0px;
 
} */
</style>
