import {createLocalVue, mount} from '@vue/test-utils';
import Vuex from 'vuex';
import AddCounterComponent from '@/components/AddCounterComponent';
// import {state, mutations, actions} from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counters: [{name: 'Test', count: 0}],
  },
  getters: {
    getCounters(state) {
      return state.counters;
    },
  },
  mutations: {
    addNewCounter(state, counter) {
      state.counters.push(counter);
    },
  },
  actions: {
    createNewCounter(context, counter) {
      context.commit('addNewCounter', counter);
    },
  },
});

describe('AddCounterComponent.vue', () => {
  it('renders text add new counter.', () => {
    const wrapper = mount(AddCounterComponent, {
      store,
    });
    expect(wrapper.text()).toContain('Add New Counter');
  });
  it('calls addNewCounter mutation.', async () => {
    const wrapper = mount(AddCounterComponent, {
      propsData: {
        name: 'Test 2',
        count: 5,
      },
      store,
      // mocks: {
      //   dispatch: jest.fn(),
      //   commit: jest.fn(),
      // },
    });
    await wrapper.find('button').trigger('click');
    expect(store.state.counters.length).toBe(2);
  });
});
