<template>
  <!-- The Backer and Partner -->
  <section class="partner">
    <div class="partner_container">
      <div>
        <h3>Meet Our Web3 Gaming Partner and Backer</h3>
      </div>
      <div>
        <!-- <PartnerList /> -->
        <div class="partner_inner_container">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="partner_img_container">
            <a :href="partner.href">
              <img :src="partner.imgUrl" :alt="partner.name" :title="partner.name" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
import EpicGame from '../../assets/image/Epicgame.webp'
import Myria from '../../assets/image/Myria.webp'
import Klever from '../../assets/image/Klever.webp'
import Rockpaper from '../../assets/image/Rockpaper.webp'
import Unreal from '../../assets/image/Unreal.webp'
import VezaNFT from '../../assets/image/VezaNFT.webp'
import KleverKid from '../../assets/image/KleverKid.webp'
import Lucky_Unicorn from '../../assets/image/Lucky_Unicorn.webp'
import NFT_KULT from '../../assets/image/NFT-KULT.webp'
import Mobility from '../../assets/image/MobilityGood.webp'
import Blockem from '../../assets/image/Blockem.webp'



export default {
  name: 'PartnerSection',
  setup() {
     const partners = reactive([
            {
                id: 1,
                name: 'VezaNFT',
                imgUrl: VezaNFT,
                href: "https://twitter.com/VezaNFT",
            },
            {
                id: 2,
                name: 'Myria',
                imgUrl: Myria,
                href: "https://twitter.com/Myria",
            },
            {
                id: 3,
                name: 'Rockpaper',
                imgUrl: Rockpaper,
                href: "https://twitter.com/RP_Sasquatch",
            },
            {
                id: 4,
                name: 'NFT_KULT',
                imgUrl: NFT_KULT,
                href: "https://twitter.com/NFT_KULT",
            },
            {
                id: 5,
                name: 'Mobility',
                imgUrl: Mobility,
                href: "https://twitter.com/MobilizingGood",
            },
            {
                id: 6,
                name: 'Blockem',
                imgUrl: Blockem,
                href: "https://twitter.com/Blockem_eth",
            },
            {
                id: 7,
                name: 'KleverKid',
                imgUrl: KleverKid,
                href: "https://twitter.com/kleverkid_coin",
            },
            {
                id: 8,
                name: 'Lucky_Unicorn',
                imgUrl: Lucky_Unicorn,
                href: "#",
            },
             {
                id: 9,
                name: 'Unreal',
                imgUrl: Unreal,
                href: "https://twitter.com/UnrealEngine",
            },
            
            {
                id: 10,
                name: 'Klever',
                imgUrl: Klever,
                href: "https://twitter.com/klever_io",
            },
           
            {
                id: 11,
                name: 'EpicGame',
                imgUrl: EpicGame,
                href: "https://twitter.com/EpicGames",
            },
            
        ])


    return { partners };
  },
};
</script>

<style  scoped>
/* The Partner */
.partner {
  min-height:500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}

.partner_container {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 70px;
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .partner_container {
    width: 80%;
  }
}

.partner_container h3 {
  font-size: var(--step-2);
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: white;
}

.partner_img_container {
    /* border: 1px solid  green; */
    height: 120px;
    width: 120px;
}

@media screen and (min-width: 1024px) {
    .partner_img_container {
        height: 150px;
        width: 150px;
    }
}
    

.partner_img_container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    transition: 0.5s;
}

.partner_inner_container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    margin: auto;
    padding: 20px 10px;
}

@media screen and (min-width: 1024px) {
    .partner_inner_container {
        gap: 100px;
    }
}
    

</style>