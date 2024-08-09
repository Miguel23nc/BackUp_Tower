
import {  ERRORES } from "./actions"

const initialState = {
    errores: []
}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case ERRORES:
            return {
                ...state,
                errores : action.payload
            }
        default:
            return state
    }
}
 export default rootReducer