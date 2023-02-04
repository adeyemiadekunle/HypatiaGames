<template>
  <div class="news_section">
    <div class="news_section_container">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  </div>
</template>

<script setup>
import NewsCard from "./NewsCard.vue";

const data = [
  {
    id: 1,
    imgUrl: '',
    title: '',
    link: '',
  },
   {
    id: 2,
    imgUrl: '',
    title: '',
    link: '',
  },
   {
    id: 3,
    imgUrl: '',
    title: '',
    link: '',
  },
   {
    id: 4,
    imgUrl: '',
    title: '',
    link: '',
  }
]




</script>

<style scoped>
.news_section {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.news_section_container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center ;
    
}

@media screen and (min-width: 1024px) {
    .news_section_container {
        width: 100%;
         flex-direction: row;
     
      
    }
    
}
</style>