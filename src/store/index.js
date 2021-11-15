import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    account_settings: {},
  },
  mutations: {
    changeAccountSettings(state, newValue) {
      state.account_settings = newValue;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
