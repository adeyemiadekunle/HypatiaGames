<template>
    <section class="trailer">
      <div class="trailer_container">
        <div class="video_container">
         <iframe  src="https://www.youtube.com/embed/aENNl1WDTto" title="Part 2 of Flaming Wheelz Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "TrailerSection",
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>

.trailer {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trailer_container {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 20px;

  
}

@media screen and (min-width: 1024px) {
  .trailer_container {
    margin-top: 50px;
    margin-bottom: 100px;
  }
}
  

.video_container {
  width: 100%;
  height: 300px;
}

@media screen and (min-width: 1024px) {
  .video_container {
    width: 80%;
    height: 550px;
  }
}

.trailer_container iframe {
  width: 100%;
  height: 100%;
}


</style>