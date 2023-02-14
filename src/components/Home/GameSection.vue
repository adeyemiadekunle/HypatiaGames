<template>
  <section class="about_game">
    <div class="game_heading">
      <div><h3>Upcoming Game</h3></div>
    </div>
    <div class="background_image">
      <div class="text_overlay">
        <div class="text_content">
          <!-- <div class="game_logo">
              <img src="../assets/image/New_Logo.webp" alt="flaming_logo" />
            </div> -->
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
</template>

<script>
import PrimaryButton from "../Button/PrimaryButton.vue";
export default {
  name: "GameSection",
  components: {
    PrimaryButton,
  },
};
</script>

<style  scoped>
/* about game */
.about_game {
  width: 100%;
  min-height: 500px;
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

.game_heading div h3 {
  text-align: center;
  color: white;
  font-size: var(--step-2);
  font-weight: 500;
}

.background_image {
  background-image: url("../../assets/image/flamingwheelz.webp");
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

/* screen larger than 1024px */
@media screen and (min-width: 1024px) {
  .text_overlay .text_content {
    width: 80%;
  }
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .text_overlay .text_content {
    width: 75%;
  }
}

/* .game_logo img {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
} */

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
</style>