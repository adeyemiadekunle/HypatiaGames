<template>
  <div class="card_container">
    <div class="card">
      <div class="card_img_container">
        <img
          :title="title"
          :src="imgUrl"
          :alt="alt"
          loading="lazy"
          style="width: 100%"
        />
        <p class="status">{{status}} </p>
      </div>
      <div class="container">
        <h3><b>{{heading}}</b></h3>
        <p>
          {{text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['imgUrl', 'status','heading', 'title', 'text', 'alt']
};
</script>

<style>
.card_container {
  width: 100%;
}

.card {
  transition: 0.3s;
  width: 100%;
  margin: auto;
  border: 1px solid white;
  border-radius: 5px;
  height: 400px;
  max-width: 400px;
}

.card_img_container img {
  height: 250px;
  position: relative;
  object-fit: cover;
  
}

.card_img_container .status {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 15px;
  padding-top: 15px;
  color: var( --tertiary-pink-accent-2);
}

.container {
  padding: 16px 16px;
  color: white;
  height: 100%;
}

.container p {
  font-weight: 300;
}
</style>