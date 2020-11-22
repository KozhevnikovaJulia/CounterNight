import {numberIncreaseActionType, numberReasetActionType } from "./numberChangeReducer";
type ActionType = 
 | resetDisableActionType
 | incDisableActionType 
 | setDisableActionType 
 | numberIncreaseActionType 
 | numberReasetActionType
 | numberMaxValueIncDisableActionType
 | numberStartValueResetDisableActionType 

type resetDisableActionType = {
    type: "RESET-DISABLE"    
}
type incDisableActionType = {
    type: "INC-DISABLE"     
}
type setDisableActionType = {
    type: "SET-DISABLE"         
}
type numberMaxValueIncDisableActionType = {
    type: "NUMBERMAXVALUE-INCDISABLE"
    number: number
    maxValue: number        
}
type numberStartValueResetDisableActionType = {
    type: "NUMBERSTARTVALUE-RESETDISABLE" 
    number: number
    startValue: number            
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
        case "NUMBER-INCREASE": {
            let stateCopy = {...state,
             resetDisable: false,                      
                }                      
                              
            return stateCopy
        }
        case "NUMBER-RESET": {
            let stateCopy = {...state,
                incDisable: false
                   }                      
            return stateCopy
        }        
        case "NUMBERMAXVALUE-INCDISABLE": { 
            let stateCopy = {...state} 
            if ( action.number >=action.maxValue){
                stateCopy.incDisable=true    
            } 
                                                       
            return stateCopy
        }    
        case "NUMBERSTARTVALUE-RESETDISABLE": {
            let stateCopy = {...state}
            if ( action.number <=action.startValue){
                stateCopy.resetDisable=true    
            }                               
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
 export const numberMaxValueIncDisableAC = (number: number, maxValue: number ): ActionType => {
    return { type: "NUMBERMAXVALUE-INCDISABLE", number, maxValue }
 }
 export const numberStartValueResetDisableAC = (number: number, startValue: number): ActionType => {
    return { type: "NUMBERSTARTVALUE-RESETDISABLE", number, startValue }
 }
