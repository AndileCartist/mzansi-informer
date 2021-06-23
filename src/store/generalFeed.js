const state = () => ({
    generalFeed: [],
    generalTopic: { category: "generals", total: 10, ofset: 0 },
  });
  
  const mutations = {
    addGeneralFeed(state, article) {
      state.generalFeed.push(article);
    },
    incrementGeneralTopics(state) {
        return state.generalTopic.ofset = state.generalTopic.ofset + state.generalTopic.total;
    },
  };
  
  const getters = {
    getGeneralFeed(state) {
      return state.generalFeed;
    },
    getGeneralTopic(state) {
      return state.generalTopic;
    },
  };
  
  export default {
    state,
    mutations,
    getters,
  };
  