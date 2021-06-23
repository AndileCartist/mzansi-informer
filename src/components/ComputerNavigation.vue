<template>
  <div class="com-nav">
    <div class="container" :class="{ scrollNav: scrollPosition > 379 }">
      <router-link to="/">
        <img
          :class="{ display: scrollPosition > 379 }"
          class="logo"
          src="../assets/mylogo.jpg"
          alt=""
        />
        <img
          :class="{ opacity: scrollPosition > 379 }"
          class="logo-2"
          src="../assets/mylogo-removebg-preview.jpg"
          alt=""
        />
      </router-link>

      <ul class="list">
        <li
          @click="
            toggleNav(1);
            getPresser(1);
          "
        >
          <a
            :class="{
              highlight: activeKey === 1,
              scrollNav: scrollPosition > 379,
            }"
          >
            for-you</a
          >
        </li>
        <li
          @click="
            toggleNav(2);
            getPresser(2);
          "
        >
          <a
            :class="{
              highlight: activeKey === 2,
              scrollNav: scrollPosition > 379,
            }"
            >categories</a
          >
        </li>
        <li>
          <a
            :class="{
              highlight: activeKey === 3,
              scrollNav: scrollPosition > 379,
            }"
            >about</a
          >
        </li>
        <li v-if="userData === null">
          <router-link :class="{ scrollNav: scrollPosition > 379 }" to="/signin"
            >sign-in</router-link
          >
        </li>
        <li v-if="userData === null">
          <router-link :class="{ scrollNav: scrollPosition > 379 }" to="/signup"
            >sign-up</router-link
          >
        </li>
        <li @click="logout()" v-else>
          <button :class="{ scrollNav: scrollPosition > 379 }">log-out</button>
        </li>
      </ul>
    </div>
    <div class="container-cover"></div>
    <div
      :class="{
        closeNavigation: !openNav,
        openNavigation: openNav,
      }"
    >
      <div style="height: 224px">
        <ul class="dynamic-links">
          <li v-for="(link, index) of links(activeKey)" :key="index">
            <router-link :to="'/' + link">{{ link }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "web-navigation",
  data() {
    return {
      openNav: false,
      educationLinks: ["signin", "signup"],
      strategiesLinks: [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
      ],
      brokerLinks: [
        "well known brokers",
        "rsa regulated brokers",
        "brokers with best deals",
      ],
      activeKey: 0,
      scrollPosition: null,
    };
  },
  watch: {
    // call again the method if the route changes
    $route: "closeNav",
  },
  methods: {
    ...mapMutations(["logout"]),
    toggleNav(index) {
      if (this.openNav && index !== this.activeKey) {
        return;
      } else {
        return this.openNav ? (this.openNav = false) : (this.openNav = true);
      }
    },
    closeNav() {
      if (this.openNav) {
        this.openNav = false;
        this.activeKey = 0;
      }
    },
    getPresser(index) {
      if (index === this.activeKey) {
        return (this.activeKey = 0);
      } else {
        return (this.activeKey = index);
      }
    },
    links(index) {
      if (index === 1) {
        return this.educationLinks;
      } else if (index === 2) {
        return this.strategiesLinks;
      } else if (index === 3) {
        return this.brokerLinks;
      }
    },
    updateScroll() {
      return (this.scrollPosition = window.top.scrollY);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  computed: {
    ...mapGetters(["userData"]),
  },
};
</script>

<style lang="css" scoped>
.container {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #7433c1;
  border-bottom: 2.5px solid rgb(253, 187, 3);
  display: none;
  transition: background-color 0.3s linear;
  z-index: 12;
}
.com-nav {
  display: none;
}
.container-cover {
  width: 100%;
  height: 80px;
  background-color: #c13339;
  display: none;
}
.scrollNav {
  background-color: rgba(239, 239, 239, 0.98);
  color: rgb(46, 45, 45) !important;
  transition: background-color 0.3s linear;
}
.logo,
.logo-2 {
  width: 270px;
  position: absolute;
  transition: opacity 0.3s linear;
}
.logo {
  opacity: 0;
}
.display {
  transition: opacity 0.3s linear;
  opacity: 1;
}
.opacity {
  transition: opacity 0.3s linear;
  opacity: 0;
}

li > button {
  background: inherit;
  border: none;
  text-transform: uppercase;
  color: whitesmoke;
  letter-spacing: 1px;
  font-weight: 550;
  cursor: pointer;
  font-size: 15px;
}
@media only screen and (min-width: 769px) {
  .container {
    display: block;
  }
  .container-cover {
    display: block;
  }
  .com-nav {
    display: block;
  }
}
.list {
  list-style-type: none;
  padding: 0;
  float: right;
  margin-top: 46px;
  padding-right: 20px;
}

.list li {
  margin: 60px 20px;
  display: inline-block;
  display: inline;
}

.list li a,
li a {
  text-decoration: none;
  text-transform: uppercase;
  color: whitesmoke;
  letter-spacing: 1px;
  font-weight: 550;
  cursor: pointer;
}

.list ul,
ul li {
  list-style-type: none;
  padding-left: 20px;
}
.closeNavigation {
  /* display: none;*/
  max-height: 0;
  /*and eventually delay an overflow:auto; */
  overflow: hidden;
  transition: max-height 0.5s, overflow 0s;
  background-color: #4a4a4a;
  position: fixed;
  width: 100%;
  z-index: 12;
  border-bottom: 2px solid rgb(253, 187, 3);
}
.openNavigation {
  /* display: none;*/
  overflow: hidden;
  max-height: 224px;
  transition: max-height 0.6s, overflow 0.6s 0.6s;
  transition-timing-function: ease-out;
  background-color: #4a4a4a;
  position: fixed;
  width: 100%;
  z-index: 12;
  border-bottom: 2.5px solid rgb(253, 187, 3);
}
.dynamic-links {
  line-height: 40px;
  margin-top: 36px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 0.8fr 1.5fr;
  grid-gap: 5px 5px;
}
.dynamic-links > li > a {
  padding: 10px 150px 10px 0;
}
.dynamic-links > li > a:hover {
  color: #1aeaff;
}
.highlight {
  border-bottom: 3px solid;
}
</style>
