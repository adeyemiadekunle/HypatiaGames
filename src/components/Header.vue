<template>
  <header class="header" v-bind:class="{ 'header-open': showMenu }">
    <div class="header_desktop_bg">
      <div class="header_container">
        <div class="logo" >
          <router-link @click="closeMenu" to="/"> Hypatia Games </router-link>
        </div>
        <div>
          <nav class="mobile_nav_item" v-if="showMenu" v-bind:class="{ 'menu-hidden': !showMenu }">
            <div class="mobile_nav_container">
              <router-link @click="closeMenu" to="/">HOME</router-link>
              <a href="#" target="_top">GAMES</a>
              <router-link @click="closeMenu" to="/hgt">HGT TOKEN</router-link>
              <!-- <a  @click="closeMenu" href="#about" target="_top">ABOUT</a> -->
              <a href="#" target="_top">WHITEPAPER</a>
            </div>
          </nav>
          <!-- Mobile Icon -->
          <div @click="toggleMenu" class="menu_btn" v-bind:class="{ 'btn-open': showMenu }">
            <font-awesome-icon icon=" fa-solid fa-bars" />
          </div>

        <!-- Desktop View -->
          <nav class="desktop_nav_item">
            <router-link to="/">HOME</router-link>
            <a href="#" target="_top">GAMES</a>
            <router-link to="/hgt">HGT TOKEN</router-link>
            <!-- <a href="#about" target="_top">ABOUT</a> -->
            <a href="#" target="_top">WHITEPAPER</a>
            <ul>
              <li>facebook</li>
              <li>twitter</li>
              <li>discord</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script >

import { ref } from "vue";

export default {
  name: "Header",
  setup() {
    let showMenu = ref(false);

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;

      if (showMenu.value === true) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    const closeMenu = () => {
      showMenu.value = false;
      if (showMenu.value === false) {
        document.body.classList.remove("no-scroll");
      }
    };

    return {
      showMenu,
      toggleMenu,
      closeMenu,
    };
  },

}
</script>


<style scoped>


.header {
  position: relative;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
}

.header_container {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
}

/* Lower than 1024px  */
@media screen and (max-width: 1024px) {
  .header_container {
     justify-content: space-between;
  }
  
}



/* Mobile Styling */
.mobile_nav_item {
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 4;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--secondary-black);
}

.logo a {
  color: var(--primary-white);
  font-weight: 600;
  font-size: var(--step-2);
  transition: all ease-in-out 0.5s;
}

/* .logo-open a {
  color: var(--secondary-black);
} */

.mobile_nav_container {
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  padding: 10px 0;
  width: 95%;
  margin: 0 auto;
}

.mobile_nav_item .mobile_nav_container a {
  color: var(--primary-white);
  font-size: var(--step-1);
  width: 100%;
  font-weight: 400;
  text-align: center;
  padding: 15px;
  transition: all ease-in-out 0.3s;
}

.mobile_nav_item .mobile_nav_container a:hover {
  background: var(  --tertiary-pink-accent-2);
}

.desktop_nav_item {
  display: none;
}

.menu-hidden {
  display: none;
}

.header-open {
  background: var(--secondary-black);
  border-bottom: 1px solid var(--primary-white-soft);
}

.menu_btn {
  padding: 5px 15px;
  color: var(--primary-white);
  border-style: none;
  font-size: var(--step-4);
  transition: all ease-in-out 0.3s;
}

/* .btn-open {
  color: var(--secondary-black);
} */




/* Desktop Styling */
@media screen and (min-width: 1024px) {
  .header_desktop_bg {
    background: var(--primary-white);
    margin-top: 40px;
    opacity: 0.9;
    padding: 16px 0;
  }

  .logo a {
    color: var(--secondary-black);
  }

  .desktop_nav_item {
    display: block;
    display: flex;
    gap: 20px;
    margin-left: 100px;
   
  }

  .desktop_nav_item a {
    color: var(--secondary-black);
    font-size: var(--step-0);
    font-weight: 400;
    transition: all ease-in-out 0.3s;
    padding:  10px;

  }

  .desktop_nav_item a:hover {
   background: var(  --tertiary-pink-accent-2);
   color: white;

  }

  /* .desktop_nav_item a:active {
    background: var(  --tertiary-pink-accent-2);
    color: white;
  } */

  .mobile_nav_item {
    display: none;
  }

  .menu_btn {
    display: none;
  }
}

/* Social icon */
.desktop_nav_item ul {
  display: flex;
  gap: 20px;
  margin-left: 60px;
  color: black;
  align-items: center;
}

.desktop_nav_item ul li {
  list-style-type: none;
  font-size: var(--step-0);
  font-weight: 400;
  transition: all ease-in-out 0.3s;
  color: black;
}


/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .header_container {
    width: 85%;
  }
}
</style>
