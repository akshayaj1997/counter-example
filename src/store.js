import { createStore, action,thunk } from 'easy-peasy';
import axios from 'axios'

export const store = createStore({
  counter:0,
  value:[],
  serverValues:[],
  increase: action((state, payload) => {
    state.counter= state.counter+1;
  }),
  decrease: action((state, payload) => {
    state.counter= state.counter-1;
  }),
  setValue: action((state,payload)=>{state.value=[...state.value,payload]}),
  storeServerValues: action((state,payload)=>{
    state.serverValues = [...state.serverValues,payload[state.counter]]
    //state.serverValues.splice(0,state.serverValues.length,payload[state.counter]);
  }),
 getServerValue: thunk(async(actions,payload)=>{
      const response = await axios
      .get("https://jsonplaceholder.typicode.com/albums");
      var data =[]
      // response.status === 200 ? data = response.data : data = []
      data=response.data
      actions.storeServerValues(data);
  }),
});