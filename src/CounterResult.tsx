import React, { useState, ChangeEvent } from "react"
import {Button} from "./Button"
import {DisplayResult} from "./DisplayResult"
import s from "./CounterResult.module.css"

type CounterResultPropsType ={
    maxValue:number
    startValue:number   
    number:number
    incCallBack:()=> void
    resetCallBack: ()=> void
    warning: boolean
    errorMaxInput: boolean
    errorStartInput: boolean   
    incDisable: boolean
    resetDisable: boolean
    }

export function CounterResult(props:CounterResultPropsType ) {
     return (
    <div className={s.displayResult}>
            <DisplayResult
             number={props.number}
             maxValue={props.maxValue}
             startValue={props.startValue}
             warning={props.warning}
             errorMaxInput={props.errorMaxInput}
             errorStartInput={props.errorStartInput} 
             />
        <div className={s.buttons}>
            <Button title="inc" incCallBack={props.incCallBack} incDisable={props.incDisable}
             />
            <Button title="reset" resetCallBack={props.resetCallBack} resetDisable={props.resetDisable}
              />
           
        </div>

    </div>
  );
}
