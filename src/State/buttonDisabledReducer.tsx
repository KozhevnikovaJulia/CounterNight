import {numberChangeButtonDisableActionType} from "./numberChangeReducer"
type ActionType = resetDisableActionType | incDisableActionType | setDisableActionType | numberChangeButtonDisableActionType

type resetDisableActionType = {
    type: "RESET-DISABLE"    
}
type incDisableActionType = {
    type: "INC-DISABLE"     
}
type setDisableActionType = {
    type: "SET-DISABLE"         
}

export type ButtonDisableStateType = {
incDisable: boolean
resetDisable: boolean
setDisable: boolean
}

export let buttonDisabledReducer = (state: ButtonDisableStateType , action: ActionType): ButtonDisableStateType  => {
    switch (action.type) {
        case "RESET-DISABLE": {
            let stateCopy = {...state,
            resetDisable: !state.resetDisable
            }         
            return stateCopy
        }
        case "INC-DISABLE":   {
            let stateCopy = {...state,
                incDisable: !state.incDisable
                }   
            return stateCopy
        }
        case "SET-DISABLE" :   {
            let stateCopy = {...state,
                setDisable: !state.setDisable
                }   
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

export const resetDisableAC = (): ActionType => {
    return { type: "RESET-DISABLE"}
 }
 export const incDisableAC = (): ActionType => {
    return { type: "INC-DISABLE"}
 }
 export const setDisableAC = (): ActionType => {
    return { type: "SET-DISABLE" }
 }
//  let incCallBack2 = () => {  props.incCallBack()
//     setResetDisable(false);
//     if (props.number >= props.maxValue - 1) {  setIncDisable(true) }
   
// }

// let resetCallBack2 = () => { props.resetCallBack()
//      setIncDisable(false);
//     if (props.number <= props.startValue + 1) {  setResetDisable(true) }
    
// }