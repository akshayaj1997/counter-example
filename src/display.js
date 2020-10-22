import {  useStoreState } from 'easy-peasy';
import React from 'react';
export function Display(){
    const count = useStoreState((state) => state.counter);
  return (
    <div className="App">
        Display Component <br/><br/><br/>
    {count}
  </div>
  )
}