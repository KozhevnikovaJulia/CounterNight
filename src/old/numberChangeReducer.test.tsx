import {numberChangeReducer, numberIncreaseAC, numberResetAC, NumberStateType} from "./numberChangeReducer";

test('number should increase', () => {
    let startNumberState: NumberStateType = {number:3, startValue:0, maxValue:5};
       
    const action = numberIncreaseAC();
 
    const endNumberState = numberChangeReducer(startNumberState, action)
     
    expect(endNumberState.number).toBe(4);   
    
 });

 test('number should reset', () => {
    let startNumberState: NumberStateType = {number:3, startValue:0, maxValue:5};
     
    const action = numberResetAC();
 
    const endNumberState = numberChangeReducer(startNumberState, action)
 
    expect(endNumberState.number).toBe(0);   
 });