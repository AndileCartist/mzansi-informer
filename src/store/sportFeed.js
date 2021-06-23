const state = () => ({
  sportFeed: [],
  sportTopic: { category: "sports", total: 10, ofset: 0 },
});

const mutations = {
  addSportFeed(state, article) {
    state.sportFeed.push(article);
  },
  incrementSportTopics(state) {
      return state.sportTopic.ofset = state.sportTopic.ofset + state.sportTopic.total;
  },
};

const getters = {
  getSportFeed(state) {
    return state.sportFeed;
  },
  getSportTopic(state) {
    return state.sportTopic;
  },
};

export default {
  state,
  mutations,
  getters,
};
