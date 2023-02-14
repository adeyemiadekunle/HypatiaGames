<template>
  <section class="about_us" id="about">
    <div class="about_container">
      <div class="about_content">
       <h2>We are Hypatia Games</h2>
        <p>
          Hypatia Games is an innovative blockchain-based real-life umbrella
          group of businesses that allows investors to earn passive income. It
          is the next-generation blockchain solution that seamlessly blends the
          best of web2 and web3 technology. Our platform offers unparalleled
          security, transparency, and decentralization, powered by real-world
          asset backing. Experience the future of finance and investment, today.
        </p>
        <div></div>
        <h2>Our Mission</h2>
        <p>
          "Our mission is to empower players and revolutionize the gaming
          industry through decentralized technology, fostering player ownership,
          creativity, and community building."
        </p>
 
      
      </div>
    </div>
  </section>
</template>

<script >
export default {
  name: "AboutSection",

   setup() {
    return {};
  },
};
</script>

<style  scoped>

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
  /* margin-bottom: 30px; */
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .about_container {
    width: 80%;
  }
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
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: white;
}
.about_content div {
  width: 100px;
  border: 1px solid var(--tertiary-pink-accent-2);
  margin-bottom: 2rem;
  border-color: var(--tertiary-pink-accent-2);
}

.about_content p {
  text-align: center;
  margin-bottom: 2rem;
  font-size: var(--step-1);
  color: white;
}


</style>