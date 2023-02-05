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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            nostrum! Recusandae, est cum laudantium dolorem iste ullam vel
            expedita totam alias sit, quod doloremque maiores? Repellendus
            veritatis laboriosam quod a nesciunt explicabo! Illum similique,
            nisi quaerat minima excepturi maiores possimus ipsam officia nobis,
            doloremque minus enim iusto officiis commodi distinctio!
          </p>
          <button>ABOUT US</button>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                eveniet accusantium fugiat voluptatum beatae, optio laudantium
                doloribus iste iusto odit debitis consectetur, eaque quas
                pariatur fugit perferendis expedita molestiae illum corporis
                temporibus. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Vero, alias neque vitae ipsa accusantium repellendus nemo!
                Consequatur amet ipsum molestias!
              </p>
              <div>
                <button>VIEW PROJECT</button>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptas qui quibusdam natus nulla dolores. Culpa praesentium eum
            omnis aperiam!
          </p>

          <div class="about_hgt_btn_container">
            <button>LEARN MORE</button>
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
            Building the industry's deepest and most interconnected ecosytem.
          </p>
        </div>
        <div class="about_ecosystem_btn_cont">
          <button>LEARN MORE</button>
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
import Ecoitem from "../components/Ecoitem.vue";
import NewsSection from "../components/NewsSection.vue";
import PartnerList from "../components/PartnerList.vue";
export default {
  name: "Home",

  components: {
    HeroSlide,
    Ecoitem,
    NewsSection,
    PartnerList,
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

.about_content button {
  border: 2px solid black;
  border-radius: 8px;
  height: 60px;
  width: 200px;
  transition: all ease-in-out 0.5s;
  font-size: var(--step--1);
}

.about_content button:hover {
  background: black;
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

.text_content button {
  width: 200px;
  height: 60px;
  font-weight: 500;
  border: 2px solid white;
  background: transparent;
  color: white;
  border-radius: 8 2px;
  font-size: var(--step-0);
  transition: all ease-in-out 0.5s;
}

.text_content button:hover {
  background: black;
  border-color: black;
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

.about_hgt_btn_container button {
  width: 200px;
  height: 60px;
  font-weight: 500;
  border: 2px solid white;
  background: transparent;
  color: white;
  border-radius: 2px;
  font-size: var(--step-0);
  transition: all ease-in-out 0.3s;
  margin-bottom: 20px;
}

.about_hgt_btn_container button:hover {
  background: black;
  border-color: black;
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

.about_ecosystem_btn_cont button {
  border: 2px solid black;
  border-radius: 2px;
  height: 60px;
  width: 200px;
  transition: all ease-in-out 0.5s;
  font-size: var(--step--1);
}

.about_ecosystem_btn_cont button:hover {
  background: black;
  color: white;
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
  min-height: 600px;

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
  margin-top: 20px;
}
/* Max screen of 768px */
 @media screen and (max-width: 768px) {
  .partner_container {
    margin-bottom: 70px;
  }
}

.partner_container h3 {
  font-size: var(--step-2);
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: white;
}



/* News Section */
.news {
  min-height: 500px;
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
