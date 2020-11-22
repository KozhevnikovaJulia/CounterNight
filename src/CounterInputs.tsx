import React, {ChangeEvent, useState} from "react";
import './App.css';
import {DisplayInputs} from "./DisplayInputs"
import s from "./CounterInputs.module.css";
import {Button} from "./Button";
import {restoreState, saveState} from "./localStorage";
import {setCallBackAC, onChangeMaxInputAC, onChangeStartInputAC,changeMaxValueToRestoreAC,
     changeStartValueToRestoreAC } from "./State/reducer";
import {useSelector, useDispatch} from "react-redux";
import {AppRootStateType} from "./State/Store/store";
import {StateType} from "./State/reducer"

type CounterInputsPropsType ={
  maxValue:number
  startValue:number
  // setMaxValue:(n:number)=> void
  // setStartValue:(n:number) => void
  number: number
  // setNumber: (number: number)=> void
  warning: boolean
  // setWarning:(warning: boolean)=> void
  // setErrorMaxInput: (errorMaxInput: boolean)=> void
  // setErrorStartInput: (errorStartInput: boolean)=> void
  errorMaxInput: boolean
  errorStartInput: boolean
  setDisable: boolean
  // setSetDisable: (setDisable: boolean)=> void
}


  export function CounterInputs(props:CounterInputsPropsType) {
    // const state = useSelector<AppRootStateType, StateType>(state =>state.state)
    const dispatch = useDispatch()

  
   
    const onChangeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {  
        const action = onChangeMaxInputAC(e.currentTarget.value)
        dispatch(action)        
            }
            
    const onChangeStartInput = (e: ChangeEvent<HTMLInputElement>) => {
        const action = onChangeStartInputAC(e.currentTarget.value)
        dispatch(action)        
            }               
           
             
          // функции для localStorage
        const saveMaxValue = () =>  { saveState<string>("maxValueCounter", String(props.maxValue)) }
        const saveStartValue = () => { saveState<string>("startValueCounter", String(props.startValue)) }
        
    const restoreMaxValue = () => {
        let restoreMaxValue_: string = restoreState<string>("maxValueCounter", "")
        const action = changeMaxValueToRestoreAC(restoreMaxValue_)
        dispatch(action)                 
    }

    const restoreStartValue = () => {
        let restoreStartValue_: string = restoreState<string>("startValueCounter", "")
        const action = changeStartValueToRestoreAC (restoreStartValue_)
        dispatch(action)       
    }


    const setCallBack = ()=> { 
        // props.setMaxValue (props.maxValue)
        // props.setStartValue(props.startValue)
        const action = setCallBackAC()
        dispatch(action)       
        saveMaxValue ()
        saveStartValue()
                           }
   
    React.useEffect(() => {
        restoreMaxValue()
        restoreStartValue()
    }, [])

   

    return (
        <div className={s.displayInputs}>
            <DisplayInputs
             maxValue={props.maxValue}
             startValue={props.startValue}
            //  onChangeInput={onChangeInput}
            onChangeMaxInput={onChangeMaxInput}
            onChangeStartInput = {onChangeStartInput}
             errorMaxInput={props.errorMaxInput}
             errorStartInput= {props.errorStartInput}
             />

            <div className={s.buttons}>
                <Button title="set" setCallBack={setCallBack} setDisable={props.setDisable} />
            </div>

        </div>
  );
}






// const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.currentTarget.dataset.currency) {
//         const trigger: string = e.currentTarget.dataset.currency;
//         if (trigger === 'max') {
//             props.setMaxValue(Number(e.currentTarget.value));
//             props.setSetDisable(false)
//             props.setWarning(true)
//             if (Number(e.currentTarget.value) <= props.startValue || Number(e.currentTarget.value) < 0) {
//                 props.setErrorMaxInput(true)
//                 props.setSetDisable(true)
//             } else {
//                 props.setErrorMaxInput(false)
//                 props.setSetDisable(false)
//             }
//         } else {
//             props.setStartValue (Number(e.currentTarget.value));
//             props.setSetDisable(false)
//             props.setWarning(true)
//             if (Number(e.currentTarget.value) >= props.maxValue || Number(e.currentTarget.value) < 0) {
//                 props.setErrorStartInput(true)
//                 props.setSetDisable(true)
//             }
//             else {
//                 props.setErrorStartInput(false)
//                 props.setSetDisable(false)
//             }
//         }
         
// }
// }


   