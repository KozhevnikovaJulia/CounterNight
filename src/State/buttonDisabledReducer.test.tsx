import {buttonDisabledReducer, resetDisableAC, incDisableAC, setDisableAC, ButtonDisableStateType} from "./buttonDisabledReducer";

test('button inc should disable', () => {
   let startNumberState: ButtonDisableStateType = {incDisable:false, resetDisable: false, setDisable: false};
    
   const action = incDisableAC();

   const endNumberState = buttonDisabledReducer(startNumberState, action)

   expect(endNumberState.incDisable).toBe(true);   
});

test('button reset should disable', () => {
    let startNumberState: ButtonDisableStateType = {incDisable:false, resetDisable: false, setDisable: false};
     
    const action = resetDisableAC();
 
    const endNumberState = buttonDisabledReducer(startNumberState, action)
 
    expect(endNumberState.resetDisable).toBe(true);   
    
 });

 

 test('button set should disable', () => {
   let startNumberState:ButtonDisableStateType = {incDisable:false, resetDisable: false, setDisable: false};
    
   const action = setDisableAC();

   const endNumberState = buttonDisabledReducer(startNumberState, action)

   expect(endNumberState.setDisable).toBe(true);   
});