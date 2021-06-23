const state = () => ({
    entertainmentFeed: [],
    entertainmentTopic: { category: "entertainments", total: 10, ofset: 0 },
  });
  
  const mutations = {
    addEntertainmentFeed(state, article) {
      state.entertainmentFeed.push(article);
    },
    incrementEntertainmentTopics(state) {
        return state.entertainmentTopic.ofset = state.entertainmentTopic.ofset + state.entertainmentTopic.total;
    },
  };
  
  const getters = {
    getEntertainmentFeed(state) {
      return state.entertainmentFeed;
    },
    getEntertainmentTopic(state) {
      return state.entertainmentTopic;
    },
  };
  
  export default {
    state,
    mutations,
    getters,
  };
  