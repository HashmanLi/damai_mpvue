import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    SwipeAndGridData: {
      grid: [],
      swipe: []
    }
  },
  getters: {
    grid: state => state.SwipeAndGridData.grid,
    mySwipe: state => state.SwipeAndGridData.swipe
  },
  mutations: {
    changeSwipeAndGridData(state, payload) {
      state.SwipeAndGridData = payload
    }
  },
  actions: {
    getSwipeAndGridData({ commit }) {
      wx.request({
        url: "https://damaimaitian.oss-cn-beijing.aliyuncs.com/v1/home/852",
        method: "GET",
        success: res => {
          let payload = {
            grid: res.data.menu.items,
            swipe: res.data.banner
          }
          commit("changeSwipeAndGridData", payload)
        },
        fail: res => {
          console.log(res)
        }
      })
    }
  }
})

export default store
