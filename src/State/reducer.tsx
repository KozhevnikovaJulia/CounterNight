type ActionType = 
| ReturnType<typeof incCallBackAC>
| ReturnType<typeof resetCallBackAC>
| ReturnType<typeof setCallBackAC>
| ReturnType<typeof onChangeMaxInputAC> 
| ReturnType<typeof onChangeStartInputAC> 
| ReturnType<typeof changeMaxValueToRestoreAC> 
| ReturnType<typeof changeStartValueToRestoreAC> 


export type StateType = {
number: number
maxValue: number
startValue: number    
incDisable: boolean
resetDisable: boolean
setDisable: boolean
errorMaxInput: boolean
errorStartInput: boolean
warning:boolean
}
const initialState: StateType = {
    number: 0,
    maxValue: 5,
    startValue: 0,
    incDisable: false,
    resetDisable: true,
    setDisable: true,
    errorMaxInput: false,
    errorStartInput: false,
    warning:false  
}

export let reducer = (state: StateType = initialState , action: ActionType): StateType  => {
    switch (action.type) {
        case "INC-CALLBACK": {
            let stateCopy = {...state}
            stateCopy.number=stateCopy.number+1
            stateCopy.resetDisable=false           
            if ( stateCopy.number >= stateCopy.maxValue){
                stateCopy.incDisable=true    
            }                    
            return stateCopy
        }

        case "RESET-CALLBACK": {
            let stateCopy = {...state}
            stateCopy.number=stateCopy.startValue
            stateCopy.incDisable=false           
            if ( stateCopy.number <= stateCopy.startValue){
                stateCopy.resetDisable=true    
            } 
             
            return stateCopy
        }
        case "ONCHANGE-MAXINPUT": {
            let stateCopy = {...state}
            stateCopy.maxValue=Number(action.maxInputValue) 
            stateCopy.incDisable=true 
            stateCopy.resetDisable=true
            stateCopy.setDisable=false     
            stateCopy.warning=true    
            if (Number(action.maxInputValue) <= stateCopy.startValue || Number(action.maxInputValue) < 0) {
                stateCopy.errorMaxInput = true
                stateCopy.setDisable = true
            } else {
                stateCopy.errorMaxInput = false
                stateCopy.setDisable = false
            }  
            return stateCopy
        }
        case "ONCHANGE-STARTINPUT": {
            let stateCopy = {...state}
            stateCopy.startValue=Number(action.startInputValue) 
            stateCopy.incDisable=true 
            stateCopy.resetDisable=true
            stateCopy.setDisable=false 
            stateCopy.warning=true 
            if (Number(action.startInputValue) >= stateCopy.maxValue || Number(action.startInputValue) < 0) {
                stateCopy.errorStartInput = true
                stateCopy.setDisable = true
            } else {
                stateCopy.errorStartInput = false
                stateCopy.setDisable = false
            }                 
            return stateCopy
        }
        case "SET-CALLBACK": {
            let stateCopy = {...state} 
                    
            stateCopy.number=stateCopy.startValue
            stateCopy.incDisable=false  
            stateCopy.setDisable=true    
            stateCopy.warning=!stateCopy.warning              
                   
            return stateCopy
        }

        case "CHANGE=MAXVALUE-TORESTORE": {
            let stateCopy = { ...state }
            stateCopy.maxValue = (Number(action.restoreMaxValue))
            return stateCopy
        }

        case "CHANGE=STARTVALUE-TORESTORE": {
            let stateCopy = {...state}            
            stateCopy.startValue = (Number(action.restoreStartValue))  
            stateCopy.number = (Number(action.restoreStartValue))                 
            return stateCopy
        }
               default: return state;
            
    }
}


export const incCallBackAC = () => {
    return { type: "INC-CALLBACK"} as const
 } 
 export const resetCallBackAC = () => {
    return { type: "RESET-CALLBACK"} as const
 } 
 export const setCallBackAC = () => {
    return { type: "SET-CALLBACK"} as const
 } 
 export const onChangeMaxInputAC = (maxInputValue:string) => {
    return { type: "ONCHANGE-MAXINPUT", maxInputValue} as const
 } 
 export const onChangeStartInputAC = (startInputValue:string) => {
    return { type: "ONCHANGE-STARTINPUT", startInputValue} as const
 } 
 export const changeMaxValueToRestoreAC = (restoreMaxValue:string) => {
    return { type: "CHANGE=MAXVALUE-TORESTORE", restoreMaxValue} as const
 } 
 export const changeStartValueToRestoreAC = (restoreStartValue:string) => {
    return { type: "CHANGE=STARTVALUE-TORESTORE", restoreStartValue} as const
 } 
