import {numberChangeReducer, numberChangeButtonDisableAC} from "./numberChangeReducer";
import {buttonDisabledReducer, ButtonDisableStateType} from "./buttonDisabledReducer"

test('number change button disable', () => {
    let startNumberState: number = 0;
    let startButtonDisableState: ButtonDisableStateType = {resetDisable:false, incDisable: false, setDisable: false}
       
    const action = numberChangeButtonDisableAC(false, false, 0, 5);
    
    const endNumberState = numberChangeReducer(startNumberState, action)
    // const endButtonDisableState = buttonDisabledReducer(startButtonDisableState, action )
     
    expect(endNumberState).toBe(1);   
    
 });


 
//  let incCallBack2 = () => {  props.incCallBack()
//     setResetDisable(false);
//     if (props.number >= props.maxValue - 1) {  setIncDisable(true) }
   
// }

// let resetCallBack2 = () => { props.resetCallBack()
//      setIncDisable(false);
//     if (props.number <= props.startValue + 1) {  setResetDisable(true) }
    
// }