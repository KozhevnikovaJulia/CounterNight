import React from "react"
import s from "./DisplayResult.module.css"


type DisplayResultPropsType={
  number: number
  maxValue: number
  startValue: number
  warning: boolean
  errorMaxInput: boolean
  errorStartInput: boolean
 }

export function DisplayResult (props: DisplayResultPropsType) {
     
  return (
    <div >
    {props.warning ? <div className={s.spanInterValue}>  {props.errorMaxInput || props.errorStartInput? "Incorrect value!" : "Enter values and press 'set'"}</div>
    : <div className={props.number >= props.maxValue || props.number< props.startValue ? s.containerResultError  : s.containerResult}>{props.number} </div> }
    
    </div>
  );
}

