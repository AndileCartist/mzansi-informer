<template>
  <div class="nav-main-cont">
    <div class="cont" :class="{ scrollNav: scrollPosition > 299 }">
      <img
        src="../assets/menu-lines-list_2931181.svg"
        alt="open navigation"
        class="nav-btn open-btn nav-btn-width"
        @click="toggleNav()"
      />
      <router-link to="/">
        <img
          :class="{ display: scrollPosition > 299 }"
          class="logo"
          src="../assets/mylogo.jpg"
          alt=""
        />
        <img
          :class="{ opacity: scrollPosition > 299 }"
          class="logo-2"
          src="../assets/mylogo-removebg-preview.jpg"
          alt=""
        />
      </router-link>
      <div class="nav nav-black" :class="{ visible: openNav }">
        <div class="nav nav-red" :class="{ visible: openNav }">
          <div class="nav nav-white" :class="{ visible: openNav }">
            <img
              src="../assets/iconfinder_exit-delete-remove-close-x_2931151.svg"
              alt="close navigavtion"
              class="nav-btn close-btn"
              style=" width: 11%;"
              @click="toggleNav()"
            />
            <button class="nav-btn close-btn">
              <i class="fas fa-times"></i>
            </button>

            <!--      <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
            alt="Logo"
            class="logo"
          />
-->
            <ul class="list">
              <li @click="toggleHeader(1)">
                <a href="#"
                  ><img
                    src="../assets/iconfinder_down-bottom-arrow_2931160.svg"
                    alt=""
                    class="drop-icon"
                  />
                  for-you</a
                >
              </li>
              <li
                :class="{
                  closeNavigation: !openHeader,
                  openNavigation: openHeader,
                }"
              >
                <ul>
                  <li @click="toggleNav()">
                    <router-link to="signin">sign-in</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="signup">sign-up</router-link>
                  </li>
                </ul>
              </li>
              <li @click="toggleHeader(2)">
                <a href="#"
                  ><img
                    src="../assets/iconfinder_down-bottom-arrow_2931160.svg"
                    alt=""
                    class="drop-icon"
                  />categories</a
                >
              </li>
              <li
                :class="{
                  closeNavigation: !openHeader2,
                  openNavigation: openHeader2,
                }"
              >
                <ul>
                  <li @click="toggleNav()">
                    <router-link to="general">general</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="business">business</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="entertainment">entertainment</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="health">health</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="science">science</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="sport">sport</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="technology">technology</router-link>
                  </li>
                </ul>
              </li>
              <li @click="toggleHeader(3)">
                <a href="#"
                  ><img
                    src="../assets/iconfinder_down-bottom-arrow_2931160.svg"
                    alt=""
                    class="drop-icon"
                  />accounts</a
                >
              </li>
              <li
                :class="{
                  closeNavigation: !openHeader3,
                  openNavigation: openHeader3,
                }"
              >
                <ul>
                  <li @click="toggleNav()">
                    <router-link to="signin">sign-in</router-link>
                  </li>
                  <li @click="toggleNav()">
                    <router-link to="signup">sign-up</router-link>
                  </li>
                </ul>
              </li>
               <li @click="toggleNav()">
                    <router-link to="/">about</router-link>
                  </li>
                  
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="cont-cover"></div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      openNav: false,
      openHeader: false,
      openHeader2: false,
      openHeader3: false,
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  computed: {},
  methods: {
    updateScroll() {
      return (this.scrollPosition = window.top.scrollY);
    },
    toggleNav() {
      return this.openNav ? (this.openNav = false) : (this.openNav = true);
    },
    toggleHeader(index) {
      if (index === 1) {
        return this.openHeader
          ? (this.openHeader = false)
          : (this.openHeader = true);
      } else if (index === 2) {
        return this.openHeader2
          ? (this.openHeader2 = false)
          : (this.openHeader2 = true);
      } else {
        return this.openHeader3
          ? (this.openHeader3 = false)
          : (this.openHeader3 = true);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.cont {
  height: 60px;
  background: #7433c1;
  position: fixed;
  border-bottom: 2.5px solid rgb(34, 31, 31);
  width: 100%;
  z-index: 12;
}
.cont-cover {
  height: 60px;
  background: black;
  width: 100%;
}
.nav-btn-width {
  width: 11%;
}
.scrollNav {
  background-color: rgba(239, 239, 239, 0.98);
  color: rgb(46, 45, 45) !important;
  transition: background-color 0.3s linear;
}
.logo,
.logo-2 {
  width: 200px;
  position: absolute;
  transition: opacity 0.3s linear;
  left: 25%;
}
.opacity {
  transition: opacity 0.3s linear;
  opacity: 0;
}
.logo {
  opacity: 0;
}
.display {
  transition: opacity 0.3s linear;
  opacity: 1;
}
@media only screen and (min-width: 473px) {
  .cont {
    height: 80px;
  }
  .cont-cover {
    height: 80px;
  }
  .nav-btn-width {
    width: 9%;
  }
}
@media only screen and (min-width: 769px) {
  .nav-main-cont {
    display: none;
  }
}
.text {
  text-transform: uppercase;
}

.drop-icon {
  width: 4%;
  padding: 0 3px;
}

.nav-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
}

.open-btn {
  position: fixed;
  top: 10px;
  left: 20px;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.nav.visible {
  transform: translateX(0);
}

.nav-black {
  background-color: rgb(34, 31, 31);
  width: 100%;
  max-width: 480px;
  min-width: 320px;
  transition-delay: 0.4s;
}

.nav-black.visible {
  transition-delay: 0s;
}

.nav-red {
  background-color: #c13339;
  width: 95%;
  transition-delay: 0.2s;
}

.nav-red.visible {
  transition-delay: 0.2s;
}

.nav-white {
  background-color: #efefef;
  width: 85%;
  padding: 20px;
  position: relative;
  transition-delay: 0s;
}

.nav-white.visible {
  transition-delay: 0.4s;
}

.close-btn {
  opacity: 0.3;
  position: absolute;
  top: 40px;
  right: 30px;
}

.list {
  list-style-type: none;
  padding: 0;
}

.list li {
  margin: 20px 0;
}

.list li a {
  color: rgb(34, 31, 31);
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
}

.list ul {
  list-style-type: none;
  padding-left: 20px;
}
.closeNavigation {
  /* display: none;*/
  max-height: 0;
  /*and eventually delay an overflow:auto; */
  overflow: hidden;
  transition: max-height 0.5s, overflow 0s;
}
.openNavigation {
  /* display: none;*/
  overflow: hidden;
  max-height: 286px;
  transition: max-height 0.8s, overflow 0.8s 0.8s;
  transition-timing-function: ease-out;
}
</style>
