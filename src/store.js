import { createStore, action } from 'easy-peasy';

export const store = createStore({
  counter:0,
  value:[],
  increase: action((state, payload) => {
    state.counter= state.counter+1;
  }),
  decrease: action((state, payload) => {
    state.counter= state.counter-1;
  }),
  setValue: action((state,payload)=>{state.value=[...state.value,payload]})
});