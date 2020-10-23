import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
export function Display2(){
    const count = useStoreState((state) => state.counter);
  const addValue = useStoreActions((actions)=>actions.increase);
  const subtractValue = useStoreActions((actions)=>actions.decrease);
  const receiveValue = useStoreActions((actions)=>actions.setValue)
  return (
    <div className="App">
    Display Component <br/><br/>
    {count}
    <br/>
     <button onClick={() =>receiveValue("Received ")}>Send Values</button> &nbsp;
    <br/>
    Change Value<br/>
     <button onClick={() =>addValue()}>Increase</button> &nbsp;
     <button onClick={() =>subtractValue()}>Decrease</button>
  </div>
  )
}