<template>
<div class="partner_outer_container">
    <div v-for= 'partner in partners' :key='partner.id'   class="partner_img_container">
        <a :href="partner.href">
            <img :src="partner.imgUrl" :alt="partner.name">
        </a>
        
    </div>
</div>
</template>

<script>
import { reactive } from 'vue'
import EpicGame from '../assets/image/Epicgame.avif'
import Myria from '../assets/image/Myria.avif'
import Klever from '../assets/image/Klever.avif'
import Rockpaper from '../assets/image/Rockpaper.avif'
import Unreal from '../assets/image/Unreal.avif'
import VezaNFT from '../assets/image/VezaNFT.avif'
import KleverKid from '../assets/image/KleverKid.avif'
import Lucky_Unicorn from '../assets/image/Lucky_Unicorn.avif'
import NFT_KULT from '../assets/image/NFT-KULT.avif'
import Mobility from '../assets/image/MobilityGood.avif'
import Blockem from '../assets/image/Blockem.avif'


export default {
    name: 'PartnerList',
    setup () {

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
        
        return { partners}
    }
}
</script>

<style  scoped>

.partner_img_container {
    /* border: 1px solid  green; */
    max-height: 120px;
    max-width: 120px;
}

@media screen and (min-width: 1024px) {
    .partner_img_container {
        max-height: 150px;
        max-width: 150px;
    }
}
    

.partner_img_container img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    filter: grayscale(100%);
    transition: 0.5s;
}

.partner_outer_container {
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
    .partner_outer_container {
        gap: 100px;
    }
}
    



</style>