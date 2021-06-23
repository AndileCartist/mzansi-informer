<template>
  <div class="body">
    <div>
      <category-header :header="headings + ' NEWS'"></category-header>
      <card :news="getReleventGettter()"></card>
      <link-btn
        v-on:more="
          getIncrementor();
          getData();
        "
      ></link-btn>
    </div>
    <div></div>
  </div>
</template>

<script>
import LinkBtn from "./LinkBtn.vue";
import Card from "./Card.vue";
import CategoryHeader from "./CategoryHeader.vue";
import { mapGetters, mapMutations } from "vuex";
const apiUrl = process.env.API_URL || "https://mzansi-curator.herokuapp.com/";
import axios from "axios";
export default {
  name: "dynamicFeed-page",
  components: {
    CategoryHeader,
    Card,
    LinkBtn,
  },
  data() {
    return {
      //  headings: this.$route.name
    };
  },
  created() {
    this.getData();
  },
  watch: {
    // call again the method if the route changes
    $route: "getData",
  },
  computed: {
    ...mapGetters([
      "getSportFeed",
      "getSportTopic",
      "getScienceFeed",
      "getScienceTopic",
      "getBusinessFeed",
      "getBusinessTopic",
      "getEntertainmentFeed",
      "getEntertainmentTopic",
      "getGeneralFeed",
      "getGeneralTopic",
      "getHealthFeed",
      "getHealthTopic",
      "getTechnologyFeed",
      "getTechnologyTopic",
    ]),
    headings() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapMutations([
      "addSportFeed",
      "addScienceFeed",
      "incrementSportTopics",
      "incrementScienceTopics",
      "addBusinessFeed",
      "incrementBusinessTopics",
      "addEntertainmentFeed",
      "incrementEntertainmentTopics",
      "addGeneralFeed",
      "incrementGeneralTopics",
      "addHealthFeed",
      "incrementHealthTopics",
      "addTechnologyFeed",
      "incrementTechnologyTopics",
    ]),
    shuffleArray(array) {
      var currentIndex = array.length,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
    async getData() {
      try {
        let url = this.getUrl();
        //   let mutator = this.getMutator()
        console.log(url)
        let { data } = await axios.get(
          `${apiUrl}${url.category}?_sort=publishedAt:DESC&_start=${url.ofset}&_limit=${url.total}`
        );
        console.log(this.$route.name);
        this.shuffleArray(data).forEach((result) => {
          return this.$store.commit(this.getMutator(), result);
        });
        //this.getIncrementor()
      } catch (err) {
        alert(err.message || "An error occurred.");
        console.log(err);
        console.log(this.$route.name);
      }
    },
    getUrl() {
      // let topics = ['technology', 'general', 'entertainment', 'health', 'science', 'business', ]
      switch (this.$route.name) {
        case "sports":
          return this.getSportTopic;

        case "science":
          return this.getScienceTopic;

        case "technology":
          return this.getTechnologyTopic;

        case "health":
          return this.getHealthTopic;

        case "entertainment":
          return this.getEntertainmentTopic;

        case "business":
          return this.getBusinessTopic;

        case "general":
          return this.getGeneralTopic;
        default:
          alert("Incorrect URL");
      }
    },
    getMutator() {
      switch (this.$route.name) {
        case "sports":
          return "addSportFeed";

        case "science":
          return "addScienceFeed";

        case "general":
          return "addGeneralFeed";

        case "business":
          return "addBusinessFeed";

        case "entertainment":
          return "addEntertainmentFeed";

        case "health":
          return "addHealthFeed";

        case "technology":
          return "addTechnologyFeed";
        default:
          alert("Incorrect URL");
      }
    },
    getReleventGettter() {
      switch (this.$route.name) {
        case "sports":
          return this.getSportFeed;

        case "science":
          return this.getScienceFeed;

        case "general":
          return this.getGeneralFeed;

        case "business":
          return this.getBusinessFeed;

        case "entertainment":
          return this.getEntertainmentFeed;

        case "health":
          return this.getHealthFeed;

        case "technology":
          return this.getTechnologyFeed;
        default:
          return alert("Incorrect URL");
      }
    },
    getIncrementor() {
      switch (this.$route.name) {
        case "sports":
          return this.incrementSportTopics();

        case "science":
          return this.incrementScienceTopics();

        case "general":
          return this.incrementGeneralTopics();

        case "business":
          return this.incrementBusinessTopics();

        case "entertainment":
          return this.incrementEntertainmentTopics();

        case "health":
          return this.incrementHealthTopics();

        case "technology":
          return this.incrementTechnologyTopics();
        default:
          return alert("Incorrect URL");
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
  background: #f5f5f5;
  width: 100%;
  min-height: 200px;
}

@media only screen and (min-width: 900px) {
  .body {
    flex-direction: row;
  }
  .body > :nth-child(1) {
    width: 70%;
    min-height: 100%;
  }
  .body > :nth-child(2) {
    width: 30%;
    min-height: 100%;
  }
}
@media only screen and (min-width: 1077px) {
  .body > :nth-child(1) {
    width: 80%;
  }
  .body > :nth-child(2) {
    width: 20%;
  }
}
</style>
