import React, {ChangeEvent, useState} from 'react';
import s from "./DisplayInputs.module.css";

type DisplayInputsPropsType={
  // onChangeInput1:(e:ChangeEvent<HTMLInputElement>) => void
  // onChangeInput2:(e:ChangeEvent<HTMLInputElement>) => void
  onChangeInput:(e:ChangeEvent<HTMLInputElement>) => void
  valueInput1: number
  valueInput2: number
  errorInput1: boolean
  errorInput2: boolean
  
}

export function DisplayInputs(props: DisplayInputsPropsType) {
  return (
    <div className={s.containerInputs}>
      <div className={s.inputsArea}>
      <span> max value</span> <input className={props.errorInput1? s.errorInput : s.input}  type="number" value={props.valueInput1} onChange={props.onChangeInput} data-currency="max"/>
      <span>start value</span> <input className={props.errorInput2? s.errorInput : s.input}  type="number" value={props.valueInput2} onChange={props.onChangeInput} data-currency="start"/>
      </div>
    </div>
  );
}

