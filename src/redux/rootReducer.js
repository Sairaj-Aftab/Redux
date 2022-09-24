import { combineReducers } from "redux";
import colorReducer from "./colors/colorReducer";
import counterReducer from "./counter/counterReducer";
import foodReducer from "./food/foodReducer";


const rootReducer = combineReducers({
    counter : counterReducer,
    color : colorReducer,
    food : foodReducer
})

export default rootReducer;