<template>
  <div class="news_card_container">
    <div class="news_card">
      <img
        src="https://picsum.photos/800/600?random=4"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="text_container">
        <h4>
          GAME ON: Web3 Insight from llker Unsal at Eldarun. Now partnerd with
          Myria
        </h4>
        <a href="">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
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
  color: brown;
  padding-top: 15px;
  font-size: var(--step--1);
}
</style>