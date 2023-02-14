<template>
  <header class="header" v-bind:class="{ 'header-open': showMenu }">
    <div class="header_desktop_bg">
      <div class="header_container">
        <div class="logo">
          <router-link @click="closeMenu" to="/">
            <img
              class="logo_desktop"
              src="../assets/image/hypatia_full__logo_b.webp"
              alt="Logo"
              title="Hypatia Games Logo"
              loading="eager"
            />
            <img
              class="logo_mobile"
              src="../assets/image/hypatia_full__logo_w.webp"
              alt="Logo"
              title="Hypatia Games Logo"
              loading="eager"
            />
          </router-link>
        </div>

        <div>
          <nav class="mobile_nav" v-if="showMenu" v-bind:class="{ 'menu-hidden': !showMenu }">
            <div class="mobile_nav_container">
              <ul class="mobile_nav_list">
                <li>
                      <router-link @click="closeMenu" to="/">HOME</router-link>
                </li>
                <li class="dropdown_mobile">
                   <a href="#" class="dropbtn">GAMES</a>
                    <div class="dropdown_content_mobile">
                      <a href="https://flamingwheelz.com/" target="_blank">FlamingWheelz</a> 
                    </div>
                </li>
                <li>
                      <router-link @click="closeMenu" to="/hgt">HGT TOKEN</router-link>
                </li>
                <li class="dropdown_mobile">
                     <a href="#"  class="dropbtn">WHITEPAPER</a>
                      <div class="dropdown_content_mobile">
                        <a href="https://hypatia-games.gitbook.io/flaming-book/" target="_blank">FlamingWheelz</a> 
                        <a href="https://hypatia-games.gitbook.io/hypatia-holdings-hypatia-games-whitepaper/" target="_blank">Hypatia Games</a> 
                      </div>
                </li>
              </ul>
            </div>
          </nav>

          <!-- Mobile Icon -->
          <div @click="toggleMenu" class="menu_btn" v-bind:class="{ 'btn-open': showMenu }">
            <font-awesome-icon icon=" fa-solid fa-bars" />
          </div>

          <!-- Desktop View -->
          <nav class="desktop_nav_item">
            <ul class="desktop_nav_list">
              <li class="nav_item">
                <router-link to="/">HOME</router-link>
              </li>

              <li class="dropdown">
                <a href="#" class="dropbtn">GAMES</a>
                <div class="dropdown-content">
                  <a href="https://flamingwheelz.com/" target="_blank">FlamingWheelz</a> 
                </div>
              </li>

              <li class="nav_item">
                <router-link to="/hgt">HGT TOKEN</router-link>
              </li>

              <li class="dropdown">
                <a href="#"  class="dropbtn">WHITEPAPER</a>
                <div class="dropdown-content">
                  <a href="https://hypatia-games.gitbook.io/flaming-book/" target="_blank">FlamingWheelz</a> 
                  <a href="https://hypatia-games.gitbook.io/hypatia-holdings-hypatia-games-whitepaper/" target="_blank">Hypatia Games</a> 
                </div>
              </li>
            </ul>

            <ul class="nav_social_list">
              <li>
                <a href="https://twitter.com/Hypatia_Games" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/v5R6Cf5NGW" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-discord" />
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/v5R6Cf5NGW" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-telegram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@hypatiagames" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-youtube" />
                </a>
              </li>
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
};
</script>


<style scoped>
.header {
  position: relative;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  justify-content: center;
  /* border: 1px solid green; */
}

.header_container {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo .logo_desktop {
  display: none;
}

.logo .logo_mobile {
  display: block;
  width: 80px;
  height: 100%;
}

.header_desktop_bg {
  padding: 5px 0;
}

/* Lower than 1024px  */
@media screen and (max-width: 1024px) {
  .header_container {
    justify-content: space-between;
    /* border: 1px solid green; */
  }
}

/* Mobile Styling */
.mobile_nav {
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 4;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--secondary-black);
}

.mobile_nav_list {
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
}

.mobile_nav_list li {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.mobile_nav .mobile_nav_list li a {
  color: var(--primary-white);
  font-size: var(--step-1);
  width: 100%;
  font-weight: 400;
  text-align: center;
  padding: 20px;
  transition: all ease-in-out 0.5s;
}

.mobile_nav_list li a:hover {
  background: var(--tertiary-pink-accent-2);
}


.dropdown_content_mobile {
  display: none;
  /* border: 1px solid red; */
}

.dropdown_content_mobile a {
  padding: 20px;
  text-decoration: none;
  display: block;
  font-size: var(--step-1) !important;
  transition:  all ease-in-out 0.5s;
  border: 1px solid  var(--secondary-black-soft);
  background: var(--secondary-black-soft);
}

.dropdown_content_mobile a:hover {
  background: var(--secondary-black-soft) !important;
  color: var(--tertiary-pink-accent-2) !important;
}

.dropdown_mobile:hover .dropdown_content_mobile {
    display: block;
    transition:  all ease-in-out 0.5s;
  
}
.dropdown_mobile:hover > a {
  background-color: var(--tertiary-pink-accent-2);
  color: var(--primary-white);
}



/* desktop not to display on mobile */
.desktop_nav_item {
  display: none;
}

.menu-hidden {
  display: none;
}

.header-open {
  background: var(--secondary-black);
  border-bottom: 1px solid var(--primary-white-soft);
  /* border: 1px solid red; */
}

.menu_btn {
  color: var(--primary-white);
  border-style: none;
  font-size: var(--step-4);
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}



/* Desktop Styling */
@media screen and (min-width: 1024px) {
  .mobile_nav {
    display: none;
  }

  .menu_btn {
    display: none;
  }

  .header_desktop_bg {
    background: var(--primary-white);
    margin-top: 40px;
    opacity: 0.9;
  }

  .logo .logo_desktop {
    display: block;
    width: 100px;
    height: auto;
  }

  .logo .logo_mobile {
    display: none;
  }

  .desktop_nav_item {
    display: block;
    display: flex;
  }

  .desktop_nav_list {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
    padding: 10px;
  }

  .desktop_nav_list li {
    padding:  8px 0;
  }

  .desktop_nav_list li a {
    color: var(--secondary-black);
    font-size: var(--step-0);
    font-weight: 400;
    transition: all ease-in-out 0.3s;
    padding: 10px;
  }

  .desktop_nav_list .nav_item > a:hover {
    background: var(--tertiary-pink-accent-2);
    color: white;
  }

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  padding: 10px 10px !important;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 16px !important;
  background: var(--secondary-black-soft);
  color: var(--primary-white) !important;
}

.dropdown-content a:hover {
  color: var(--tertiary-pink-accent-2) !important;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover > a {
  background-color: var(--tertiary-pink-accent-2);
  color: var(--primary-white)
}

.dropdown-content a:nth-of-type(1){
  padding-top: 30px !important;
  margin-bottom: -8px;
}

}

/* Social icon */

.desktop_nav_item .nav_social_list {
  display: flex;
  gap: 20px;
  margin-left: 130px;
  color: black;
  align-items: center;
}

.desktop_nav_item .nav_social_list li {
  list-style-type: none;
  font-size: var(--step-0);
  font-weight: 400;
  transition: all ease-in-out 0.3s;
}

.desktop_nav_item .nav_social_list li a {
  color: black;
}

/* screen larger than 1440px */
@media screen and (min-width: 1440px) {
  .header_container {
    width: 80%;
  }
}
</style>
