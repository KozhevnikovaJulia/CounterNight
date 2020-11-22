import React from 'react';
import s from "./Button.module.css";

type ButtonProps = {
  title: string
  incCallBack?: () => void
  resetCallBack?: () => void
  setCallBack?: () => void
  resetDisable?:boolean 
  incDisable?:boolean  
  setDisable?:boolean   
      
     }

export function Button(props: ButtonProps) {
   
  const onClickButton = () => {
    if (props.incCallBack){props.incCallBack()}
    else if (props.resetCallBack){props.resetCallBack()}
    else if(props.setCallBack){props.setCallBack()}
    else {}
  }
  return (
   <div >
   
<button className={s.button} disabled={props.incDisable ? props.incDisable : props.resetDisable || props.setDisable} onClick={onClickButton }>
    {props.title}</button>
    </div>
);
}
