import {  useStoreState } from 'easy-peasy';
import React from 'react';
export function Display(){
    const count = useStoreState((state) => state.counter);
    const values = useStoreState((state) => state.serverValues);
  return (
    <div className="App">
        Display Component <br/><br/><br/>
    {count}
    <br/>
    {JSON.stringify(values)}
  </div>
  )
}