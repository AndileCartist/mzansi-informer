 const state = () => ({
  homeFeed: [],
  topics: [
    { category: "businesses", total: 1, ofset: 0 },
    { category: "entertainments", total: 3 ,ofset: 0 },
    { category: "generals", total: 4 , ofset: 0 },
    { category: "health-news", total: 2 , ofset: 0 },
    { category: "sciences", total: 2 , ofset: 0 },
    { category: "sports", total: 3 , ofset: 0 },
    { category: "technologies", total: 2 , ofset: 0 },
  ]
})

const mutations = {
  addHomeFeed(state, article) {
    state.homeFeed.push(article)
  },
  incrementTopics(state) {
    state.topics.forEach(topic => {return topic.ofset = topic.ofset + topic.total})
  } 
}

 const getters = {
  gethomeFeed (state) {
    return state.homeFeed;
  },
  getTopics (state) {
    return state.topics;
  }
}

export default {
  state, 
  mutations,
  getters
}