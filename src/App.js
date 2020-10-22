import React from 'react';
import './App.css';
import { useStoreActions, useStoreState,StoreProvider } from 'easy-peasy';
import { store } from './store';
import { Counter } from './counter';
import {Display} from './display'
function App() {
  return (
    <StoreProvider store={store}>
    <center><h1>Counter Component</h1></center>  
  <div style={{width:'40%',float:'right',borderStyle:'solid',height:'400px',padding:20,margin:'2%'}}><Counter/></div> 
  <div style={{width:'40%',float:'left',borderStyle:'solid',height:'400px',padding:20,margin:'2%'}}><Display/></div>
    </StoreProvider>
  );
}

export default App;
