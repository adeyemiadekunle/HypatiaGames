<template>
  <div class="news_card_container">
    <div class="news_card">
      <img
        :src="imgUrl"
        :alt="alt"
        :title="title"
        loading="lazy"
        style="width: 100%"
      />
      <div class="text_container">
        <h4>
          <a :href="href" target="_blank">{{heading}}</a>
        </h4>
        <a :href="href"  target="_blank">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["imgUrl", "heading", "title", "alt", 'href']
};


</script>




<style  scoped>
.news_card_container {
  width: 100%;
  /* border: 1px solid red; */
}

@media screen and (min-width: 1024px) {
  .news_card_container {
    width: 30%;
  }
}

.news_card {
  transition: 0.3s;
  width: 100%;
  margin: auto;
  border-radius: 5px;
}

.news_card img {
 height: 200px; 
  border-radius: 8px;
}

.text_container {
  padding: 10px 0 10px 0;
  color: white;
}

.text_container a {
  text-decoration: underline;
  color: #CCCCCC;
  padding-top: 15px;
  font-size: var(--step--1);
}

.text_container > h4 a {
  font-size: var(--step-0);
  text-decoration: none;
  color: var(--primary-white);
}
</style>