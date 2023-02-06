<template>
  <div class="card_container">
    <div class="card">
      <img
        src="https://picsum.photos/800/600?random=2"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4><b>Dex Exchange</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
}

/* .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
} */

.container {
  padding: 10px 16px;
  color: white;
}
</style>