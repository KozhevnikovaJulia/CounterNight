import React, {ChangeEvent, useState} from "react";
import './App.css';
import {DisplayInputs} from "./DisplayInputs"
import s from "./CounterInputs.module.css";
import {Button} from "./Button";
import {restoreState, saveState} from "./localStorage";

type CounterInputsPropsType ={
  maxValue:number
  startValue:number
  changeMaxValue:(n:number)=>void
  changeStartValue:(n:number)=>void
  number: number
  setNumber: (number: number)=> void
  enterValue: boolean
  toggleEnterValue: (enterValue: boolean)=> void
  enterValueTrue: ()=> void
  setErrorInput1: (errorInput1: boolean)=> void
  setErrorInput2: (errorInput2: boolean)=> void
  errorInput1: boolean
  errorInput2: boolean

}


  export function CounterInputs(props:CounterInputsPropsType) {
   
    let [setDisable, setSetDisable] = useState<boolean>(true)
    let [valueInput1, setValueInput1] = useState<number>(5)
    let [valueInput2, setValueInput2] = useState<number>(0)


    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'max') {
                setValueInput1(Number(e.currentTarget.value));
                setSetDisable(false)
                props.enterValueTrue()
                if (Number(e.currentTarget.value) <= valueInput2 || Number(e.currentTarget.value) < 0) {
                    props.setErrorInput1(true)
                    setSetDisable(true)
                } else {
                    props.setErrorInput1(false)
                    setSetDisable(false)
                }
            } else {
                setValueInput2(Number(e.currentTarget.value));
                setSetDisable(false)
                props.enterValueTrue()
                if (Number(e.currentTarget.value) >= valueInput1 || Number(e.currentTarget.value) < 0) {
                    props.setErrorInput2(true)
                    setSetDisable(true)
                }
                else {
                    props.setErrorInput2(false)
                    setSetDisable(false)
                }
            }
             
    }
}

    // const onChangeInput1 = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValueInput1(Number(e.currentTarget.value));
    //     setSetDisable(false)
    //     props.enterValueTrue()
    //     if (Number(e.currentTarget.value) <= valueInput2 || Number(e.currentTarget.value) < 0) {
    //         props.setErrorInput1(true)
    //         setSetDisable(true)
    //     } else {
    //         props.setErrorInput1(false)
    //         setSetDisable(false)
    //     }
    // }

    // const onChangeInput2 = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValueInput2(Number(e.currentTarget.value));
    //     setSetDisable(false)
    //     props.enterValueTrue()
    //     if (Number(e.currentTarget.value) >= valueInput1 || Number(e.currentTarget.value) < 0) {
    //         props.setErrorInput2(true)
    //         setSetDisable(true)
    //     }
    //     else {
    //         props.setErrorInput2(false)
    //         setSetDisable(false)
    //     }
    // }

      // функции для localStorage
        const saveMaxValue = () =>  { saveState<string>("maxValueCounter", String(valueInput1)) }
        const saveStartValue = () => { saveState<string>("startValueCounter", String(valueInput2)) }
    
    const restoreMaxValue = () => {
        let restoreMaxValue_: string = restoreState<string>("maxValueCounter", "")
        setValueInput1(Number(restoreMaxValue_))
        props.changeMaxValue(Number(restoreMaxValue_))
    }

    const restoreStartValue = () => {
        let restoreStartValue_: string = restoreState<string>("startValueCounter", "")
        setValueInput2(Number(restoreStartValue_))
        props.changeStartValue(Number(restoreStartValue_))
        props.setNumber(Number(restoreStartValue_))
    }


    const setCallBack = ()=> { 
            
        props.changeMaxValue (valueInput1)
        props.changeStartValue (valueInput2)
        props.setNumber(valueInput2)
        setSetDisable(true)
        props.toggleEnterValue (props.enterValue)
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
             valueInput1={valueInput1}
             valueInput2={valueInput2}
            //  onChangeInput1={onChangeInput1}
            //  onChangeInput2={onChangeInput2} 
            onChangeInput={onChangeInput}
             errorInput1={props.errorInput1}
             errorInput2= {props.errorInput2}/>

            <div className={s.buttons}>
                <Button title="set" setCallBack={setCallBack} setDisable={setDisable}/>
            </div>

        </div>
  );
}






        

