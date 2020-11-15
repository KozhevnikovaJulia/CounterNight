import React, { useState, ChangeEvent } from 'react';
import {Button} from "./Button";
import {DisplayResult} from "./DisplayResult"
import s from "./CounterResult.module.css";

type CounterResultPropsType ={
    maxValue:number
    startValue:number
    changeMaxValue:(n:number)=>void
    changeStartValue:(n:number)=>void
    number:number
    setNumber: (number: number)=> void
    incCallBack:()=> void
    resetCallBack: ()=> void
    enterValue: boolean
    errorInput1: boolean
    errorInput2: boolean   
    }

export function CounterResult(props:CounterResultPropsType ) {
   
    let [incDisable, setIncDisable] = useState<boolean>(false)
    let [resetDisable, setResetDisable] = useState<boolean>(true)

    let incCallBack2 = () => {  props.incCallBack()
        setResetDisable(false);
        if (props.number >= props.maxValue - 1) {  setIncDisable(true) }
       
    }

    let resetCallBack2 = () => { props.resetCallBack()
         setIncDisable(false);
        if (props.number <= props.startValue + 1) {  setResetDisable(true) }
        
    }

     return (
    <div className={s.displayResult}>
            <DisplayResult number={props.number}
             maxValue={props.maxValue}
             startValue={props.startValue}
             enterValue={props.enterValue}
             errorInput1={props.errorInput1}
             errorInput2={props.errorInput2} />
        <div className={s.buttons}>
            <Button title="inc" incCallBack2={incCallBack2} incDisable={incDisable} />
            <Button title="reset" resetCallBack2={resetCallBack2} resetDisable={resetDisable} />
           
        </div>

    </div>
  );
}



