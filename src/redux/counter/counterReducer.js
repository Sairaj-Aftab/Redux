import { DECREMENT, INCREMENT } from "./actionType";
import { initialState } from "./initialState";


// Counter Reducer
const counterReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
    
        default:
            return state;
    }
};

export default counterReducer;