
type ActionType = {
    type: "SET-MAX-VALUE"   
}

export let maxValueReducer = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            let stateCopy = state

            return stateCopy
        }
        default:
            throw new Error("I do not andastand this action.type!")
    }
}


export const setMaxValueAC = (): ActionType => {
    return { type: "SET-MAX-VALUE"}
 }
