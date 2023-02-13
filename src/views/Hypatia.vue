<template>
  <main class="hgt">
    <section class="hgt_header">
      <div>
        <h1>$HGT</h1>
        <p>
          Hypatia Game Token is a decentralized, and governance token in Hypatia
          Game ecosystem, providing sustainable economic model for the
          ecosystem. It is a utility token that can be used to pay for in-game
          items, services, and other in-game activities.
        </p>
        <hr />
      </div>
    </section>
    <!-- Token Profile -->
    <section class="token_profile">
      <div>
        <h3>Token Profile</h3>
      </div>
      <div class="profile_item_container">
        <div class="profile_item">
          <div><h3>SYMBOL</h3></div>
          <div>
            <img src="../assets/image/hypatialogo.avif" alt="">
            <span>$HGT</span></div>
        </div>
        <div class="profile_item">
          <div><h3>MULTI CHAIN</h3></div>
          <div>
             <img src="../assets/image/klevers.avif" alt="">
            <span>KLEVER</span></div>
        </div>
        <div class="profile_item">
          <div><h3>CONTRACT</h3></div>
          <div>
            <span
              ><a href="https://kleverscan.org/asset/HGT-1V37"
                >Klever (HGT-1V37)</a
              ></span
            >
          </div>
        </div>
        <div class="profile_item">
          <div><h3>TOTAL SUPPLY</h3></div>
          <div><span>444 MILLION</span></div>
        </div>
      </div>
    </section>

    <!-- Tokenomics  -->
    <section class="tokenomics">
      <div class="tokenomics_container">
        <div>
          <h3>Tokenomics</h3>
        </div>
        <div>
          <img src="../assets/image/tokenomics.avif" alt="hgt_tokenomics" />
        </div>
      </div>
    </section>

    <!-- Token Breakdown -->

    <section class="hgt_breakdown">
      <div class="hgt_breakdown_container">
        <h3>Tokenomics Breakdown</h3>
        <ul>
          <li>
            <b>ICO/Presale:</b>
            <span
              >64.82 million HGT will be distributed through presale, In this
              event, investors will deposit funds into a pool, and by the end of
              the event, the allocated HGT for that particular ICO/Presale will
              be distributed to investors’ wallets weighted by their deposit in
              the pool</span
            >
          </li>
          <li>
            <b>Project Development:</b>
            <span
              >17.76 million HGT will be used by the team for the production of
              Flaming Wheelz</span
            >
          </li>
          <li>
            <b>Foundation:</b>
            <span>17.76 million HGT will be held by the foundation</span>
          </li>
          <li>
            <b>Marketing:</b>
            <span
              >8.88 million HGT will be used by the team towards promoting
              Hypatia</span
            >
          </li>
          <li>
            <b>Core Team:</b>
            <span
              >17.76 million HGT will be locked for 4 years, and proportionally
              vested 10% every year</span
            >
          </li>
          <li>
            <b>Legal:</b>
            <span
              >4.44 million HGT will be allocated for legal matters and
              emergency funds</span
            >
          </li>

          <li>
            <b>Partnerships/Early investors Benefits:</b>
            <span
              >1.5 million HGT will be distributed to participants of the
              private sale and presale
            </span>
          </li>
          <li>
            <b>Exchange:</b>
            <span>26.64 million HGT will be used for Liquidity</span>
          </li>
          <li>
            <b>Charity:</b>
            <span
              >3.108 million HGT has been set aside to help embark on our
              charitable mission to help reduce or if possible eliminate suicide
              and to support mental health centers</span
            >
          </li>
          <li>
            <b>Giveaways:</b>
            <span>444 thousand HGT will cover giveaways for over 14 years</span>
          </li>

          <li>
             <b>Advisors:</b>
            <span>2.5 million HGT will be given to our advisors and will be vested 5% every 6 months</span>
          </li>
          <li>
             <b>Staking and Play and Earn:</b>
            <span>278.388 Million HGT will be used as rewards inside the game and staking incentivess</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Hypatia'
}

</script>

<style scoped>
.hgt {
  min-height: 100vh;
}

/* hgt token header */
.hgt_header {
  min-height: 300px;
}

.hgt_header > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 150px;
}

.hgt_header > div > h1 {
  font-size: var(--step-6);
  color: var(--primary-white);
  margin-bottom: 10px;
  font-weight: 700;
}

.hgt_header > div > p {
  font-size: var(--step-1);
  color: var(--primary-white);
  margin-bottom: 10px;
  font-weight: 400;
  text-align: center;
  width: 80%;
}

@media screen and (min-width: 1024px) {
  .hgt_header > div > p {
    width: 50%;
  }
}
.hgt_header hr {
  width: 80%;
  border: 4px solid var(--primary-white);
  margin-top: 20px;
}

/* Token profile */
.token_profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.token_profile > div:first-child h3 {
  margin-top: 50px;
  font-size: var(--step-4);
  font-weight: 700;
}

.profile_item_container {
  width: 90%;
}

@media screen and (min-width: 1024px) {
  .profile_item_container {
    width: 50%;
  }
}

.token_profile .profile_item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  white-space: wrap;
  /* border: 1px solid blue; */
}
@media screen and (min-width: 1024px) {
  .profile_item > div:first-child h3 {
    margin-left: 100px;
  }

  .profile_item > div:nth-of-type(2) {
    margin-left: 100px;
    /* text-align: right; */
  }
}

.profile_item span, span a {
  font-weight: 300;
}

.profile_item img{
  width: 30px;
  height: 20px;
  object-fit: cover;
  margin-right: 5px;
  margin-bottom: -2px;
}

/* Tokenomics */

.tokenomics {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
}

.tokenomics_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.tokenomics_container h3 {
  font-size: var(--step-4);
  font-weight: 700;
  margin-bottom: 30px;
}

@media screen and (min-width: 1024px) {
  .tokenomics_container {
    width: 90%;
    margin-top: 70px;
    margin-bottom: 70px;
  }
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .tokenomics_container {
    width: 80%;
  }
}

.tokenomics_container > div:nth-of-type(2) {
  width: 100%;
  /* border: 1px solid red; */
}

@media screen and (min-width: 1024px) {
  .tokenomics_container > div:nth-of-type(2) {
    width: 70%;
  }
}

.tokenomics_container > div:nth-of-type(2) img {
  width: 100%;
}

/* Tokenomics Breakdown */

.hgt_breakdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
}

.hgt_breakdown_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 30px;
  margin-bottom: 70px;
  /* border: 1px solid red; */
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .hgt_breakdown_container {
    width: 80%;
  }
}

.hgt_breakdown_container h3 {
  font-size: var(--step-3);
  font-weight: 700;
  margin-bottom: 10px;
}


.hgt_breakdown_container ul li {
  padding-top: 20px;
  list-style-type: square;
  font-size: var(--step-1);
}
.hgt_breakdown_container ul span {
  padding-left: 10px;
  font-size: var(--step-0);
  font-weight: 300;
}

</style>