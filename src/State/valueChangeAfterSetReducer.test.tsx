import {valueChangeAfterSetReducer, maxValueChangeAfterSetAC, startValueChangeAfterSetAC} from "./valueChangeAfterSetReducer";

test('maxValue should change', () => {
    let startNumberState: number = 0;
     
    const action = maxValueChangeAfterSetAC (5);
 
    const endNumberState = valueChangeAfterSetReducer(startNumberState, action)
 
    expect(endNumberState).toBe(5);   
 });

 test('startValue should change', () => {
    let startNumberState: number = 0;
     
    const action = startValueChangeAfterSetAC(6);
 
    const endNumberState = valueChangeAfterSetReducer(startNumberState, action)
 
    expect(endNumberState).toBe(6);   
 });