import React,  {useState, useReducer} from "react"
import "./App.css"
import {CounterInputs} from "./CounterInputs"
import {CounterResult} from "./CounterResult"
import {incCallBackAC, resetCallBackAC} from "./State/reducer"
import {AppRootStateType} from "./State/Store/store"
import {useSelector, useDispatch} from "react-redux"
import {StateType} from "./State/reducer"

export function App() {
  const state = useSelector<AppRootStateType, StateType>(state => state.state)
  const dispatch = useDispatch()

  const incCallBack = () => { const action = incCallBackAC()
    dispatch(action)
  }
  const resetCallBack = () => { const action = resetCallBackAC()
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
       setDisable={state.setDisable}
        />
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
       resetDisable={state.resetDisable}
       />
        </div>
    
  );
}
