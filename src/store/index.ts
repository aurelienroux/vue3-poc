import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
    session: {
      id: 123,
      name: "Montreal",
    },
  },
  mutations: {
    UPDATE_LOADING(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    updateLoading({ commit }) {
      commit("UPDATE_LOADING");
    },
  },
  modules: {},
});
