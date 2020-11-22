type ActionType = maxValueChangeAfterSetActionType | startValueChangeAfterSetActionType

type maxValueChangeAfterSetActionType = {
    type: "MAXVALUE-CHANGE-SET"  
    number: number
}
type startValueChangeAfterSetActionType = {
    type: "STARTVALUE-CHANGE-SET"  
    number: number
}

export let valueChangeAfterSetReducer = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "MAXVALUE-CHANGE-SET" : {
            let stateCopy = state
          stateCopy = action.number
            return stateCopy
        }
        case "STARTVALUE-CHANGE-SET" : {
            let stateCopy = state
            stateCopy = action.number
            return stateCopy
        }
        default:
            throw new Error("I do not andastand this action.type!")
    }
}

export const maxValueChangeAfterSetAC = (number: number): ActionType => {
    return { type: "MAXVALUE-CHANGE-SET", number }
 }
 export const startValueChangeAfterSetAC = (number: number): ActionType => {
    return { type: "STARTVALUE-CHANGE-SET", number }
 }