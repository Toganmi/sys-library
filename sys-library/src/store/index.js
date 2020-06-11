import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_TITLE: "SET_TITLE",
  SET_HEAD_LEFT: "SET_HEAD_LEFT",
  SET_NAME: "SET_NAME"
}

const state = {
  headTitle: "每日精读",
  headLeft: false,
  name: null
}

const getters = {
  headTitle: state => state.headTitle,
  headLeft: state => state.headLeft,
  name: state => state.name
}

const mutations = {
  [types.SET_TITLE](state, headTitle) {
    if (headTitle) {
      state.headTitle = headTitle
    } else {
      state.headTitle = ""
    }
  },
  [types.SET_HEAD_LEFT](state, headLeft) {
    if (headLeft) {
      state.headLeft = headLeft
    } else {
      state.headLeft = false
    }
  },
  [types.SET_NAME](state, name) {
    if (name) {
      state.name = name
    } else {
      state.name = null
    }
  }
}

const actions = {
  setTitle: ({commit}, headTitle) => {
    commit(types.SET_TITLE, headTitle)
  },
  setHeadLeft: ({commit}, headLeft) => {
    commit(types.SET_HEAD_LEFT, headLeft)
  },
  setName:  ({commit}, name) => {
    commit(types.SET_NAME, name)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
