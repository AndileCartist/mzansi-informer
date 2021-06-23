const state = () => ({
    technologyFeed: [],
    technologyTopic: { category: "technologies", total: 10, ofset: 0 },
  });
  
  const mutations = {
    addTechnologyFeed(state, article) {
      state.technologyFeed.push(article);
    },
    incrementTechnologyTopics(state) {
        return state.technologyTopic.ofset = state.technologyTopic.ofset + state.technologyTopic.total;
    },
  };
  
  const getters = {
    getTechnologyFeed(state) {
      return state.technologyFeed;
    },
    getTechnologyTopic(state) {
      return state.technologyTopic;
    },
  };
  
  export default {
    state,
    mutations,
    getters,
  };
  