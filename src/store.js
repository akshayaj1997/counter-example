import { createStore, action } from 'easy-peasy';

export const store = createStore({
  counter:0,
  increase: action((state, payload) => {
    state.counter= state.counter+1;
  }),
  decrease: action((state, payload) => {
    state.counter= state.counter-1;
  }),
});