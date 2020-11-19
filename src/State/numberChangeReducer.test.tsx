import {numberChangeReducer, numberIncreaseAC, numberResetAC} from "./numberChangeReducer";

test('number should increase', () => {
    let startNumberState: number = 0;
       
    const action = numberIncreaseAC();
 
    const endNumberState = numberChangeReducer(startNumberState, action)
     
    expect(endNumberState).toBe(1);   
    
 });

 test('number should reset', () => {
    let startNumberState: number = 1;
     
    const action = numberResetAC(0);
 
    const endNumberState = numberChangeReducer(startNumberState, action)
 
    expect(endNumberState).toBe(0);   
 });