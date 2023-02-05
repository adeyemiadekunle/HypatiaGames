<template>
  <header class="header" v-bind:class="{ 'header-open': showMenu }">
    <div class="header_desktop_bg">
      <div class="header_container">
        <div class="logo" v-bind:class="{ 'logo-open': showMenu }">
          <router-link to="/"> Hypatia Games </router-link>
        </div>
        <div>
          <nav
            class="mobile_nav_item"
            v-if="showMenu"
            v-bind:class="{ 'menu-hidden': !showMenu }"
          >
            <div class="nav_container">
              <router-link @click="closeMenu" to="/">HOME</router-link>
              <router-link @click="closeMenu" to="/games">GAMES</router-link>
              <router-link @click="closeMenu" to="/ecosystem"
                >ECOSYSTEM</router-link
              >
              <router-link @click="closeMenu" to="/about">ABOUT</router-link>
            </div>
          </nav>
          <button
            @click="toggleMenu"
            class="menu_btn"
            v-bind:class="{ 'btn-open': showMenu }"
          >
            Menu
          </button>
          <nav class="desktop_nav_item">
            <router-link to="/">HOME</router-link>
            <router-link to="/games">GAMES</router-link>
            <router-link to="/ecosystem">ECOSYSTEM</router-link>
            <router-link to="/about">ABOUT</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
let showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  if (showMenu.value) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

const closeMenu = () => {
  showMenu.value = false;
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
}

.header_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0;
  width: 90%;
  margin: 0 auto;
}



.mobile_nav_item {
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 4;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}

.logo a {
  color: var(--primary-white);
  font-weight: 600;
  font-size: var(--step-2);
  transition: all ease-in-out 0.5s;
}

.logo-open a {
  color: var(--secondary-black);
}

.nav_container {
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  padding: 10px 0;
  width: 95%;
  margin: 0 auto;
}

.mobile_nav_item .nav_container a {
  color: var(--secondary-black);
  font-size: var(--step-1);
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--secondary-black);
}

.mobile_nav_item .nav_container a:hover {
  color: var(--tertiary-pink-accent-1);
}

.desktop_nav_item {
  display: none;
}

.menu-hidden {
  display: none;
}

.header-open {
  background: var(--primary-white);
  border-bottom: 1px solid var(--secondary-black-soft);
}

.menu_btn {
  padding: 12px;
  border-radius: 8px;
  background-color: var(--primary-white);
  color: var(--secondary-black);
  border-color: var(--primary-white);
  border-style: none;
}

.btn-open {
  background: var(--secondary-black);
  color: var(--primary-white);
}


/* Desktop Styling */
@media screen and (min-width: 1024px) {
  .header_desktop_bg {
    background: var(--primary-white);
    margin-top: 40px;
    opacity: 0.9;
  }

  .logo a {
    color: var(--secondary-black);
  }

  .desktop_nav_item {
    display: block;
    display: flex;
    gap: 20px;
  }

  .desktop_nav_item a {
    color: var(--secondary-black);
    font-size: var(--step-0);
    font-weight: 600;
    transition: all ease-in-out 0.3s;
    padding: 10px;
  }

  .desktop_nav_item a:hover {
    color: var(--tertiary-pink);
  }

  .mobile_nav_item {
    display: none;
  }

  .menu_btn {
    display: none;
  }
}

@media screen and (min-width: 1440px) {
  .header_container{
    width: 85%;
  }
}
</style>
