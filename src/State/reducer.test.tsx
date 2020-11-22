import {reducer, StateType, incCallBackAC, setCallBackAC, onChangeMaxInputAC, onChangeStartInputAC } from "./Reducer";

test('number increace', () => {
   let startNumberState: StateType = {
      number: 3,
      maxValue: 5,
      startValue: 0,
      incDisable: false,
      resetDisable: false,
      setDisable: false,
      errorMaxInput: false,
      errorStartInput: false,
      warning:false
      }
    
   const action = incCallBackAC();

   const endNumberState = reducer(startNumberState, action)

   expect(endNumberState.number).toBe(4);   
});

test('if maxInput change, maxValue should change', () => {
   let startNumberState: StateType = {
      number: 3,
      maxValue: 5,
      startValue: 0,
      incDisable: false,
      resetDisable: false,
      setDisable: false,
      errorMaxInput: false,
      errorStartInput: false,
      warning:false
      }
    
   const action = onChangeMaxInputAC("0");

   const endNumberState = reducer(startNumberState, action)

   expect(endNumberState.maxValue).toBe(0);   
   expect(endNumberState.setDisable).toBe(true);  
   expect(endNumberState.errorMaxInput).toBe(true);
   expect(endNumberState.warning).toBe(true);
});

test('if startInput change, startValue should change', () => {
   let startNumberState: StateType = {
      number: 3,
      maxValue: 5,
      startValue: 0,
      incDisable: false,
      resetDisable: false,
      setDisable: false,
      errorMaxInput: false,
      errorStartInput: false,
      warning:false
      }
    
   const action = onChangeStartInputAC("5");

   const endNumberState = reducer(startNumberState, action)

   expect(endNumberState.startValue).toBe(5);   
   expect(endNumberState.setDisable).toBe(true);  
   expect(endNumberState.errorStartInput).toBe(true);
   expect(endNumberState.warning).toBe(true);
});

test('onClick button set number should change new startValue', () => {
   let startNumberState: StateType = {
      number: 3,
      maxValue: 5,
      startValue: 0,
      incDisable: false,
      resetDisable: false,
      setDisable: false,
      errorMaxInput: false,
      errorStartInput: false,
      warning:false
      }
    
   const action = setCallBackAC();

   const endNumberState = reducer(startNumberState, action)

   expect(endNumberState.number).toBe(0);   
});