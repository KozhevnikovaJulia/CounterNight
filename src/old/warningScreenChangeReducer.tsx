type ActionType = warningScreenChangeActionType 

type warningScreenChangeActionType = {
    type: "WARNING-CHANGE" 
}

export let warningScreenChangeReducer = (state: boolean, action: ActionType): boolean => {
    switch (action.type) {
        case "WARNING-CHANGE": {
            let stateCopy = state
           stateCopy = !stateCopy
            return stateCopy
        }      
        default:
            throw new Error("I do not andastand this action.type!")
    }
}

export const warningScreenChangeAC = (): ActionType => {
    return { type: "WARNING-CHANGE"}
 }
 