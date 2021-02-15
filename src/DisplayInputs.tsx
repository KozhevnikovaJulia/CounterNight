import React, {ChangeEvent} from "react"
import s from "./DisplayInputs.module.css"

type DisplayInputsPropsType={
  onChangeMaxInput:(e:ChangeEvent<HTMLInputElement>) => void
  onChangeStartInput:(e:ChangeEvent<HTMLInputElement>) => void
  maxValue: number
  startValue: number
  errorMaxInput: boolean
  errorStartInput: boolean
  
}

export function DisplayInputs(props: DisplayInputsPropsType) {
  return (
    <div className={s.containerInputs}>
      <div className={s.inputsArea}>
      <span> max value</span> <input className={props.errorMaxInput? s.errorInput : s.input}  type="number" value={props.maxValue} onChange={props.onChangeMaxInput} data-currency="max"/>
      <span>start value</span> <input className={props.errorStartInput? s.errorInput : s.input}  type="number" value={props.startValue} onChange={props.onChangeStartInput} data-currency="start"/>
      </div>
    </div>
  );
}

