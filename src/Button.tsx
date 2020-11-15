import React from 'react';
import s from "./Button.module.css";

type ButtonProps = {
  title: string
  incCallBack2?: () => void
  resetCallBack2?: () => void
  setCallBack?: () => void
  resetDisable?:boolean 
  incDisable?:boolean  
  setDisable?:boolean 
      
     }

export function Button(props: ButtonProps) {
   
  const onClickButton = () => {
    if (props.incCallBack2){props.incCallBack2()}
    else if (props.resetCallBack2){props.resetCallBack2()}
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


// data-action="buy"

// const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
//   e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
// };
{/* <span className={isBuying ? 'active' : ''} data-action="buy" onClick={changeAction}>
Buy
</span> */}