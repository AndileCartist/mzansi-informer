<template>
  <div class="main">
    <div class="head">
      <mobile-navigation></mobile-navigation>
      <computer-navigation></computer-navigation>
    </div>
    
    <div >
       <router-view></router-view>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import MobileNavigation from "../components/MobileNavigation.vue";
import ComputerNavigation from "../components/ComputerNavigation.vue";
import {mapGetters, mapMutations} from "vuex"


//const apiUrl = process.env.API_URL || "http://localhost:1337";
export default {
  name: "Layout",
  components: {
    MobileNavigation,
    ComputerNavigation,
    Footer
  },
  data() {
    return {
      news: ''
    };
  },
  created() {
    this.KeepUserLogged()
  },
  methods: {
    ...mapMutations(['setUser']),
    KeepUserLogged() {
      let stored = localStorage.getItem('user')

      if(stored !== null && this.userData === null) {
        let user = JSON.parse(localStorage.getItem("user"));
        this.$store.commit("setUser", user);
        console.log(localStorage.getItem("user"))
      }
    }
  },
  computed: {
    ...mapGetters(['userData']),
  }
};
</script>

<style scoped>
.head {
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.main > :nth-child(1) {
  display: flex;
  flex-direction: column;
}

.footer {
  background: grey;
  min-height: 200px;
}
</style>
