import { DANGER, DARK, INFO, LIGHT, SUCCESS, WARNING } from "./actionType"
import { initialState } from "./initialState"


// Redux Reducer
const colorReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case DARK:
            return 'dark'
        case WARNING:
            return 'warning'
        case DANGER:
            return 'danger'
        case SUCCESS:
            return 'success'
        case INFO:
            return 'info'
        case LIGHT:
            return 'light'
            
    
        default:
            return state;
    }
}

export default colorReducer;