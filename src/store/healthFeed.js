const state = () => ({
    healthFeed: [],
    healthTopic: { category: "health-news", total: 10, ofset: 0 },
  });
  
  const mutations = {
    addHealthFeed(state, article) {
      state.healthFeed.push(article);
    },
    incrementHealthTopics(state) {
        return state.healthTopic.ofset = state.healthTopic.ofset + state.healthTopic.total;
    },
  };
  
  const getters = {
    getHealthFeed(state) {
      return state.healthFeed;
    },
    getHealthTopic(state) {
      return state.healthTopic;
    },
  };
  
  export default {
    state,
    mutations,
    getters,
  };
  