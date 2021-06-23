import Vue from "vue";
import Vuex from "vuex";
import homeFeed from "./homeFeed"
import sportFeed from "./sportFeed"
import scienceFeed from "./scienceFeed"
import businessFeed from "./businessFeed"
import entertainmentFeed from "./entertainmentFeed"
import generalFeed from "./generalFeed"
import technology from "./technologyFeed"
import health from "./healthFeed"
import auth from "./auth"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    homeFeed,
    sportFeed,
    scienceFeed,
    technology,
    generalFeed,
    entertainmentFeed,
    businessFeed,
    health,
    auth
  },
});

export default store;
