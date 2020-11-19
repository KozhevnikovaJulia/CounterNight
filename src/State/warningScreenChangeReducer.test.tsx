import {warningScreenChangeReducer, warningScreenTrueAC, warningScreenToggleAC} from "./warningScreenChangeReducer";

test('warning should true', () => {
    let startNumberState: boolean = true;
     
    const action = warningScreenTrueAC();
 
    const endNumberState = warningScreenChangeReducer(startNumberState, action)
 
    expect(endNumberState).toBe(true);   
 });

 test('warning should change', () => {
    let startNumberState: boolean = true;
     
    const action = warningScreenToggleAC(true);
 
    const endNumberState = warningScreenChangeReducer(startNumberState, action)
 
    expect(endNumberState).toBe(false);   
 });