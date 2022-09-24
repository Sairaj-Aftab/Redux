import { createStore } from "redux";
import rootReducer from "./rootReducer";

// Create Store
const store = createStore(rootReducer);

export default store;