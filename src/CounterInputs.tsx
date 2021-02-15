import React, {ChangeEvent} from "react"
import "./App.css"
import {DisplayInputs} from "./DisplayInputs"
import s from "./CounterInputs.module.css"
import {Button} from "./Button"
import {restoreState, saveState} from "./localStorage"
import {setCallBackAC, onChangeMaxInputAC, onChangeStartInputAC,changeMaxValueToRestoreAC,
     changeStartValueToRestoreAC } from "./State/reducer"
import {useDispatch} from "react-redux"

type CounterInputsPropsType ={
  maxValue:number
  startValue:number
  number: number
  warning: boolean
  errorMaxInput: boolean
  errorStartInput: boolean
  setDisable: boolean
}


  export function CounterInputs(props:CounterInputsPropsType) {
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









   