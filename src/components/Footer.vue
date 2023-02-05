<template>
  <div class="footer">
    <div class="footer_container">
      <div class="join_us_container">
        <div>
            <h3>
                Join Us
            </h3>
            <p>
                To stay up to date with the latest news and updates, and sneak peeks on what the team is working on.
            </p>
        </div>
        <div>
            <ul class="social_container">
                <li>Twitter</li>
                <li>Discord</li>
                <li>Telegram</li>
                <li>Youtube</li>
            </ul>
        </div>
      </div>
      <hr class="horizontal">
      <div class="footer_content_container">
        <div class="footer_logo">
          <h3>Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              voluptates!
            </p>
         
        </div>
        <div >
            <div class="contact_us">
                <h4>Contact Us</h4>
                <p>contact@hypatiagames.net</p>
            </div>
            <div>
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Ecosystem</li>
                    <li>Whitepaper</li>
                    <li>Games</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  /* text-align: center; */
  min-height: 400px;
}

.footer_container {
    width: 90%;
    margin: 0 auto;
    /* border: 1px solid red; */
}

.join_us_container {
    margin-top: 40px;
    margin-bottom: 40px;
}

@media screen  and (min-width: 1024px){
    .join_us_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    
    }

    
}

.join_us_container h3 {
    font-size: var(--step-3);
    font-weight: 600;
    margin-bottom: 10px;
}

.social_container {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

@media screen and (min-width: 1024px) {
     .social_container{
        justify-content: right;
        gap: 30px;
    }
}

.social_container li {
list-style-type: none;
}

.horizontal {
    border: 1px solid var(--primary-white-soft);
    margin-bottom: 30px;
}
@media  screen and (min-width: 1024px) {
    
.footer_content_container {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: 1fr 1fr;
}
}

.footer_logo h3 {
    font-size: var(--step-2);
    margin-bottom: 10px;
}

.footer_logo p {
    font-size: var(--step--1);
}

 .contact_us h4 {
    margin-top: 30px;
    font-size: var(--step-1);
    /* margin-bottom: 10px; */
}

@media screen and (min-width:1024px) {

 .contact_us h4 {
    margin-top: 0;
}
    
}


.contact_us p  {
    font-size: var(--step--1);
    margin-bottom: 20px;
    
}

.footer_content_container ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media screen and (min-width: 1024px) {
   .footer_content_container ul {
    flex-direction: row;
   } 
}

.footer_content_container ul li {
    font-size: var(--step-0);
    list-style-type: none;
    font-size: var(--step--1);
}


</style>