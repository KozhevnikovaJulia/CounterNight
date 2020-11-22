import React,  {useState} from 'react';
// import './App.css';
// import {CounterInputs} from "./CounterInputs";
// import {CounterResult} from "./CounterResult";

// export function App() {
//   let [maxValue, setMaxValue]= useState(5)
//   let [startValue, setStartValue]= useState(0)
//   let [number, setNumber] = useState<number>(startValue)
  
//   let [incDisable, setIncDisable] = useState<boolean>(false)
//   let [resetDisable, setResetDisable] = useState<boolean>(true)  
//   let [setDisable, setSetDisable] = useState<boolean>(true)
  
//   let [errorMaxInput, setErrorMaxInput] = useState<boolean>(false)
//   let [errorStartInput, setErrorStartInput] = useState<boolean>(false) 
//   let [warning, setWarning] = useState<boolean>(false)
    
//   const incCallBack = () => {
//     number++; setNumber(number)
//     setResetDisable(false)
//     if (number >= maxValue ) { setIncDisable(true) }
//   }
//   const resetCallBack = () => {
//     setNumber(startValue)
//     setIncDisable(false)
//     if (number <= startValue ) {  setResetDisable(true) }
//   }

//    return (
//     <div className="container">
//       <CounterInputs 
//        maxValue={maxValue}
//        startValue={startValue}
//        setMaxValue = {setMaxValue}
//        setStartValue = {setStartValue}
//        number={number}
//        setNumber={setNumber}
//        warning={warning}
//        setWarning={setWarning}      
//        setErrorMaxInput={setErrorMaxInput}
//        setErrorStartInput={setErrorStartInput}
//        errorMaxInput={errorMaxInput}
//        errorStartInput={errorStartInput}
//        setDisable={setDisable} 
//        setSetDisable={setSetDisable}/>
//       <CounterResult
//        maxValue={maxValue}
//        startValue={startValue}    
//        number={number} setNumber={setNumber}
//        incCallBack={incCallBack}
//        resetCallBack={resetCallBack}
//        warning={warning}
//        errorMaxInput={errorMaxInput}
//        errorStartInput={errorStartInput}
//        incDisable={incDisable}
//        resetDisable={resetDisable}/>
//         </div>
    
//   );
// }
