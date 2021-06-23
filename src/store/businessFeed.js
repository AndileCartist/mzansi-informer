const state = () => ({
  businessFeed: [],
  businessTopic: { category: "businesses", total: 10, ofset: 0 },
});

const mutations = {
  addBusinessFeed(state, article) {
    state.businessFeed.push(article);
  },
  incrementBusinessTopics(state) {
      return state.businessTopic.ofset = state.businessTopic.ofset + state.businessTopic.total;
  },
};

const getters = {
  getBusinessFeed(state) {
    return state.businessFeed;
  },
  getBusinessTopic(state) {
    return state.businessTopic;
  },
};

export default {
  state,
  mutations,
  getters,
};
