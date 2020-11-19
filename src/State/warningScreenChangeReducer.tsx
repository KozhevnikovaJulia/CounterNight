type ActionType = warningScreenTrueActionType | warningScreenToggleActionType

type warningScreenTrueActionType = {
    type: "WARNING-TRUE" 
}
type warningScreenToggleActionType = {
    type: "WARNING-TOGGLE"    
    warning: boolean
}

export let warningScreenChangeReducer = (state: boolean, action: ActionType): boolean => {
    switch (action.type) {
        case "WARNING-TRUE": {
            let stateCopy = state
           stateCopy = true
            return stateCopy
        }
        case "WARNING-TOGGLE": {
            let stateCopy = state
            stateCopy = !action.warning
            return stateCopy
        }
        default:
            throw new Error("I do not andastand this action.type!")
    }
}

export const warningScreenTrueAC = (): ActionType => {
    return { type: "WARNING-TRUE"}
 }
 export const warningScreenToggleAC = (warning: boolean): ActionType => {
    return { type: "WARNING-TOGGLE", warning}
 }