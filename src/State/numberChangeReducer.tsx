type ActionType = numberIncreaseActionType | numberReasetActionType | numberChangeButtonDisableActionType 

type numberIncreaseActionType = {
    type: "NUMBER-INCREASE"      
}
type numberReasetActionType = {
    type: "NUMBER-RESET" 
    startValue: number     
}
export type numberChangeButtonDisableActionType = {
    type: "NUMBER-CHANGE-BUTTON-DISABLE" 
    resetDisable: boolean
    incDisable:boolean
    startValue: number   
    maxValue: number 
}


export let numberChangeReducer = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "NUMBER-INCREASE": {
            let stateCopy = state
            stateCopy++            
            return stateCopy
        }
        case "NUMBER-RESET": {
            let stateCopy = state
            stateCopy = action.startValue           
            return stateCopy
        }
        case "NUMBER-CHANGE-BUTTON-DISABLE" : {
            let stateCopy = state
            //ДОПИСАТЬ        
            return stateCopy
        }
        default:
            throw new Error("I do not andastand this action.type!")
    }
}


// action.resetDisable = false 
//             if (stateCopy >= action.maxValue - 1) {
//                 action.incDisable = true
//             }

// action.incDisable = false
// if (stateCopy <= action.maxValue + 1) {
//     action.resetDisable = true
// }
export const numberIncreaseAC = (): ActionType => {
    return { type: "NUMBER-INCREASE"}
 }
 export const numberResetAC = (startValue: number): ActionType => {
    return { type: "NUMBER-RESET", startValue}
 }
export const numberChangeButtonDisableAC = (resetDisable: boolean, incDisable:boolean, startValue:number, maxValue: number): ActionType => {
    return { type: "NUMBER-CHANGE-BUTTON-DISABLE", resetDisable, incDisable, startValue, maxValue}
}

//  let incCallBack2 = () => {  props.incCallBack()
//     setResetDisable(false);
//     if (props.number >= props.maxValue - 1) {  setIncDisable(true) }
   
// }

// let resetCallBack2 = () => { props.resetCallBack()
//      setIncDisable(false);
//     if (props.number <= props.startValue + 1) {  setResetDisable(true) }
    
// }