<template>
  <!-- News Section -->
  <section class="news">
    <div class="news_container">
      <div class="news_heading">
        <h3>Latest Update & News</h3>
        <a href="https://medium.com/@HypatiaGames" target="_blank">Read More</a>
      </div>
      <div class="news_list">
        <!-- <NewsSection /> -->
        <div class="news_section">
          <div class="news_section_container" >
            <template  v-for="blog in blogs" :key="blog.id">
              <NewsCard
             :imgUrl="blog.imgUrl"
             :heading="blog.heading"
             :alt="blog.heading"
             :title="blog.heading"
             :href="blog.href"
             />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsCard from "../Card/NewsCard.vue";
import Hypatia_token from "../../assets/image/hypatia_token.webp"
import Partnership from "../../assets/image/Partnership_with_VezaNFT.webp"
import HypatiaGames from "../../assets/image/HypatiaGames.webp"
import { reactive } from "vue";
export default {
    name: "NewsSection",
    components: {
        NewsCard,
    },
  setup() {

    const blogs = reactive([
      {
        id: 1,
        imgUrl: Hypatia_token,
        heading: "Hypatia Games Token (HGT): A Jadeite among Gems",
        href: "https://medium.com/@HypatiaGames/hypatia-games-token-hgt-a-jadeite-among-gems-f3f7d7144033" ,
      },
       {
        id: 2,
        imgUrl: HypatiaGames,
        heading: "The Hypatia Games Ecosystem (A Hidden Gem)",
        href: "https://medium.com/@HypatiaGames/the-hypatia-games-ecosystem-a-hidden-gem-4f5977ae5a59",
      },
      {
        id: 3,
        imgUrl: Partnership,
        heading: "Partnership With VezaNFT",
        href: "https://medium.com/@HypatiaGames/partnership-with-vezanft-8dc895583a69",
      },
      
      
    ])

    return {blogs};
  },
};
</script>

<style  scoped>
/* News Section */
.news {
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.news_container {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 20px;
}

/* Larger screen than 1440px */
@media screen and (min-width: 1440px) {
  .news_container {
    width: 80%;
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
  color: #cccccc;
}

.news_list {
  margin-top: 40px;
}


.news_section {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.news_section_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center ;
    
}

@media screen and (min-width: 1024px) {
    .news_section_container {
        width: 100%;
        gap: 50px;
        flex-direction: row;
      
    }
    
}
</style>