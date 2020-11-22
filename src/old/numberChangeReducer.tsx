type ActionType =
 | numberIncreaseActionType 
 | numberReasetActionType 
 | maxValueInputToMaxValueActionType 
 | startValueInputToStartValueActionType 

export type numberIncreaseActionType = {
    type: "NUMBER-INCREASE" 
}
export type numberReasetActionType = {
    type: "NUMBER-RESET"    
}
export type maxValueInputToMaxValueActionType = {
    type: "MAXVALUE-FROM-INPUT"    
}
export type startValueInputToStartValueActionType = {
    type: "STARTVALUE-FROM-INPUT"    
}

export type NumberStateType = {
    number: number
    startValue: number
    maxValue: number
}

export let numberChangeReducer = (state: NumberStateType, action: ActionType): NumberStateType => {
    switch (action.type) {
        case "NUMBER-INCREASE": {
            let stateCopy = {...state,
            number: state.number+1}
                    
            return stateCopy
        }
        case "NUMBER-RESET": {
            let stateCopy = {...state}
            stateCopy.number=stateCopy.startValue
                    
            return stateCopy
        }
        case "MAXVALUE-FROM-INPUT": {
            let stateCopy = {...state}
                    //ДОПИСАСТЬ
            return stateCopy
        }    
        case "STARTVALUE-FROM-INPUT" : {
            let stateCopy = {...state}
               //ДОПИСАТЬ
            return stateCopy
        }      
        default:
            throw new Error("I do not andastand this action.type!")
    }
}

// const onChangeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {        
//     props.setMaxValue(Number(e.currentTarget.value));
//     props.setSetDisable(false)
//     props.setWarning(true)
//     if (Number(e.currentTarget.value) <= props.startValue || Number(e.currentTarget.value) < 0) {
//         props.setErrorMaxInput(true)
//         props.setSetDisable(true)
//     } else {
//         props.setErrorMaxInput(false)
//         props.setSetDisable(false)
//     }
// }



export const numberIncreaseAC = (): ActionType => {
    return { type: "NUMBER-INCREASE"}
 }
 export const numberResetAC = (): ActionType => {
    return { type: "NUMBER-RESET"}
 }
 export const  maxValueInputToMaxValueAC = (): ActionType => {
    return { type: "MAXVALUE-FROM-INPUT"  }
 }

 export const  startValueInputToStartValueAC = (): ActionType => {
    return { type: "STARTVALUE-FROM-INPUT"}
 }
