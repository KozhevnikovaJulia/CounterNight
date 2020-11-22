import {warningScreenChangeReducer, warningScreenChangeAC} from "./warningScreenChangeReducer";

test('warning should true', () => {
    let startNumberState: boolean = true;
     
    const action = warningScreenChangeAC();
 
    const endNumberState = warningScreenChangeReducer(startNumberState, action)
 
    expect(endNumberState).toBe(false);   
 });

