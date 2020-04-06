import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // }, 可以方便使用，不使用action方法
  mutations
})
