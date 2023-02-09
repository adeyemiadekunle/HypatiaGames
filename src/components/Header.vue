<template>
  <header class="header" v-bind:class="{ 'header-open': showMenu }">
    <div class="header_desktop_bg">
      <div class="header_container">
        <div class="logo">
          <router-link @click="closeMenu" to="/">
            <img
              class="logo_desktop"
              src="../assets/image/hypatia_full__logo_b.avif"
              alt="Logo"
            />
            <img
              class="logo_mobile"
              src="../assets/image/hypatia_full__logo_w.avif"
              alt=""
            />
          </router-link>
        </div>

        <div>
          <nav
            class="mobile_nav_item"
            v-if="showMenu"
            v-bind:class="{ 'menu-hidden': !showMenu }"
          >
            <div class="mobile_nav_container">
              <router-link @click="closeMenu" to="/">HOME</router-link>
              <a href="#" target="_top">GAMES</a>
              <router-link @click="closeMenu" to="/hgt">HGT TOKEN</router-link>
              <!-- <a  @click="closeMenu" href="#about" target="_top">ABOUT</a> -->
              <a href="#" target="_top">WHITEPAPER</a>
            </div>
          </nav>
          <!-- Mobile Icon -->
          <div
            @click="toggleMenu"
            class="menu_btn"
            v-bind:class="{ 'btn-open': showMenu }"
          >
            <font-awesome-icon icon=" fa-solid fa-bars" />
          </div>

          <!-- Desktop View -->
          <nav class="desktop_nav_item">
            <ul class="desktop_nav_list">
              <li class="nav_item">
                <router-link to="/">HOME</router-link>
              </li>

              <li  class="nav_item">
                <a href="#" @click="toggleDropdown" >GAMES</a>
                <ul v-if="showDropdown" class="dropdown"  >
                  <li>
                    <a href="https://flamingwheelz.com/" target="_blank">FlamingWheelz</a>
                  </li>
                </ul>
              </li>

              <li class="nav_item">
                <router-link to="/hgt">HGT TOKEN</router-link>
              </li>

              <li  class="nav_item">
                <a href="#" @click="toggleDropdown" >WHITEPAPER</a>
                <ul v-if="showDropdown" class="dropdown"  >
                  <li>
                    <a href="https://hypatia-games.gitbook.io/hypatia-holdings-hypatia-games-whitepaper/" target="_blank
                    ">Hypatia Games</a>
                  </li>
                  <li>
                    <a href="https://hypatia-games.gitbook.io/flaming-book/" target="_blank">FlamingWheelz</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="nav_social_list">
              <li>
                <a href="https://twitter.com/Hypatia_Games">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon icon="fa-brands fa-discord" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon icon="fa-brands fa-telegram" />
                </a>
              </li>
              <li>
                <a href="#">
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
    let showDropdown = ref(false);

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

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    }

    return {
      showMenu,
      toggleMenu,
      closeMenu,
      toggleDropdown,
      showDropdown,
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
}

.logo .logo_desktop {
  display: none;
}

.logo .logo_mobile {
  display: block;
  width: 80px;
  height: 100%;
}

/* Lower than 1024px  */
@media screen and (max-width: 1024px) {
  .header_container {
    justify-content: space-between;
    /* border: 1px solid green; */
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
  background: var(--tertiary-pink-accent-2);
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
 
 
  .mobile_nav_item {
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
    height: 100%;
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
  
.dropdown {
  display: none;
  position: absolute;
  background-color: var(--tertiary-pink-accent-2);
  z-index: 1;
  padding: 10px 0;
  list-style: none;
}

.dropdown li {
  padding-top: 10px;
}

.dropdown li a{
   color: white;
   font-size: var(--step--1);
}

.nav_item:hover .dropdown {
  display: block;

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
    width: 85%;
  }
}
</style>
