import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
export function Counter(){
    const count = useStoreState((state) => state.counter);
  const addValue = useStoreActions((actions)=>actions.increase);
  const subtractValue = useStoreActions((actions)=>actions.decrease);
  return (
    <div className="App">
    Change Component <br/><br/>
     <button onClick={() =>addValue()}>Increase</button> &nbsp;
     <button onClick={() =>subtractValue()}>Decrease</button>
  </div>
  )
}