export const state = () => ({
  counters: [],
});

export const mutations = () => ({
  add(state, payload) {
    state.counters.push({name: payload.name, count: payload.count});
  },
  remove(state, {counter}) {
    state.counters.splice(state.counters.indexOf(counter), 1);
  },
});
