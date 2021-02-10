import Vue from 'vue'
import Vuex from 'vuex'
import TimeZone from './TimeZone'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TimeZone
  }
})
