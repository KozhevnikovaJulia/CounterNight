import React,  {useState, useReducer} from 'react';
import './App.css';
import {CounterInputs} from "../CounterInputs";
import {CounterResult} from "../CounterResult";
import {reducer, incCallBackAC, resetCallBackAC} from "../State/reducer"

export function App() {
let [state,dispatch] = useReducer(reducer, {
  number: 0,
  maxValue: 5,
  startValue: 0,
  incDisable: false,
  resetDisable: true,
  setDisable: true,
  errorMaxInput: false,
  errorStartInput: false,
  warning:false  
})

  const incCallBack = () => {
    const action = incCallBackAC()
    dispatch(action)
  }
  const resetCallBack = () => {
    const action = resetCallBackAC()
   dispatch(action)
  }

   return (
    <div className="container">
      <CounterInputs 
       maxValue={state.maxValue}
       startValue={state.startValue}      
       number={state.number}      
       warning={state.warning}       
       errorMaxInput={state.errorMaxInput}
       errorStartInput={state.errorStartInput}
       setDisable={state.setDisable} />
      <CounterResult
       maxValue={state.maxValue}
       startValue={state.startValue}    
       number={state.number} 
       incCallBack={incCallBack}
       resetCallBack={resetCallBack}
       warning={state.warning}
       errorMaxInput={state.errorMaxInput}
       errorStartInput={state.errorStartInput}
       incDisable={state.incDisable}
       resetDisable={state.resetDisable}/>
        </div>
    
  );
}
