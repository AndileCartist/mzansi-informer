const state = () => ({
    scienceFeed: [],
    scienceTopic: { category: "sciences", total: 10, ofset: 0 },
  });
  
  const mutations = {
    addScienceFeed(state, article) {
      state.scienceFeed.push(article);
    },
    incrementScienceTopics(state) {   
        return (state.scienceTopic.ofset = state.scienceTopic.ofset + state.scienceTopic.total);
    },
  };
  
  const getters = {
    getScienceFeed(state) {
      return state.scienceFeed;
    },
    getScienceTopic(state) {
      return state.scienceTopic;
    },
  };
  
  export default {
    state,
    mutations,
    getters,
  };
  