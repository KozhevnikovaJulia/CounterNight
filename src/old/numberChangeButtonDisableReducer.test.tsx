import {numberChangeReducer, numberIncreaseAC, numberResetAC, NumberStateType} from "./numberChangeReducer";
import {buttonDisabledReducer, ButtonDisableStateType} from "./buttonDisabledReducer"

test('number increase,resetButton undisable', () => {
    let startNumberState: NumberStateType = {number:3, startValue:0, maxValue:5};
    let startButtonDisableState: ButtonDisableStateType = {resetDisable:false, incDisable: false, setDisable: false}
       
    const action = numberIncreaseAC ();
    
    const endNumberState = numberChangeReducer(startNumberState, action)
    const endButtonDisableState = buttonDisabledReducer(startButtonDisableState, action )
     
    expect(endNumberState.number).toBe(4);   
    expect (endButtonDisableState.resetDisable).toBe(false);
    
 });

 test('number reset, incButton undisable', () => {
    let startNumberState: NumberStateType = {number:3, startValue:0, maxValue:5};
    let startButtonDisableState: ButtonDisableStateType = {resetDisable:false, incDisable: false, setDisable: false}
       
    const action = numberResetAC ();
    
    const endNumberState = numberChangeReducer(startNumberState, action)
    const endButtonDisableState = buttonDisabledReducer(startButtonDisableState, action )
     
    expect(endNumberState.number).toBe(0);   
    expect (endButtonDisableState.incDisable).toBe(false);
 });

