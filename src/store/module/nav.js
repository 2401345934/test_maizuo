

const module = {
  namespaced: true,
  state: {
    isNav: true
  },
  mutations: {
    show(state) {
      state.isNav = true;
    },
    hide(state) {
      state.isNav = false;
    },
  }
}

export default module