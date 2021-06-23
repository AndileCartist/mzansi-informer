<template>
  <div>
    <baner></baner>
    <div class="body">
      <div>
        <category-header header="Trending News"></category-header>
        <card :news="gethomeFeed"></card>
        <link-btn
          v-on:more="
            incrementTopics();
            fetchData();
          "
        ></link-btn>
      </div>
      <div>
        <news-latter></news-latter>
      </div>
    </div>
  </div>
</template>

<script>
import Baner from "../components/Baner.vue";
import CategoryHeader from "../components/CategoryHeader.vue";
import Card from "../components/Card.vue";
import NewsLatter from "../components/NewsLatter.vue";
import axios from "axios";
import LinkBtn from "../components/LinkBtn.vue";
const apiUrl = process.env.API_URL || "https://mzansi-curator.herokuapp.com/";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "home-page",
  components: {
    Baner,
    CategoryHeader,
    Card,
    LinkBtn,
    NewsLatter,
  },
  data() {
    return {
      news: [],
    };
  },
  computed: {
    ...mapGetters(["getTopics", "gethomeFeed"]),
    homepageNews() {
      let stories = [];
      this.news.forEach((feed) => {
        feed.value.data.map((value) => {
          return stories.push(value);
        });
      });
      return this.shuffleArray(stories);
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapMutations(["incrementTopics"]),
    work() {
      return alert("working");
    },
    // ...mapMutations(["addHomeFeed"]),
    shuffleArray(array) {
      var currentIndex = array.length,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
    async fetchData() {
      try {
        let urls = this.getTopics.map((url) => {
          return axios.get(
            `${apiUrl}${url.category}?_sort=publishedAt:DESC&_start=${url.ofset}&_limit=${url.total}`
          );
        });

        Promise.allSettled(urls).then((results) => {
          this.news = results;
          let stories = [];
          results.forEach((feed) => {
            feed.value.data.map((value) => {
              return stories.push(value);
            });
          });
          this.shuffleArray(stories).forEach((result) => {
            return this.$store.commit("addHomeFeed", result);
          });
        });
      } catch (err) {
        alert(err.message || "An error occurred.");
        console.log(err);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.body {
  min-height: 850px;
  display: flex;
  flex-direction: column;
  border-top: 2.5px solid rgb(34, 31, 31);
}
.body > :nth-child(1) {
  background: whitesmoke;
  width: 100%;
  min-height: 650px;
}
.body > :nth-child(2) {
  background: rgb(245 245 245);
  width: 100%;
  min-height: 200px;
}

@media only screen and (min-width: 900px) {
  .body {
    flex-direction: row;
  }
  .body > :nth-child(1) {
    width: 65%;
    min-height: 100%;
  }
  .body > :nth-child(2) {
    width: 35%;
    min-height: 100%;
    padding-top: 200px;
    padding-right: 10px;
  }
}
@media only screen and (min-width: 1077px) {
  .body > :nth-child(1) {
    width: 76%;
  }
  .body > :nth-child(2) {
    width: 24%;
  }
}
</style>
