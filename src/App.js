import React from 'react';
import './App.css';
import { useStoreActions, useStoreState,StoreProvider } from 'easy-peasy';
import { store } from './store';
import { Counter } from './counter';
import {Display} from './display';
import {Display2} from './display2'
import ServerValuesDisplay from './serverValues';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <StoreProvider store={store}>
    <center><h1>Counter Component</h1></center>  
  <div style={{width:'40%',float:'right',borderStyle:'solid',height:'400px',padding:20,margin:'2%'}}><Counter/></div> 
  <div style={{width:'40%',float:'left',borderStyle:'solid',height:'400px',padding:20,margin:'2%'}}><Display/></div>
  <div style={{width:'40%',float:'left',borderStyle:'solid',height:'400px',padding:20,margin:'2%'}}><Display2/></div>
  <div style={{width:'40%',float:'right',borderStyle:'solid',height:'400px',padding:20,margin:'2%'}}><ServerValuesDisplay/></div> 
    </StoreProvider>
    </Provider>
  );
}

export default App;
