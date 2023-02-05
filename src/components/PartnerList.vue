<template>
<div class="partner_outer_container">
    <div v-for= 'partner in partners' :key='partner.id'   class="partner_img_container">
        <img :src="partner.imgUrl" :alt="partner.name">
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


export default {
    name: 'PartnerList',
    setup () {

        const partners = reactive([
            {
                id: 1,
                name: 'Epicgames',
                imgUrl: EpicGame,
            },
            {
                id: 2,
                name: 'Myria',
                imgUrl: Myria,
            },
            {
                id: 3,
                name: 'Klever',
                imgUrl: Klever,
            },
            {
                id: 4,
                name: 'Rockpaper',
                imgUrl: Rockpaper,
            },
            {
                id: 5,
                name: 'Unreal Engine',
                imgUrl: Unreal
            },
            {
                id: 6,
                name: 'VezaNFT',
                imgUrl: VezaNFT,
            },
            {
                id: 7,
                name: 'KleverKid',
                imgUrl: KleverKid,
            },
            {
                id: 8,
                name: 'Lucky_Unicorn',
                imgUrl: Lucky_Unicorn,
            }
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