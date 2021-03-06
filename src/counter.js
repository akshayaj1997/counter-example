import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
export function Counter(){
    const value = useStoreState((state) => state.value);
  const addValue = useStoreActions((actions)=>actions.increase);
  const subtractValue = useStoreActions((actions)=>actions.decrease);
  return (
    <div className="App">
    Change Component <br/><br/>
     <button onClick={() =>addValue()}>Increase</button> &nbsp;
     <button onClick={() =>subtractValue()}>Decrease</button>
     <br/>
     Show received values
     <br/>
     {value}
  </div>
  )
}