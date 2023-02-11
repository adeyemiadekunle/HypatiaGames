<template>
  <div class="card_container">
    <div class="card">
      <div class="card_img_container">
        <img
          :src="imgUrl"
          :alt="alt"
          style="width: 100%"
        />
        <p class="status">{{status}} </p>
      </div>
      <div class="container">
        <h3><b>{{title}}</b></h3>
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
  props: ['imgUrl', 'status', 'title', 'text', 'alt']
};
</script>

<style>
.card_container {
  width: 100%;
}

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
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
  filter: blur(20px);
  
}

.card_img_container .status {
  position: absolute;
  top: 0;
  padding-left: 15px;
  padding-top: 15px;
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