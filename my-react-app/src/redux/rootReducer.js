
import { LOGIN } from "./actions"

const initialState = {
    userData: []
}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userData : action.payload
            }
        default:
            return state
    }
}
 export default rootReducer