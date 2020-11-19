import React,  {useState} from 'react';
import './App.css';
import {CounterInputs} from "./CounterInputs";
import {CounterResult} from "./CounterResult";

export function App() {

  let [errorInput1, setErrorInput1] = useState<boolean>(false)
  let [errorInput2, setErrorInput2] = useState<boolean>(false)
 
  let [enterValue, setEnterValue] = useState<boolean>(false)
  
  let [maxValue, setMaxValue]= useState(5)
  let [startValue, setStartValue]= useState(0)
  let [number, setNumber] = useState<number>(startValue)

  const enterValueTrue = () => setEnterValue (true)
  const toggleEnterValue = () => setEnterValue (!enterValue)

  const changeMaxValue=(n:number)=>setMaxValue(n)
  const changeStartValue=(n:number)=>setStartValue(n)
  
  const incCallBack = () => { number++; setNumber(number)}
  const resetCallBack = () => { setNumber(startValue)}

  

   return (
    <div className="container">
      <CounterInputs 
      maxValue={maxValue}
       startValue={startValue}
       changeMaxValue={changeMaxValue}
       changeStartValue={changeStartValue}
        number={number}
         setNumber={setNumber}
        enterValue={enterValue}
        toggleEnterValue={toggleEnterValue}
        enterValueTrue={enterValueTrue} 
        setErrorInput1={setErrorInput1}
        setErrorInput2={setErrorInput2}
        errorInput1={errorInput1}
        errorInput2={errorInput2} />
      <CounterResult
      maxValue={maxValue}
       startValue={startValue}
       changeMaxValue={changeMaxValue}
       changeStartValue={changeStartValue}
       number={number} setNumber={setNumber}
       incCallBack={incCallBack}
       resetCallBack={resetCallBack}
       enterValue={enterValue}
       errorInput1={errorInput1}
       errorInput2={errorInput2}/>
        </div>
    
  );
}
