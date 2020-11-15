import React from 'react';
import s from "./DisplayResult.module.css";


type DisplayResultPropsType={
  number: number
  maxValue: number
  startValue: number
  enterValue: boolean
  errorInput1: boolean
  errorInput2: boolean
 }

export function DisplayResult (props: DisplayResultPropsType) {
     
  return (
    <div >
    {props.enterValue ? <div className={s.spanInterValue}>  {props.errorInput1 || props.errorInput2? "Incorrect value!" : "Enter values and press 'set'"}</div>
    : <div className={props.number >= props.maxValue || props.number< props.startValue ? s.containerResultError  : s.containerResult}>{props.number} </div> }
    
    </div>
  );
}

