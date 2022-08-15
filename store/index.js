export const state = () => ({
  counters: [],
});

export const getters = {
  getCounters(state) {
    return state.counters;
  },
};

export const mutations = {
  // add(state, payload) {
  //   state.counters.push({name: payload.name, count: payload.count});
  // },
  // remove(state, {counter}) {
  //   state.counters.splice(state.counters.indexOf(counter), 1);
  // },
  addNewCounter(state, counter) {
    state.counters.push(counter);
  },
};

export const actions = {
  createNewCounter(context, counter) {
    context.commit('addNewCounter', counter);
  },
};
